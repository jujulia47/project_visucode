import React, { useContext } from 'react';
import { AppContext } from './context';

import BemVindo from './pages/BemVindo';
import TelaInicial from './pages/TelaInicial';
import MenuLogin from './pages/MenuLogin';
import Login from './pages/Login';
import LoginCreate from './pages/LoginCreate';
import VisuRead from './pages/VisuRead'
import ProductCreate from './pages/ProductCreate'
import ProductUpdate from './pages/ProdutcUpdate'
import UserCreate from './pages/UserCreate'
import UserUpdate from './pages/UserUpdate'



import './styles/css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  const {page}  = useContext(AppContext)

  return (
    <>
        {page === "bemVindo" && <BemVindo />}
        {page === "telaInicial" && <TelaInicial />}
        {page === "menuLogin" && <MenuLogin />}
        {page === "login" && <Login />}
        {page === "loginCreate" && <LoginCreate/>}
      <div>
        {
          page !== "bemVindo" &&
          page !== "telaInicial" &&
          page !== "menuLogin" &&
          page !== "login" &&
          page !== "loginCreate" && <Header/>
        }
        
          {page === "visuRead" && <VisuRead/>}
          {page === "productCreate" && <ProductCreate/>}
          {page === "productUpdate" && <ProductUpdate/>}
          {page === "userCreate" && <UserCreate/>}
          {page === "userUpdate" && <UserUpdate/>}

        {
          page !== "bemVindo" &&
          page !== "telaInicial" &&
          page !== "menuLogin" &&
          page !== "login" &&
          page !== "loginCreate" && <Footer/>
        }
        
      </div>
    </>
  );
}

export default App;
