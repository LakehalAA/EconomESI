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
  
  localStorage.setItem("userid", undefined);
  return(
      <BrowserRouter>
        <Route exact path="/" component={OnBoarding} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/revdep" component={DepenseRevenu} />
      </BrowserRouter> 
  ) 
  }

export default App;
