import React, { Component } from 'react';
import NavigationGuard from 'react-navigation-guard';
import { Switch, BrowserRouter } from 'react-router-dom';

import './App.css';

class Home extends Component {
  render() {
    return (
      <h2>HOME</h2>
    )
  }
}

class Test extends Component {
  render() {
    return (
      <h2>TEST</h2>
    )
  }
}

class Route extends Component {
  returnBool = (path, url, params) => {
    console.log(path);
    console.log(url);
    console.log(params);
    if(params.test) {
      return true;
    } else {
      return false;
    }
  }

  ifTrue = (path, url, params) => {
    console.log('true');
  }

  ifFalse = (path, url, params) => {
    console.log('false');
  }

  render() {
    return (
      <Switch>
        <NavigationGuard exact={true} component={Home} path="/" returnBool={this.returnBool} ifTrue={this.ifTrue} ifFalse={this.ifFalse} />
        <NavigationGuard exact={true} component={Test} path="/test/:test" returnBool={this.returnBool} ifTrue={this.ifTrue} ifFalse={this.ifFalse} />
      </Switch>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
