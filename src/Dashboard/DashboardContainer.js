import React from 'react';
import '../App.css';

import DashOptions from './DashOptions'
import Dashboard from './Dash/Dashboard'
import AnimalAdder from './AddAnimals/AnimalAdder'
import Events from './Events'
import Notifications from './Notifications'
import Followers from './Followers'

export default class DashboardContainer extends React.Component {

  state = {
    dashOption: "dashboard"
  }

  changeDashView = (str) => {
    this.setState({dashOption: str})
  }

  renderDashView = () => {
    if (this.state.dashOption === "dashboard") {
      return(<Dashboard />)
    } else if (this.state.dashOption === "notifications") {
      return(<Notifications />)
    } else if (this.state.dashOption === "addAnimals") {
      return(<AnimalAdder />)
    } else if (this.state.dashOption === "events") {
      return(<Events />)
    } else if (this.state.dashOption === "followers") {
      return(<Followers />)
    }
  }

  render() {
    return (
      <div className="Dashboard">
        <div class="dash-column-one">
          <DashOptions changeDashView={this.changeDashView} dashOption={this.state.dashOption}/>
        </div>
        <div class="dash-column-two">
          {this.renderDashView()}
        </div>
      </div>
    );
  }
}
