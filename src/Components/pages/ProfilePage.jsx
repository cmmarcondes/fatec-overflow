import React, { useCallback, useEffect, useState } from "react";
import ProfileService from "../../Services/ProfileServices";
import { StyledContainer, ProfileTextUsername, ProfileTextContent, ProfileText } from "../../Styles/styles";

const ProfilePage = () => {
  const [profile, setProfile] = useState([]);

  const get_profile = useCallback(async () => {
    const profile_data = await ProfileService.getPerfil(null, 1);
    setProfile(profile_data.data);
  }, []);

  useEffect(() => {
    get_profile();
  }, [get_profile]);

  const profile_control = profile.map((el) => {
    return (
      <StyledContainer key={el.id}>
        <ProfileTextUsername>Bem vindo {el.login}</ProfileTextUsername>
        <br />
        <ProfileTextContent>
            <ProfileText>
            Abaixo temos algumas informações sobre seu perfil
            </ProfileText>
           <ProfileText>
           Nome completo: {el.username}
           </ProfileText>
            <ProfileText>
           Email: {el.email}
            </ProfileText>
            <ProfileText>
           Senha: ************** alterar
            </ProfileText>
            <ProfileText>
           Sexo: {el.sex === 1 ? 'Masculino' : 'Feminino'}
            </ProfileText>
            <ProfileText>
            Você tem {el.posts.length} perguntas em aberto
            </ProfileText>
            <ProfileText>
            E {el.answers.length} respostas realizadas.
            </ProfileText>
            
        </ProfileTextContent>
      </StyledContainer>
    );
  });

  return <>{profile_control}</>;
};

export default ProfilePage;
