import React from 'react'

function Tela_Login() {
   return (
      <>
         <div className='Login'>
            <label>Nome:</label>
            <input type={'text'}></input>
            <label>Senha:</label>
            <input type={'password'}></input>
            <button>Entrar</button>
            <a href='#'>Entrar sem fazer login</a>
         </div>
      </>
   )
}

export default Tela_Login
