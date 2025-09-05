// js/supabase.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://YOUR_PROJECT_ID.supabase.co"; // <- ganti
const SUPABASE_ANON = "YOUR_ANON_PUBLIC_KEY"; // <- ganti

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
