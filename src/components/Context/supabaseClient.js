import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wtqcdxypmjjmgoydwfca.supabase.co'; // Replace with your actual Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cWNkeHlwbWpqbWdveWR3ZmNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2NTI0OTcsImV4cCI6MjA0OTIyODQ5N30.GzHkPhYHuFfCSEvWX4H_I2FfSPF6NIPfnsnZQ_lyjgw'; // Replace with your actual anon public key

export const supabase = createClient(supabaseUrl, supabaseKey);