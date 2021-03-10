import React, { ReactElement } from 'react';
import { Home as HomeIcon, Info as AboutIcon, ListAlt as ListAltIcon } from '@material-ui/icons';

type Page = {
  id: string;
  name: string;
  href: string;
  icon: ReactElement;
};

const pages: Page[] = [
  {
    id: '_HOME_',
    name: 'Home',
    href: '/',
    icon: <HomeIcon />
  },
  {
    id: '_TODO_LIST_',
    name: 'Todo list',
    href: '/todolist',
    icon: <ListAltIcon />
  },
  {
    id: '_ABOUT_',
    name: 'About',
    href: '/about',
    icon: <AboutIcon />
  }
];

export default pages;
