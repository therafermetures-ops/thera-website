import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

// Client public (lecture seule — utilisé côté client et pages publiques)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client admin — créé à la demande pour éviter l'erreur au build si la clé manque
export function getSupabaseAdmin() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey
  return createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

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
