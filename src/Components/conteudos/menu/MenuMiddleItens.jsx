import React from 'react';
import {  MenuText, MiddleSection } from "../../../Styles/styles";

const MenuMiddleItens = () => {
    return(
        <>
        <MiddleSection>
          <MenuText MiddleSection to={{pathname: `/`}}>
            Início
          </MenuText>
          <MenuText MiddleSection to={{pathname: `/perfil/perguntas`}}>
            Minhas perguntas
          </MenuText>
          <MenuText MiddleSection to={{pathname: `/perfil/respostas`}}>
            Minhas respostas
          </MenuText>
          <MenuText MiddleSection to={{pathname: `/perfil`}}>
            Meu perfil
          </MenuText>
        </MiddleSection>
        </>
    );
}
export default MenuMiddleItens;