import React from 'react';
import Nav from '../contents/nav/Nav';
import { Container } from '../../Styles/styles';
import SaveBtn from '../contents/buttons/AddButton';
import AnswersPage from '../pages/AnswersPage';

const Answer = () => {
  return (
      <>
    <Nav titulo={'minhas respostas'} />
    <Container>
    <AnswersPage />
    </Container>
    <SaveBtn />
    </>
  );
}

export default Answer;