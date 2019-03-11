import React, { Component } from 'react';
// import logo from './logo.svg';

class About extends Component {
  render() {
    return(<p>cur about</p>);
  }
};
class Inbox extends Component {
  render() {
    return(<p>cur inbox</p>);
  }
};
class Home extends Component {
  render() {
    return(<p>cur home</p>);
  }
};

class App extends Component {
  componentWillMount() {
    this.setState({
      route: window.location.hash.substr(1)
    })
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }
  render() {
    let Child
    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/inbox': Child = Inbox; break;
      default:      Child = Home;
    }
    return(
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/inbox">Inbox</a></li>
        </ul>
        <Child/>
      </div>
    );
  }
};

export default App;
