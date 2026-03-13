import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://sotlcehytwdetuplzjfn.supabase.co",
  "sb_publishable_bpae8J7hEdmuaiCmRGglEw__Bpuh7hT"
);

export { supabase as s };
