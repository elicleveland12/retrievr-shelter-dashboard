import React from 'react';
import '../../App.css';

export default class AnimalAdder extends React.Component {

  state = {
    selection: null
  }

  render() {
    return (
      <div className="animal-adder">
        <div
          style={{marginTop: 20, width: '40%', height: this.state.selection === "dog" ? 500 : 100, border: '2px solid #00b894', borderRadius: 5, textAlign: 'center'}}
          onClick={()=>this.setState({selection: "dog"})}
        >
          <h1>Dog +</h1>
          {this.state.selection === "dog" ?
          <div className="login-form">
            <form>
              <input placeholder="Name" type="text" name="name" style={{height: 30, width: 300, borderRadius: 5, marginTop: 10}} onChange={(event) => this.setState({name: event.target.value})} /><br />
              <input placeholder="Birthdate" type="text" name="birthdate" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({email: event.target.value})}/><br />
              <input placeholder="Breed" type="text" name="breed" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({password: event.target.value})} /><br />
              <input placeholder="File input placeholder" type="file" name="confirm_password" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({passwordConfirm: event.target.value})} /><br />
              <input type="submit" value="Submit" style={{fontSize: 20, marginTop: 20, height: 50, width: 80, borderRadius: 5, color: '#00b894', backgroundColor: '#dfe6e9'}} onClick={() => console.log("Functional")}/>
            </form>
          </div>
          :
            null
          }
        </div>
        <div
          style={{marginTop: 20, width: '40%', height: this.state.selection === "cat" ? 500 : 100, border: '2px solid #00b894', borderRadius: 5, textAlign: 'center'}}
          onClick={()=>this.setState({selection: "cat"})}
        >
          <h1>Cat +</h1>
          {this.state.selection === "cat" ?
          <div className="login-form">
            <form>
              <input placeholder="Name" type="text" name="name" style={{height: 30, width: 300, borderRadius: 5, marginTop: 10}} onChange={(event) => this.setState({name: event.target.value})} /><br />
              <input placeholder="Birthdate" type="text" name="birthdate" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({email: event.target.value})}/><br />
              <input placeholder="Breed" type="text" name="breed" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({password: event.target.value})} /><br />
              <input placeholder="File input placeholder" type="file" name="confirm_password" style={{height: 30, width: 300, marginTop: 10, borderRadius: 5}} onChange={(event) => this.setState({passwordConfirm: event.target.value})} /><br />
              <input type="submit" value="Submit" style={{fontSize: 20, marginTop: 20, height: 50, width: 80, borderRadius: 5, color: '#00b894', backgroundColor: '#dfe6e9'}} onClick={() => console.log("Functional")}/>
            </form>
          </div>
          :
            null
          }
        </div>
      </div>
    );
  }
}
