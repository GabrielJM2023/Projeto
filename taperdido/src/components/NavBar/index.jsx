"use cliente"

import { useState } from "react";
import "./estilo.css";
import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxFileText } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';

const SizeIcon = [40]
const ColorIcon = ["Black"]

const Home = async () => {
    window.location.href = '/home';
}

const Search = async () => {
    window.location.href = '/home/Search';
}

const Form = async () => {
    window.location.href = '/home/Form';
}

const Perfil = async () => {
    window.location.href = '/home/Perfil';
}

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar-inner">
                <header className="sidebar-header">
                    <button
                        type="button"
                        className="sidebar-burger"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="MainIcon">
                            {isOpen ? <img src="/icons/icon-72x72.png"></img> : <img src="/icons/icon-72x72.png"></img>}
                        </span>
                    </button>
                    <p>Ta Perdido</p>
                </header>
                <nav className="sidebar-menu">
                    <button onClick={Home} type="button" className="sidebar-button">
                        <span className="material-symbols-outlined">
                            <BiHomeAlt2 className='Icone' size={SizeIcon} color={ColorIcon} /></span>
                        <p>Página Inicial</p>
                    </button>

                    <button onClick={Search} type="button" className="sidebar-button">
                        <span className="material-symbols-outlined">
                            <AiOutlineSearch className='Icone' size={SizeIcon} color={ColorIcon} /></span>
                        <p>Buscar Eventos</p>
                    </button>

                    <button onClick={Form} type="button" className="sidebar-button">
                        <span className="material-symbols-outlined">
                            <RxFileText className='Icone' size={SizeIcon} color={ColorIcon} /></span>
                        <p>Cadastro Eventos</p>
                    </button>

                    <button onClick={Perfil} type="button" className="sidebar-button">
                        <span className="material-symbols-outlined">
                            <CgProfile className='Icone' size={SizeIcon} color={ColorIcon} /></span>
                        <p>Acesso ao Perfil</p>
                    </button>
                </nav>
            </div>
        </nav>
    );
};

