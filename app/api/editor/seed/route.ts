import { NextRequest, NextResponse } from 'next/server'
import theraHome from './seeds/thera-home.json'

const EDITOR_SECRET = process.env.EDITOR_SECRET
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.EDITOR_ORIGIN ?? 'http://localhost:3001',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-editor-token',
}

const SEEDS: Record<string, unknown> = {
  home: theraHome,
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}

export async function GET(req: NextRequest) {
  if (req.headers.get('x-editor-token') !== EDITOR_SECRET)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: CORS_HEADERS })

  const pageId = req.nextUrl.searchParams.get('id') ?? 'home'
  const seed = SEEDS[pageId]

  if (!seed)
    return NextResponse.json({ error: 'No seed for this page' }, { status: 404, headers: CORS_HEADERS })

  return NextResponse.json(seed, { headers: CORS_HEADERS })
}
