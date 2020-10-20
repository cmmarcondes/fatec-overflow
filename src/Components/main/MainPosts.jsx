import React from 'react';
import Nav from '../contents/nav/Nav';
import { Container } from '../../Styles/styles';
import SaveBtn from '../contents/buttons/AddButton';
import PostsPage from '../pages/PostsPage';

const Home = () => {
  return (
      <>
    <Nav titulo={'posts'} />
    <Container>
    <PostsPage />
    </Container>
    <SaveBtn />
    </>
  );
}

export default Home;