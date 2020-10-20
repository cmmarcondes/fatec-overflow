import React from 'react';
import Nav from '../nav/Nav';
import CardDetails from '../card/CardDetails';
import { Container } from '../../../Styles/styles';

const Main = () => {
  return (
      <>
    <Nav />
    <Container>
    <CardDetails />
    </Container>
    </>
  );
}

export default Main;