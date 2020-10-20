import React from "react";
import { StyledMenu } from "../../../Styles/styles";
import MenuMiddleItens from './MenuMiddleItens';
import MenuTopItem from './MenuTopItem';

const SideMenu = () => {
  return (
    <>
      <StyledMenu>
        <MenuTopItem />
        <MenuMiddleItens  />
      </StyledMenu>
    </>
  )
};

export default SideMenu;
