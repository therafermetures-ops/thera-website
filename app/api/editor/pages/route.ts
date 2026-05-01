import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const EDITOR_SECRET = process.env.EDITOR_SECRET
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.EDITOR_ORIGIN ?? 'http://localhost:3001',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-editor-token',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}

// Retourne la liste des page_id existantes en base + celles déclarées statiquement
const STATIC_PAGES = ['home', 'about', 'contact']

export async function GET(req: NextRequest) {
  if (req.headers.get('x-editor-token') !== EDITOR_SECRET)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: CORS_HEADERS })

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const { data } = await supabase.from('editor_pages').select('page_id')
    const dbPages = (data ?? []).map((r: { page_id: string }) => r.page_id)
    const all = Array.from(new Set([...STATIC_PAGES, ...dbPages]))
    return NextResponse.json(all, { headers: CORS_HEADERS })
  } catch {
    return NextResponse.json(STATIC_PAGES, { headers: CORS_HEADERS })
  }
}
