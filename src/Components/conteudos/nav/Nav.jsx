import React from 'react';
import { Header } from '../../../Styles/styles';
import Menu from '../../../Images/menu.png';
import SideMenu from '../menu/SideMenu';
export default function Nav() {

  return (
    <>
    <SideMenu />
    <Header>
      <img src={Menu} alt="menu" />
    </Header>
    </>
  );
}