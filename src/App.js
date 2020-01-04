import React from 'react';
import logo from './logo.svg';
import './App.css';
import OnBoarding from './Screens/OnBoarding'
import Profile from './Screens/Profile'
import {Route, Router} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import DepenseRevenu from './Screens/DepenseRevenu'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={OnBoarding} />
      <Sidebar/>
      <Route exact path="/profile" component={Sidebar} />
    <Route exact path="/depense" component={DepenseRevenu} />
    </BrowserRouter>  
  );
}

export default App;
