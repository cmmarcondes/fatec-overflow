import React from 'react';
import { MenuText, MiddleSection } from "./styles";

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
          <MenuText  to={{pathname: `/perfil/perguntas`}}middle='true'>
            Minhas perguntas
          </MenuText>
          <MenuText  to={{pathname: `/perfil/respostas`}} middle='true'>
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