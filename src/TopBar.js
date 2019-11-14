import React from 'react';
import './App.css';


export default class TopBar extends React.Component {

  render(){
    return (
      <div className="TopBar">
        <div className="logo">
          <a href="http://retrievr-api-v2.herokuapp.com/home" style={{textDecoration: 'none'}}><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/b0/7d/87/b07d8707-36c8-021d-c40f-e8eebccaa811/Icon-83.5@2x.png.png/75x9999bb.png" style={{height: 35, width: 35, borderRadius: 5}} alt="icon"/></a>
          <a href="http://retrievr-api-v2.herokuapp.com/home" style={{textDecoration: 'none'}}><h2 className="nav-h2">Retrievr</h2></a>
        </div>
        <div className="nav-actions">
          <div style={{marginRight: 20}}>
            <a href="http://retrievr-api-v2.herokuapp.com/home" style={{textDecoration: 'none'}}><h3 className="nav-h2">Missing Posters</h3></a>
          </div>
          <div style={{marginRight: 20}} onClick={() =>this.props.changePage("login")}>
            <h3 className="nav-h2">Log In</h3>
          </div>
          <div style={{marginRight: 10}} onClick={() => this.props.changePage("signup")}>
            <h3 className="nav-h2">Sign Up</h3>
          </div>
        </div>
      </div>
    )
  }
}
