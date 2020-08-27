import React from 'react';
import './App.css';
import SaveBtn from './Components/SaveBtn/SaveBtn';
import Menu from './Components/Content/Menu';
const App = () => {
  return (
    <div className="App">
      <Menu />
      <SaveBtn />
    </div>
  );
}
export default App;
