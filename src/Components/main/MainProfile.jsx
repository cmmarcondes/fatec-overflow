import React from 'react';
import Nav from '../contents/nav/Nav';
import { Container } from '../../Styles/styles';
import SaveBtn from '../contents/buttons/AddButton';
import ProfilePage from '../pages/ProfilePage';

const Profile = () => {
  return (
      <>
    <Nav titulo={'meu perfil'} />
    <Container>
    <ProfilePage />
    </Container>
    <SaveBtn />
    </>
  );
}

export default Profile;