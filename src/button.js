
import React from 'react';
import alertInput from './alertInput';
// import Button from '@material-ui/core/Button';
const LoginButton = (props) => {

  return (
    <div>
      <button
        disabled={
          props.disabled
        }
        onClick={() => {
          localStorage.setItem("user", JSON.stringify({ login: props.login, password: props.password }))
         setTimeout(()=>{
         props.redirect.push("/")
         },200)
        }}
      >
        submit
    </button>
    </div>
    //   <Button
    //    variant="contained"
    //     color="primary" 
    //     disabled = {
    //       props.disabled
    //     }
    //     onClick={() => {
    //       alertInput(props.login, props.password)
    //     }}
    //   >
    //   Login
    // </Button>
  )
}

export default LoginButton;