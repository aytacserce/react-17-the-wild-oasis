import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pafpxghxqwihensdstja.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZnB4Z2h4cXdpaGVuc2RzdGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MDI4NzQsImV4cCI6MjAxMTM3ODg3NH0.5nDy21tSf9qpmiR2nLteKiJbG_eUMmfifiOuqyFAUws";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
