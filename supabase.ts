import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fzatnifprbuvwlphmyal.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6YXRuaWZwcmJ1dndscGhteWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwOTkyMjYsImV4cCI6MjA3MjY3NTIyNn0.gN5NAv1oRpaiChWiiSPTX8RmhufOaqhgLR4e5W5rjgw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);