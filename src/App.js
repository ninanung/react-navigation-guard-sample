import React, { Component } from 'react';
import NavigationGuard from 'react-navigation-guard';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class Home extends Component {
  render() {
    alert('Home component');
    return (
      <h2>HOME</h2>
    )
  }
}

class Test extends Component {
  render() {
    alert('Test component');
    return (
      <h2>TEST</h2>
    )
  }
}

class Uncheck extends Component {
  render() {
    alert('Uncheck component');
    return (
      <h2>UNCHECK</h2>
    )
  }
}

class Routes extends Component {
  returnBool = (url, params) => {
    console.log(url);
    console.log(params);
    if(params.test === 'test') {
      return true;
    } else {
      return false;
    }
  }

  ifTrue = (url, params, blockRender) => {
    blockRender() // block rendering component
    console.log('true');
  }

  ifFalse = (url, params, blockRender) => {
    console.log('false');
  }

  render() {
    return (
      <Switch>
        <NavigationGuard exact={true} component={Home} path="/" returnBool={this.returnBool} ifTrue={this.ifTrue} ifFalse={this.ifFalse} />
        <NavigationGuard exact={true} component={Test} path="/test/:test" returnBool={this.returnBool} ifTrue={this.ifTrue} ifFalse={this.ifFalse} />
        <Route exact component={Uncheck} path='/uncheck'/>
      </Switch>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
