import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { getSessionFromCookies } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const categorie = searchParams.get('categorie')

  const db = getSupabaseAdmin()
  let query = db.from('site_config').select('*').order('cle')
  if (categorie) query = query.eq('categorie', categorie)

  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function PUT(request: NextRequest) {
  const session = await getSessionFromCookies()
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const body = await request.json() as { cle: string; valeur: string }[]
  const db = getSupabaseAdmin()
  const updates = body.map(({ cle, valeur }) =>
    db.from('site_config').update({ valeur }).eq('cle', cle)
  )
  await Promise.all(updates)
  return NextResponse.json({ success: true })
}
