import {createClient} from '@supabase/supabase-js';

// Replace the following with your actual Supabase project URL and API key, or use import.meta.env if using Vite
export const supabase = createClient(
  "https://gsucfwibcxmwqfpypspn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzdWNmd2liY3htd3FmcHlwc3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MDc3ODYsImV4cCI6MjA2NzI4Mzc4Nn0.7_NMc_RG-y5h6xkQ9IAvv-oS7JHFF7Yk7ObLh9YhWjs"
);