import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client public (lecture seule — pages publiques)
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Client admin — instancié à la demande, jamais au chargement du module
export function getSupabaseAdmin() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY
  return createClient(SUPABASE_URL, serviceKey, {
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
