import React from 'react'
import Button from '../src/components/Button/Button_criar_conta'

class App extends React.Component {
   onClickButton = () => {
      alert('Clicando no botão')
   }
   render() {
      return (
         <>
            <Button onClick={this.onClickButton} />
         </>
      )
   }
}

export default App
