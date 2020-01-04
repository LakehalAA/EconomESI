import React, { Fragment } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import logo from "../Assets/logo.png";
import Axios from "axios";

class OnBoarding extends React.Component {
  state = {
    id:"",
    new: false,
    username: "frog",
    passw: "frgfrgfrg",
  };

  handleNameChange = (event) => {    
    console.log(event.target.value);    
    this.setState({
        username: event.target.value,
    });
  }

  handlePassChange = (event2) => {
    this.setState({
        passw: event2.target.value,
    });
  }

  afterSubmission = (event3) => {
    event3.preventDefault();
    const user = {
      username:this.state.username,
      password:this.state.passw,
    }

    Axios.post('http://192.168.43.106:3000/login', {...user}).then(res =>{
      localStorage.setItem("userid", res.data._id);
      this.props.history.push('/profile');
    }).catch(e =>{
      console.log(e);
    });
  }

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
          <form onSubmit={this.afterSubmission} action="/login" method="POST">
            <Input ph="Username" type="text" name="username" onChange={this.handleNameChange} />
            <Input ph="Password" type="password" name="password" onChange={this.handlePassChange} />
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

          <form action="192.168.43.106:3000/signup" method="POST">
            <Input ph="Username" type="text" name="username" onChange={(e)=>{console.log(e.target.value)}}/>
            <Input ph="Email" type="text" name="email" />
            <Input ph="Password" type="password" name="password" />
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