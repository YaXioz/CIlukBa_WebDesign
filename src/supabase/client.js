import { createBrowserClient } from "@supabase/ssr";

export default function createSupabaseClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}
const NEXT_PUBLIC_SUPABASE_URL = "https://mppsjkhhkmkwzbcxwvwi.supabase.co";
const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcHNqa2hoa21rd3piY3h3dndpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1MDMyNzgsImV4cCI6MjA0MDA3OTI3OH0.mEg7DQjeW7ccHLGiNKIkcZtOkBnFZV9aOXX7_FDeGbI";
