import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pazseeiqabcnmstjnbbi.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhenNlZWlxYWJjbm1zdGpuYmJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMDczMzMsImV4cCI6MjAxOTU4MzMzM30.PWFupZpTpUAdk2JjQjc_TI_yBmdzwpBbBt3rF-K4SDY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
