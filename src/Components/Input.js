import React from 'react'

class Input extends React.Component {
  
  render(){
    
    return(
        <input name={this.props.name} className="Input" type={this.props.type} placeholder={this.props.ph} onChange={this.props.onChange}/>
    )

  }
}

export default Input;