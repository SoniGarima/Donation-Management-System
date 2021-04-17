import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/DMS/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Donate',
    path: '/DMS/form',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Record',
    path: '/DMS/transactions',
    icon: <FaIcons.FaMoneyCheckAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Regress',
    path: '/DMS/regression',
    icon: <FaIcons.FaChartLine />,
    cName: 'nav-text'
  },
  {
    title: 'Data',
    path: '/DMS/data',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'NGOs',
    path: '/DMS/all',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/DMS/login',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/DMS/register',
    icon: <FaIcons.FaRegIdBadge />,
    cName: 'nav-text'
  }
];

