import React from 'react';
import Nav from '../nav/Nav';
import Card from '../card/Card';
import { Container } from '../../../Styles/styles';

const Main = () => {
  return (
      <>
    <Nav />
    <Container>
    <Card />
    </Container>
    </>
  );
}

export default Main;