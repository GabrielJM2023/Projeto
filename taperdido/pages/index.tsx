import styles from '../styles/Home.module.css'
import Button from '../src/components/Button/Button_criar_conta'
import Input_Nome from '../src/components/Input/Input_Nome'

export default function Home() {
  return (
    <main className={styles.main}>
      <Input_Nome></Input_Nome>
      <Button></Button>
    </main>
  )
}
