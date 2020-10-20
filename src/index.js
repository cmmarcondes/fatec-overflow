import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PostPage from './Components/conteudos/main/PostPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./Components/conteudos/main/Profile";
import QuestionsPage from "./Components/conteudos/main/QuestionsPage";
import AnswersPage from "./Components/conteudos/main/AnswersPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/posts/:id" component={PostPage} />
      <Route path="/perfil" component={Profile} />
      <Route path="/perfil/respostas" component={QuestionsPage} />
      <Route path="/perfil/perguntas" component={AnswersPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
