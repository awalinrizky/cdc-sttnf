import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://sotlcehytwdetuplzjfn.supabase.co";
const supabaseAnonKey = "sb_publishable_bpae8J7hEdmuaiCmRGglEw__Bpuh7hT";
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

export { supabase as s };
