import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rgsvdostgkfzrcgbithx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnc3Zkb3N0Z2tmenJjZ2JpdGh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTcwMTUsImV4cCI6MjA2MzA3MzAxNX0.AeooKE4kXnWTBxfoWAoMAm4uHxt807oOP7jRFlWljjE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
