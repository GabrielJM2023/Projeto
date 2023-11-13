"use client"

import './estilo.css';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Header from '../../components/Header';
import SemAcesso from '../../components/SemAcesso';


const supabase = createClient('https://izuwtwjojmuvomlduwsi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dXd0d2pvam11dm9tbGR1d3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4OTI1NTEsImV4cCI6MjAxNDQ2ODU1MX0.HJSrxTZLKvBsgxxVTK2vDdEKdOw3_PNp61f9xI_-7pE');

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const Register = async () => {
    window.location.href = '/cadastro';
  }

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: senha,
      });

      if (error) {
        setError(error.message);
      } else {
        // Redirecione o usuário para a página após o login bem-sucedido
        window.location.href = '/home';
      }

    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (

    <div className='Tela_Login'>
      <div className='Components'>
        <header className='Header_Telas_Login'>
          <Header></Header>
        </header>
        <main className='Main_Tela_Login'>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Digite seu email'
            required
          />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className='Senha'
            placeholder='Digite sua senha'
          />

          {error && <p className='Error'>{error}</p>}
          <button onClick={handleLogin} className='Button_Login'>Login</button>
          <button onClick={Register} className='Button_Login'>Cadastre-se</button>
          <div className='Entrar_Sem_Acesso'>
            <SemAcesso></SemAcesso>
          </div>

        </main>
      </div>
    </div >
  );
}
