import React from 'react'
import Button from '../../src/components/Button/Button'
import Header from '../../src/commons/constans/Header'

function Tela_Login() {
   return (
      <div className='Tela_Login'>
         <div className='Components'>
            <header className='Header_Tela_Login'>
               <Header></Header>
            </header>
            <main className='Main_Tela_Login'>
               <input placeholder='Email' type="text" id="email" className='Teste2' required></input>
               <input className='Senha' type={'password'} placeholder='Senha'></input>
               <Button className={'Button_Login'} label={'Entrar'}></Button>
               <Button className={'Button_Login'} label={'Cadastrar-se'}></Button>
               <div className='Entrar_Sem_Acesso'>
                  <a href='#'>Entrar sem fazer login</a>
               </div>
            </main>
         </div>
      </div >
   )
}

export default Tela_Login
