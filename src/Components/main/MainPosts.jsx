import React from 'react';
import { Container } from '../../Styles/styles';
import SaveBtn from '../contents/buttons/AddButton';
import PostsPage from '../pages/PostsPage';

const Home = () => {
  return (
      <>
    <Container>
    <PostsPage />
    </Container>
{/*     <SaveBtn /> */}
    </>
  );
}

export default Home;