import { createClient } from '@supabase/supabase-js';

const SupaClient = createClient( process.env.SUPABASE_URL || '', process.env.SUPABASE_API_KEY || '');

export { SupaClient };