import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fondoxhhuajjadmmafuj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvbmRveGhodWFqamFkbW1hZnVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDkyNjAsImV4cCI6MjA3MzkyNTI2MH0.ScN-Gh2_7sKkUbQ51X-qELZbgmACg8ZaCDPtlzgvtBk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
