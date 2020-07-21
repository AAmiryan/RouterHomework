import React from 'react';

const Input = (props) =>{
    
        return(  
        <input
          name = {props.name || ''}
          type = {props.type || 'text'}
          value = {props.value}
          onChange = {(e) => {
          props.onInputChange(e.target)
          }}
          />
        )
}
export default Input;