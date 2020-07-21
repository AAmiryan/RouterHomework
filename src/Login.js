
import React, { useState, useEffect } from 'react';
import Input from './input'
import LoginButton from './button';

function Login(props) {

  const [user, setUser] = useState({
    password: "",
    login: ""
  })

  useEffect(() => {
    let user= JSON.parse(localStorage.getItem("user"));
    if (user&&user.login && user.password) {
      props.history.push("/")
    }
  }, []);


  const handleChange = (item) => {
    console.log(item,'esi item');
    console.log(user, 'esi userna');
    setUser({ ...user, [item.name]: item.value })
    
  }

  return (
    <div>
      <Input
        name={'login'}
        type={'text'}
        value={user.login}
        onInputChange={handleChange} />
      <Input name={'password'}
        type={'password'}
        value={user.password}
        onInputChange={handleChange}
      />
      <LoginButton
        disabled={!(user.login.length > 1 && user.password.length > 1)}
        login={user.login}
        password={user.password}
        redirect={props.history}
      />
    </div>
  );
}


export default Login;