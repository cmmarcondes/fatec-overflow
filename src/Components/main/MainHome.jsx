import React from 'react';
import Nav from '../contents/nav/Nav';
import HomePage from '../pages/HomePage';
import { Container } from '../../Styles/styles';
import SaveBtn from '../contents/buttons/AddButton';

const Main = () => {
  return (
      <>
    <Nav titulo={'página inicial'} />
    <Container>
    <HomePage />
    </Container>
    <SaveBtn />
    </>
  );
}

export default Main;