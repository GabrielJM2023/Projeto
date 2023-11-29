
import Cadastro from './cadastro'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '/types/constants'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default async function PagePerfil() {

    const {
        data: { session },
    } = await supabase.auth.getSession()


    return <Cadastro />

}