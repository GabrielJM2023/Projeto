"use client"

import React from 'React';
import './estilo.css';
import { RiEdit2Fill } from "react-icons/ri";

export default function Perfil() {
    return (
        <>
            <main className='Principal'>
                <h1>Conta</h1>
                <div className='Cadastro'>
                    <div className='Nome'>
                        <label>Nome</label>
                        <input></input>
                    </div>
                    <div className='Email'>
                        <label>E-mail</label>
                        <input></input>
                    </div>
                    <div className='Senha'>
                        <label>Senha</label>
                        <input></input>
                    </div>
                </div>
                <div>
                    <label>Categorias Favoritas</label>
                    <RiEdit2Fill />
                </div>
            </main>
        </>
    );
}