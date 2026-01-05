import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zqeswbbxndjvqbzuxhih.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZXN3YmJ4bmRqdnFienV4aGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMTM1NjIsImV4cCI6MjA3ODc4OTU2Mn0.9bxcmaBQxDgPhXqHrUE5cdhXvOWDc05TAwJLb4cdaz4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);