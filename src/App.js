import React from 'react';
import './App.css';

import LogIn from './Auth/LogIn';
import SignUp from './Auth/SignUp';
import TopBar from './TopBar';
import TopBarLoggedIn from './TopBarLoggedIn'
import DashboardContainer from './Dashboard/DashboardContainer'

export default class App extends React.Component {

  state = {
    page: null
  }

  changePage = str => {
    this.setState({page: str})
  }

  renderPage = () => {
    if (this.state.page === "login") {
      return ( <LogIn /> )
    } else if (this.state.page === "signup") {
      return ( <SignUp /> )
    } else {
      return( <DashboardContainer /> )
    }
  }

  renderTopBar = () => {
    if (this.state.page === "login" || this.state.page === "signup") {
      return (<TopBar changePage={this.changePage}/>)
    } else {
      return (<TopBarLoggedIn />)
    }
  }

  render(){
    return (
      <div className="App">
        {this.renderTopBar()}
        <div className="App-body">
          {this.renderPage()}
        </div>
      </div>
    );
  }
}
