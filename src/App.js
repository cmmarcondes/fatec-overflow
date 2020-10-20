import React from 'react';
import './App.css';
import SaveBtn from './Components/buttons/SaveBtn';
import Main from './Components/conteudos/main/Main';
const App = () => {
  return (
    <div className="App">
      <Main />
      <SaveBtn />
    </div>
  );
}
export default App;
