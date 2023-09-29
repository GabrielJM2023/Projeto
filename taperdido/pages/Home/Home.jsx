import React from 'react'
import Button from '../../src/components/Button/Button'
import Header from '../../src/commons/constans/Header'
import Link from 'next/link';

function Tela_Cadastro() {
   return (
      <div className='Tela_Login'>
         <div className='Components'>
            <header className='Header_Tela_Login'>
               <Header></Header>
            </header>
            <main className='Main_Tela_Login'>
               <div className='Entrar_Sem_Acesso'>
                  <Link href='../Login/Cadastro'>Voltar</Link>
               </div>
            </main>
         </div>
      </div >
   )
}

export default Tela_Cadastro
