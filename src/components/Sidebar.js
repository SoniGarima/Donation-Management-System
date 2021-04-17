import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/Donation-Management-System/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Donate',
    path: '/Donation-Management-System/form',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Record',
    path: '/Donation-Management-System/transactions',
    icon: <FaIcons.FaMoneyCheckAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Regress',
    path: '/Donation-Management-System/regression',
    icon: <FaIcons.FaChartLine />,
    cName: 'nav-text'
  },
  {
    title: 'Data',
    path: '/Donation-Management-System/data',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'NGOs',
    path: '/Donation-Management-System/all',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/Donation-Management-System/login',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/Donation-Management-System/register',
    icon: <FaIcons.FaRegIdBadge />,
    cName: 'nav-text'
  }
];

