import React from 'react';
import {  MenuText, MiddleSection } from "../../../Styles/styles";

const MenuMiddleItens = () => {
    return(
        <>
        <MiddleSection>
          <MenuText  to={{pathname: `/`}} middle='true'>
            Início
          </MenuText>
          <MenuText  to={{pathname: '/posts'}} middle='true'>
            Posts
          </MenuText>
          <MenuText  to={{pathname: `/perguntas`}}middle='true'>
            Minhas perguntas
          </MenuText>
          <MenuText  to={{pathname: `/respostas`}} middle='true'>
            Minhas respostas
          </MenuText>
          <MenuText  to={{pathname: `/perfil`}} middle='true'>
            Meu perfil
          </MenuText>
        </MiddleSection>
        </>
    );
}
export default MenuMiddleItens;