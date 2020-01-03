import React from 'react'

class Input extends React.Component {
  
  render(){
    
    return(
        <input className="Input" type={this.props.type} placeholder={this.props.ph}/>
    )

  }
}

export default Input;