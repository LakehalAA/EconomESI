import React from 'react';
import Button from '../Components/Button'
import { Fragment } from "react";
import Input from '../Components/Input';
import OnBoarding from './OnBoarding';
import Card from '../Components/Card';
class DepenseRevenu extends React.Component {
    state = {
        new: false
      };
    
      switch = bool => {
        this.setState({ new: bool });
      };
    
      displayMenu = () => {
        if (!this.state.new) {
          return (
            <div className="container">
              <div className="toggles-container">
                <a
                  onClick={() => {
                    this.switch(false);
                  }}
                  className="active toggle"
                >
                  AJOUTER DEPENSE <div className="line"></div>
                </a>
                <a
                  onClick={() => {
                    this.switch(true);
                  }}
                  className="toggle"
                >
                  AJOUTER REVENU <div className="line"></div>
                </a>
              </div>
              
              <form action="/">
                <Input ph="Depense" type="text" />
                <Input ph="Categorie" type="password" />
                <Input ph="Date-Heure" type="password" />
                <Button text="Sauvegarder" />
                <Button text="Modifer Depense" />

              </form>
            </div>
          );
        } else {
          return (
            <div className="container">
              <div className="toggles-container">
                <a
                  onClick={() => {
                    this.switch(false);
                  }}
                  className="toggle"
                >
                  AJOUTER DEPENSE<div className="line"></div>
                </a>
                <a
                  onClick={() => {
                    this.switch(true);
                  }}
                  className="active toggle"
                >
                  AJOUTER REVENU<div className="line"></div>
                </a>
              </div>
    
              <form action="/profile">
                <Input ph="Revenu" type="text" />
                <Input ph="Categorie" type="password" />
                <Input ph="Date-Heure" type="password" />
                <Button text="Sauvegarder" />
                <Button text="Modifer Revenu" />
              </form>
            </div>
          );
        }
      };
    
      render() {
        return (
          <Fragment>
           <div className="dual3">
             
             <div className="card"><h2>Votre solde est à : </h2></div>
             
         
           </div>
            
            <div className="dual2">
             
              <div className="card">{this.displayMenu()}</div>
              
          
            </div>
          </Fragment>
        );
      }
    
}
export default DepenseRevenu ;