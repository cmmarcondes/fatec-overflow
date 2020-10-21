import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MainPosts from './Components/main/MainPosts';
import MainDetails from './Components/main/MainDetails';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainProfiles from "./Components/main/MainProfile";
import MainQuestions from "./Components/main/MainQuestions";
import MainAnswers from "./Components/main/MainAnswers";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/posts/:id" exact component={MainDetails} />
      <Route path="/perfil" exact component={MainProfiles} />
      <Route path="/perfil/perguntas" exact component={MainQuestions} />
      <Route path="/perfil/respostas" exact component={MainAnswers} />
      <Route path="/posts" exact component={MainPosts} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
