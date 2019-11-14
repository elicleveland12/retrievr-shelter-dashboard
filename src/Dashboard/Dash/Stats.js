import React from 'react';
import '../../App.css';

import Graphs from './Graphs';

export default class Stats extends React.Component {

  state = {
    graph: "adoptions"
  }

  render() {
    return (
      <div className="stats-container">
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#00b894', height: 40}}>
          <div style={{width: '33%', backgroundColor: this.state.graph === "adoptions" ? "#55efc4" : null, borderTopLeftRadius: 5 }} onClick={() => this.setState({graph: "adoptions"})}><p style={{color: this.state.graph === "adoptions" ? 'black' : 'white', fontSize: 18}}>Adoptions</p></div>
          <div style={{width: '33%', backgroundColor: this.state.graph === "incomingAnimals" ? "#55efc4" : null }} onClick={() => this.setState({graph: "incomingAnimals"})}><p style={{color: this.state.graph === "incomingAnimals" ? 'black' : 'white', fontSize: 18}}>Incoming Animals</p></div>
          <div style={{width: '33%', backgroundColor: this.state.graph === "donations" ? "#55efc4" : null, borderTopRightRadius: 5 }} onClick={() => this.setState({graph: "donations"})}><p style={{color: this.state.graph === "donations" ? 'black' : 'white', fontSize: 18}}>Donations</p></div>
        </div>
        <Graphs graph={this.state.graph}/>
      </div>
    );
  }
}
