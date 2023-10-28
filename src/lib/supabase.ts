import { createClient } from '@supabase/supabase-js'


export const supabase = createClient(import.meta.env.VITE_supaURL, import.meta.env.VITE_anonKey)
