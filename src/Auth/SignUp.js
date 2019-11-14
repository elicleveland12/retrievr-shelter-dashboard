import React from 'react';
import '../App.css';
import * as EmailValidator from 'email-validator';


export default class SignUp extends React.Component {

  state = {
    email: null,
    password: null,
    passwordConfirm: null,
    name: null,
    addressOne: null,
    addressTwo: null,
    city: null,
    state: null,
  }

  renderSubmitButton = () => {
    if (
      EmailValidator.validate(this.state.email) &&
      this.state.password === this.state.passwordConfirm &&
      this.state.name &&
      this.state.password &&
      this.state.addressOne &&
      this.state.city &&
      this.state.state
    ) {
      if (this.state.password.length > 5) {
        return (
          <input type="submit" value="Submit" style={{fontSize: 20, marginTop: 20, height: 50, width: 80, borderRadius: 5, color: '#00b894', backgroundColor: '#dfe6e9'}} onClick={() => console.log("Functional")}/>
        )
      }
    } else {
      return (
        <input type="submit" value="Submit" style={{fontSize: 20, marginTop: 20, height: 50, width: 120, borderRadius: 5, backgroundColor: '#636e72'}}/>
      )
    }
  }


  render() {
    return (
      <div className="SignUp">
        <h1 style={{color: '#00b894'}}>Sign Up</h1>
        <div className="login-form">
          <form>
            <input placeholder="Email" type="text" name="password" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({email: event.target.value})}/><br />
            <input placeholder="Password" type="password" name="password" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({password: event.target.value})} /><br />
            <input placeholder="Confirm Password" type="password" name="confirm_password" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({passwordConfirm: event.target.value})} /><br />
            <h2 style={{color: '#00b894'}}>Facility Details</h2>
            <input placeholder="Name" type="text" name="name" style={{height: 30, width: 300, borderRadius: 5}} onChange={(event) => this.setState({name: event.target.value})} /><br />
            <input placeholder="Address" type="text" name="addressOne" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({addressOne: event.target.value})} /><br />
            <input placeholder="Address" type="text" name="addressTwo" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({addressTwo: event.target.value})} /><br />
            <input placeholder="City" type="text" name="city" style={{height: 30, width: 140, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({city: event.target.value})} />
            <select value={this.state.state} style={{width: 60, height: 40, marginLeft: 96}} onChange={(event) => this.setState({state: event.target.value})}>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </select><br />
            {this.renderSubmitButton()}
          </form>
        </div>
      </div>
    );
  }
}
