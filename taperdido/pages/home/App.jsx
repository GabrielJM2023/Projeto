import React from 'react'
import Button from '../../src/components/Button/Button'

function Tela_Login() {
   return (
      <div className='Tela_Login'>
         <div className='Components'>
            <header className='Header_Tela_Login'>
               <div className='Image'>
                  <img src='/icons/icon-192x192.png' alt='Teste' ></img>
               </div>
               <label>Ta Perdido</label>
            </header >
            <main className='Main_Tela_Login'>
               <input type={'text'} placeholder='Email'></input>
               <input type={'password'} placeholder='Senha'></input>
               <Button className={'Button_Login'} label={'Entrar'}></Button>
               <Button className={'Button_Login'} label={'Cadastrar-se'}></Button>
               <a href='#'>Entrar sem fazer login</a>
            </main>
         </div>
      </div >
   )
}

export default Tela_Login
