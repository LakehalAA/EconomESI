import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'

class OnBoarding extends React.Component {
  
  render(){
    
    return(
      <div className="dual main">
        <p className="description">
          <span className="title">EconomESI</span>
          <br></br>
          Economize your money, with the least of efforts.
        </p>
        <div className="card">
          <div className="container">
            <Input ph="Username" type="text" />
            <Input ph="Password" type="password" />
            <Button text="Log In" />
          </div>
        </div>
      </div>
    )
  }
}

export default OnBoarding;