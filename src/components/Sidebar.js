import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Donate',
    path: '/form',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Record',
    path: '/transactions',
    icon: <FaIcons.FaMoneyCheckAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Regress',
    path: '/regression',
    icon: <FaIcons.FaChartLine />,
    cName: 'nav-text'
  },
  {
    title: 'Data',
    path: '/data',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'NGOs',
    path: '/all',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <FaIcons.FaRegIdBadge />,
    cName: 'nav-text'
  }
];

