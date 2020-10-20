import React from 'react';
import {  MenuText, TopSection } from "../../../Styles/styles";
import Cancel from "../../../Images/cancel.png";

const MenuTopItem = ({setDisplayMenu}) => {
    return (
    <>
    <TopSection>
    <img src={Cancel} alt="Close Menu" width="50px" onClick={() => setDisplayMenu(false)} />
    <MenuText>Fatec overflow</MenuText>
    </TopSection>
    </>
    )
}

export default MenuTopItem;