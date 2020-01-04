import React from 'react'

class Text extends React.Component {
  
  render(){
    
    return(
    <span className="text">{this.props.cntnt}<div className="text-line"></div></span>
    )

  }
}

export default Text;