import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ryizcghnzfxeihrgjzzv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5aXpjZ2huemZ4ZWlocmdqenp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNjE4NDcsImV4cCI6MjAxMzYzNzg0N30.5o1U-cYQsMJogC2NE2kn0KJDvkf4KJYdmeX3VPJmHus';

export const supabase = createClient(supabaseUrl, supabaseKey);
