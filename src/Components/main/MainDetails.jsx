import React from 'react';
import Nav from '../contents/nav/Nav';
import DetailsPage from '../pages/DetailsPage';
import { Container } from '../../Styles/styles';
import SaveBtn from '../contents/buttons/AddButton';

const Main = () => {
  return (
      <>
    <Nav titulo={'detalhes'} />
    <Container>
    <DetailsPage />
    </Container>
    <SaveBtn />
    </>
  );
}

export default Main;