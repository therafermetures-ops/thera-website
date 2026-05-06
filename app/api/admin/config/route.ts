import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { getSessionFromCookies } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const categorie = searchParams.get('categorie')

  let query = getSupabaseAdmin().from('site_config').select('*').order('cle')
  if (categorie) query = query.eq('categorie', categorie)

  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function PUT(request: NextRequest) {
  const session = await getSessionFromCookies()
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const body = await request.json() as { cle: string; valeur: string; categorie?: string }[]

  // Upsert: update if exists, insert if new
  const { error } = await getSupabaseAdmin()
    .from('site_config')
    .upsert(
      body.map(({ cle, valeur, categorie }) => ({
        cle,
        valeur,
        categorie: categorie || 'general',
        updated_at: new Date().toISOString(),
      })),
      { onConflict: 'cle', ignoreDuplicates: false }
    )

  if (error) {
    // Fallback: update row by row (in case upsert fails due to constraints)
    const updates = body.map(({ cle, valeur }) =>
      getSupabaseAdmin().from('site_config').update({ valeur }).eq('cle', cle)
    )
    await Promise.all(updates)
  }

  return NextResponse.json({ success: true })
}
