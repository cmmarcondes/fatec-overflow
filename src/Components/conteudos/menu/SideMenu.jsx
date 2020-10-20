import React from "react";
import { StyledMenu } from "../../../Styles/styles";
import MenuMiddleItens from './MenuMiddleItens';
import MenuTopItem from './MenuTopItem';

const SideMenu = ({displayMenu, setDisplayMenu}) => {
  return displayMenu ? (
    <>
      <StyledMenu>
        <MenuTopItem setDisplayMenu={setDisplayMenu} />
        <MenuMiddleItens  />
      </StyledMenu>
    </>
  ) : (
    false
  );
};

export default SideMenu;
