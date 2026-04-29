import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client public (lecture)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client admin (lecture + écriture complète)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
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
