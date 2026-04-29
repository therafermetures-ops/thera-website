import { createClient, SupabaseClient } from '@supabase/supabase-js'

// ⚠️ Variables lues à l'appel (lazy), jamais au chargement du module
// Évite l'erreur "supabaseUrl is required" pendant le build Vercel

let _supabase: SupabaseClient | null = null
let _supabaseAdmin: SupabaseClient | null = null

// Client public (pages publiques — lecture seule)
export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    if (!url || !key) throw new Error('Supabase URL ou clé anon manquante')
    _supabase = createClient(url, key)
  }
  return _supabase
}

// Client admin — service role, accès complet
export function getSupabaseAdmin(): SupabaseClient {
  if (!_supabaseAdmin) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    if (!url || !serviceKey) throw new Error('Supabase URL ou service key manquante')
    _supabaseAdmin = createClient(url, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    })
  }
  return _supabaseAdmin
}

// Alias rétrocompatibilité pour les pages publiques
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return (getSupabase() as unknown as Record<string, unknown>)[prop as string]
  }
})

export type Actualite = {
  id: string
  titre: string
  description: string
  photo_url: string | null
  statut: 'publiee' | 'brouillon' | 'archive'
  date_publiee: string
  created_at: string
  updated_at: string
}

export type SiteConfig = {
  id: string
  cle: string
  valeur: string | null
  categorie: string
  updated_at: string
}
