
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { RedirectType } from 'next/navigation'
import { redirect } from 'next/navigation'
import Perfil from './login'

export default async function PagePerfil() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect("/home", RedirectType.replace)
  }

  return <Perfil />

}