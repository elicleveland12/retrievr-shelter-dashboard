import React from 'react';
import '../../App.css';

export default class PetCard extends React.Component {

  state = {
    flipped: false
  }

  render() {
    return (
      <div className="pet-card" onClick={() => this.setState({flipped: !this.state.flipped})}>
        {this.state.flipped ?
          <div>
            <h5 style={{color: 'white'}}>Name: {this.props.pet.name}</h5>
            <h5 style={{color: 'white'}}>Birthdate: {this.props.pet.birthdate}</h5>
            <h5 style={{color: 'white'}}>Breed: {this.props.pet.breed}</h5>
          </div>
        :
          <img src={this.props.pet.imageUrl} style={{height: '100%', width: '100%', borderRadius: 5}} alt={this.props.pet.name}/>
        }
      </div>
    );
  }
}
