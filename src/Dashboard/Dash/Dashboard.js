import React from 'react';
import '../../App.css';

import AdoptableContainer from './AdoptableContainer';
import Stats from './Stats'

export default class Dashboard extends React.Component {



  render() {
    return (
      <div className="dashboard-component">
        <div style={{display: 'flex', flexDirection: 'row', width: '50%', justifyContent: 'space-between'}}>
          <div className="adoptable-animals">
            <h3>Dogs</h3>
            <AdoptableContainer species={"dog"} />
          </div>
          <div className="adoptable-animals">
            <h3>Cats</h3>
          </div>
        </div>
        <div style={{flexDirection: 'column', width: '50%', paddingLeft: '2%', height: '98%'}}>
          <div className="stats">
            <Stats />
          </div>
          <div className="donations">
            <h2>Donations</h2>
          </div>
        </div>
      </div>
    );
  }
}
