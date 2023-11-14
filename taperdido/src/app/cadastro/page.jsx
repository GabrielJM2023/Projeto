"use client"

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Header from '../../components/Header'
import SemAcesso from '../../components/SemAcesso'

import Link from 'next/link';
import { estilo } from './estilo.css';

const supabase = createClient('https://izuwtwjojmuvomlduwsi.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dXd0d2pvam11dm9tbGR1d3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4OTI1NTEsImV4cCI6MjAxNDQ2ODU1MX0.HJSrxTZLKvBsgxxVTK2vDdEKdOw3_PNp61f9xI_-7pE');

export default function InsertPage() {
    const [nome_completo, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const RegisterUser = async () => {
        try {
            const { user } = await supabase.auth.signUp({
                email: email,
                password: senha,
            });

            const { error } = await supabase.from('USUARIO').insert([{
                NOME: nome_completo,
                EMAIL: email,
                SENHA: senha,
                ID_USUARIO: user?.id,
            }]).select()

            if (error) throw error
            alert('Registro Cadastrado')

            const Register = async () => {
                window.location.href = '/login';
            }

        } catch (error) {
            alert('Erro ao inserir o usuário')
        } finally {
        }
    }

    return (
        <div className='Tela_Cadastro'>
            <div className='Components'>
                <header className='Header_Telas_Cadastro'>
                    <Header></Header>
                </header>
                <main className='Main_Tela_Cadastro'>
                    <input
                        type="text"
                        value={nome_completo}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder='Nome Completo'
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='E-mail'
                        required
                    />
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className='Senha'
                        placeholder='Senha'
                    />

                    <button onClick={RegisterUser} className='Button_Cadastro'>Crie sua Conta</button>
                    <div className='Entrar_Sem_Acesso'>
                        <SemAcesso></SemAcesso>
                    </div>

                </main>
            </div>
        </div >
    );
}
