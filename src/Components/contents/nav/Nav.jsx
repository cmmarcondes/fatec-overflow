import React from 'react';
import { Header, HeaderText } from '../../../Styles/styles';
import Menu from '../../../Images/menu.png';
import SideMenu from '../menu/SideMenu';

export default function Nav({titulo}) {
  return (
    <>
    <SideMenu />
    <Header>
      <img src={Menu} alt="menu" />
    <HeaderText>{titulo}</HeaderText>
    </Header>
    </>
  );
}