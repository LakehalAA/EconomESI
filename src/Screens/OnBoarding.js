import React, { Fragment } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import logo from "../Assets/logo.png";

class OnBoarding extends React.Component {
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
              LOG IN<div className="line"></div>
            </a>
            <a
              onClick={() => {
                this.switch(true);
              }}
              className="toggle"
            >
              SIGN UP<div className="line"></div>
            </a>
          </div>
          <img src={logo} height="200px" style={{ margin: "30px" }}></img>
          <form action="/profile">
            <Input ph="Username" type="text" />
            <Input ph="Password" type="password" />
            <Button text="Log In" />
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
              LOG IN<div className="line"></div>
            </a>
            <a
              onClick={() => {
                this.switch(true);
              }}
              className="active toggle"
            >
              SIGN UP<div className="line"></div>
            </a>
          </div>

          <img src={logo} height="200px" style={{ margin: "30px" }}></img>

          <form action="/profile">
            <Input ph="Username" type="text" />
            <Input ph="Email" type="password" />
            <Input ph="Password" type="password" />
            <Button href="/profile" text="SIGN UP" />
          </form>
        </div>
      );
    }
  };

  render() {
    return (
      <Fragment>
        <div className="filter"></div>
        <div className="dual main">
          <p className="description">
            <span className="title">EconomESI</span>
            <br></br>
            Economize your money, with the least of efforts.
          </p>
          <div className="card">{this.displayMenu()}</div>
        </div>
      </Fragment>
    );
  }
}

export default OnBoarding;