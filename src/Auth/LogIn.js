import React from 'react';
import '../App.css';

export default class LogIn extends React.Component {
  render() {
    return (
      <div className="LogIn">
        <h1 style={{color: '#00b894'}}>Log In</h1>
        <div className="login-form">
          <form>
            <input placeholder="Email" type="text" name="email" style={{height: 30, width: 300, borderRadius: 5}}/><br />
            <input placeholder="Password" type="password" name="password" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}}/><br />
            <input type="submit" value="Submit" style={{fontSize: 20, marginTop: 20, height: 50, width: 80, borderRadius: 5, color: '#00b894', backgroundColor: '#b2bec3'}}/>
          </form>
        </div>
      </div>
    );
  }
}
