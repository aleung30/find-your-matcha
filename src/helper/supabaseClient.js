import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

/* supabase instance that connects to supabase project */
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;