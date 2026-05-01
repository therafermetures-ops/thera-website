import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { getSessionFromCookies } from '@/lib/auth'

export async function GET() {
  const { data, error } = await getSupabaseAdmin()
    .from('actualites')
    .select('*')
    .order('date_publiee', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const session = await getSessionFromCookies()
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const body = await request.json()
  const { titre, description, photo_url, statut, date_publiee } = body

  const { data, error } = await getSupabaseAdmin()
    .from('actualites')
    .insert({ titre, description, photo_url, statut: statut || 'publiee', date_publiee })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
