import React from 'react';
import logo from '../Assets/logo.png'
import Input from './Input';
import Text from './Text'

class ProfileCard extends React.Component{


  render(){
    

    
    return(
      <div className="profile">
        <div className="col">
          <div className="row">
            <div className="profpic">
              <img src={logo}></img>
            </div>
            <div className="fields row">
              <div className="field col">
                <Text cntnt="text" />
                <Text cntnt="text" />
              </div> 
              <div className="field col">
                <Text cntnt="text" />
                <Text cntnt="text" />
              </div>
            </div>   
          </div>
          <div className="row">
            <div className="fields row">
              <div className="field col solde">
                <Text cntnt="text" />
              </div> 
            </div>   
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileCard;