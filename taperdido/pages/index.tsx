import React from 'react'
import Button from '../src/components/Button/Button_criar_conta'

function App() {
   const onClickButton = () => {
      console.log('Clicar no botão')
   }

   return (
      <div id='teste'>
         <Button onClick={onClickButton}></Button>
      </div>
   )
}

export default App
