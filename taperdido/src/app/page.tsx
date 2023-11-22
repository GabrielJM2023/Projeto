

import Link from "../../node_modules/next/link"
import Inicio from '../app/login/page'

export default function Home() {
  //Ver se está logado pra dai chamar ou não o login, porém, por enquanto ja chama o login direto
  return (
    <main>
      <div>
        <Inicio></Inicio>
      </div>
    </main>
  )
}
