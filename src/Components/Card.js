import React from 'react';
import Input from './Input';
class Card extends React.Component{
    render(){
        return(
<div className="card-solde" >
  <div class="card-header">
    Mon solde est à : 
  </div>
  <ul className="list-group list-group-flush">
      <Input/>
    
  </ul>
</div>
        )
    }
}
export default Card ;