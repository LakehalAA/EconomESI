import React, { Fragment } from "react";
import logo from "../Assets/logo.png";
import Sidebar from "../Components/Sidebar";
import ProfileCard from "../Components/ProfileCard";

class Profile extends React.Component{

  render (){
    
    return(
      <div className="grid-container">
        <Sidebar />
        <ProfileCard />
      </div>
    )
  }
}

export default Profile;

