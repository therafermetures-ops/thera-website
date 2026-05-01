import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const EDITOR_SECRET = process.env.EDITOR_SECRET
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.EDITOR_ORIGIN ?? 'http://localhost:3001',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-editor-token',
}

function authCheck(req: NextRequest): boolean {
  const token = req.headers.get('x-editor-token')
  return token === EDITOR_SECRET
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(url, key)
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}

export async function GET(req: NextRequest) {
  if (!authCheck(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const pageId = req.nextUrl.searchParams.get('id')
  if (!pageId) {
    return NextResponse.json({ error: 'Missing id param' }, { status: 400 })
  }

  const supabase = getSupabase()
  const { data, error } = await supabase
    .from('editor_pages')
    .select('*')
    .eq('page_id', pageId)
    .single()

  if (error || !data) {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 })
  }

  return NextResponse.json(data.content, { headers: CORS_HEADERS })
}

export async function POST(req: NextRequest) {
  if (!authCheck(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  if (!body?.pageId) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const supabase = getSupabase()
  const { error } = await supabase
    .from('editor_pages')
    .upsert({ page_id: body.pageId, content: body, updated_at: new Date().toISOString() })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true }, { headers: CORS_HEADERS })
}
