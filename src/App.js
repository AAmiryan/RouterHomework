import React from 'react';
import Input from './input';
import LoginButton from './button';
// import alertInput from './alertInput';
import Home from './Home';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {

  // onInputChange = (element) => {
  //   this.setState({
  //     [element.name]: element.value
  //   })

  // }

  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
