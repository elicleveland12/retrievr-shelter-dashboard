import React from 'react';
import '../App.css';

export default class DashOptions extends React.Component {
  render() {
    return (
      <div className="dash-options">
        <div onClick={() => this.props.changeDashView("dashboard")} style={{width: '95%', padding: 10, backgroundColor: this.props.dashOption === "dashboard" ? '#00b894' : null , borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
          <h3>Dashboard</h3>
        </div>
        <div onClick={() => this.props.changeDashView("notifications")} style={{width: '95%', padding: 10, backgroundColor: this.props.dashOption === "notifications" ? '#00b894' : null}}>
          <h3>Notifications</h3>
        </div>
        <div onClick={() => this.props.changeDashView("addAnimals")} style={{width: '95%', padding: 10, backgroundColor: this.props.dashOption === "addAnimals" ? '#00b894' : null}}>
          <h3>Add Animals +</h3>
        </div>
        <div onClick={() => this.props.changeDashView("events")} style={{width: '95%', padding: 10, backgroundColor: this.props.dashOption === "events" ? '#00b894' : null}}>
          <h3>Events</h3>
        </div>
        <div onClick={() => this.props.changeDashView("followers")} style={{width: '95%', padding: 10, backgroundColor: this.props.dashOption === "followers" ? '#00b894' : null}}>
          <h3>Followers</h3>
        </div>
      </div>
    );
  }
}
