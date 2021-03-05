import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const navbarInfo = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Mapa',
        path: '/map',
        icon: <FaIcons.FaMapMarkedAlt />,        
        cName: 'nav-text'
    },
    {
        title: 'Iniciar viaje',
        path: '/viaje',
        icon: <FaIcons.FaBicycle />,        
        cName: 'nav-text'
    },
    {
        title: 'Perfil',
        path: '/perfil',
        icon: <FaIcons.FaAddressCard />,                        
        cName: 'nav-text'
    },    
    {
        title: 'Pagos',
        path: '/pagos',
        icon: <FaIcons.FaCommentDollar />,         
        //<i class="fas fa-comment-dollar"></i>
        cName: 'nav-text'
    },    
    {
        title: 'Ayuda',
        path: '/ayuda',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]