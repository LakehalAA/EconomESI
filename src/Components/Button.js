import React from 'react'

class Button extends React.Component {
  
  render(){
    
    return(
    <button className="Button" style={{marginTop: "20px"}}> {this.props.text} </button>
    )

  }
}

export default Button;