import React from 'react';
import '../../App.css';

import PetCard from './PetCard'

export default class AdoptableContainer extends React.Component {

  state = {
    dogs: [],
    cats: []
  }

  renderPetCards = (species) => {
    if (species === "dog") {
      return this.state.dogs.map(pet => {
        return (<PetCard pet={pet} key={pet.id}/>)
      })
    } else {
      return this.state.cats.map(pet => {
        return (<PetCard pet={pet} key={pet.id}/>)
      })
    }
  }

  // componentDidMount(){
  //   fetch("https://retrievr-api-v2.herokuapp.com/api/v1/pets", {
  //     method: "GET",
  //     headers: {
  //       Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.KArU1QH9B2aPHooE6TaaDn1cGHY-bQk5EHUCuj3H_GU"
  //     }
  //   })
  //   .then(res=>res.json())
  //   .then(pets => {
  //     return pets.map(pet => {
  //       return this.setState({dogs: [...this.state.dogs, pet]})
  //     })
  //   })
  // }

  render() {
    return (
      <div className="adoptable-container">
        {this.state.dogs || this.state.cats ? this.renderPetCards(this.props.species) : null}
      </div>
    );
  }
}
