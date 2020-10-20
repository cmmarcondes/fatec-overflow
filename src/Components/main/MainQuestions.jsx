import React from 'react';
import Nav from '../contents/nav/Nav';
import { Container } from '../../Styles/styles';
import SaveBtn from '../contents/buttons/AddButton';
import QuestionsPage from '../pages/QuestionsPage';

const Questions = () => {
  return (
      <>
    <Nav titulo={'minhas perguntas'} />
    <Container>
    <QuestionsPage />
    </Container>
    <SaveBtn />
    </>
  );
}

export default Questions;