"use client"

import React from 'React';
import './estilo.css';
import { RiEdit2Fill } from "react-icons/ri";

export default function Perfil() {
    return (
        <>
            <main className='Principal'>
                <h1>Conta</h1>
                <div>
                    <label>Nome</label>
                    <input></input>
                    <label>E-mail</label>
                    <input></input>
                    <label>Senha</label>
                </div>
                <div>
                    <label>Categorias Favoritas</label>
                    <RiEdit2Fill />
                </div>
            </main>
        </>
    );
}