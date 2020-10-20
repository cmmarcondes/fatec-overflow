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
      <Route path="/posts/:id" component={MainDetails} />
      <Route path="/perfil" component={MainProfiles} />
      <Route path="/perguntas" component={MainQuestions} />
      <Route path="/respostas" component={MainAnswers} />
      <Route path="/posts" component={MainPosts} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
