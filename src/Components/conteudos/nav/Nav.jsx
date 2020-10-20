import React from 'react';
import { Header } from '../../../Styles/styles';
import Menu from '../../../Images/menu.png';
import { useState } from 'react';
import SideMenu from '../menu/SideMenu';
export default function Nav() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
    {displayMenu ? <SideMenu displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} /> : false}
    <Header>
      <img src={Menu} alt="menu" onClick={()=> setDisplayMenu(true)}/>
    </Header>
    </>
  );
}