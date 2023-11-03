import React from 'react';
import BemVindo from './pages/BemVindo';
import TelaInicial from './pages/TelaInicial';
import Login from './pages/Login';

import './styles/css/App.css';

function App() {
  return (
    <>
      <BemVindo/>
      <TelaInicial/>
      <Login/>
    </>
  );
}

export default App;
