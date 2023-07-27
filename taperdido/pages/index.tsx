import styles from '../styles/Home.module.css'
import Button from '../src/components/Button/Button_criar_conta'
import Input_Nome from '../src/components/Input/Input_Nome'
import Input_Senha from '../src/components/Input/Input_Senha'

export default function Home() {
  return (
    <main className={styles.main}>
      <Input_Nome></Input_Nome>
      <Input_Nome></Input_Nome>
      <Input_Senha></Input_Senha>
      <Button></Button>
      <label>Já tenho uma conta?<a href='#'>Login</a></label>
    </main>
  )
}
