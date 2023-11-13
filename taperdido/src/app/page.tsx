"use client"

import Link from "../../node_modules/next/link"

export default function Home() {
  //Ver se está logado pra dai chamar ou não o login, porém, por enquanto ja chama o login direto
  return (
    <main>
      <div>
        <Link href='/login'>Login</Link>

        <p>

        </p>

        <Link href='conexao'>Conexao</Link>
      </div>
    </main>
  )
}
