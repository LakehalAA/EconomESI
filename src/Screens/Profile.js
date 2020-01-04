import React, { Fragment } from "react";
import logo from "../Assets/logo.png";
import Sidebar from "../Components/Sidebar";
import ProfileCard from "../Components/ProfileCard";

class Profile extends React.Component {
  componentDidMount() {
    var t = localStorage.getItem("userid");
    console.log(t);
    if (t!=="undefined") {
      console.log("eee")

      this.setState({ id: t });
    } else {
      console.log("eee")
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="grid-container">
        <Sidebar />
        <ProfileCard />
      </div>
    );
  }
}

export default Profile;
