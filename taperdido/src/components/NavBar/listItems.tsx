import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxFileText } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';

const SizeIcon = [25]
const ColorIcon = ["Black"]

const Home = async () => {
    window.location.href = '/home';
}

const Search = async () => {
    window.location.href = '/home';
}

const Form = async () => {
    window.location.href = '/home';
}

const Perfil = async () => {
    window.location.href = '/home';
}

export const mainListItems = (
    <React.Fragment>
        <ListItemButton onClick={Home}>
            <ListItemIcon>
                <BiHomeAlt2 className='Icone' size={SizeIcon} color={ColorIcon} />
            </ListItemIcon>
            <ListItemText primary="Página Inicial" />
        </ListItemButton>
        <ListItemButton onClick={Search}>
            <ListItemIcon>
                <AiOutlineSearch className='Icone' size={SizeIcon} color={ColorIcon} />
            </ListItemIcon>
            <ListItemText primary="Pesquisa" />
        </ListItemButton>
        <ListItemButton onClick={Form}>
            <ListItemIcon>
                <RxFileText className='Icone' size={SizeIcon} color={ColorIcon} />
            </ListItemIcon>
            <ListItemText primary="Formulario" />
        </ListItemButton>
        <ListItemButton onClick={Perfil}>
            <ListItemIcon>
                <CgProfile className='Icone' size={SizeIcon} color={ColorIcon} />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
        </ListItemButton>
    </React.Fragment >
);