import { createClient } from '@supabase/supabase-js'


export const supabase = createClient(import.meta.env.VITE_supabaseUrl, import.meta.env.VITE_supabaseKey)