import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js';

export default function AuthForm() {
   const supabase = createClient('https://ryizcghnzfxeihrgjzzv.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5aXpjZ2huemZ4ZWlocmdqenp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNjE4NDcsImV4cCI6MjAxMzYzNzg0N30.5o1U-cYQsMJogC2NE2kn0KJDvkf4KJYdmeX3VPJmHus')

   return (
      <Auth
         supabaseClient={supabase}
         view="magic_link"
         appearance={{ theme: ThemeSupa }}
         theme="dark"
         showLinks={false}
         providers={[]}
         redirectTo="http://localhost:3000/Home/Home"
      />
   )
}
