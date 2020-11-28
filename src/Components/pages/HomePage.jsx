import React from "react";
import { Container } from "./styles";
import GirlHoldingBook from '../../Images/menina-segurando-livro.png'

const HomePage = () => {

  return (
    <Container>
    <div className="home-section">
      <div className="home-section__menu">
        <div className="links">
          início
        </div>

        <div className="links">
          posts
        </div>

        <div className="links">
          sobre nós
        </div>

        <div className="links">
          contato
        </div>

        <div className="links">
          logar
        </div>
      </div>

      <h1 className="home-section__logo">
        #OVERFLOW
      </h1>

      <div className="home-section__welcome">
        <h5>
        Tire suas dúvidas
        </h5>
        <h4>
        Ajude o novo ecossistema da FATEC
        </h4>
      </div>

      <div className="home-section__image">
        <img src={GirlHoldingBook} alt="overflow" />
      </div>

      <div className="home-section__wrap">

        <div className="links">
          minhas perguntas
        </div>

        <div className="links">
          minhas respostas
        </div>

        <div className="links">
          novo post
        </div>

      </div>
    </div>
  </Container>
  );
};

export default HomePage;
