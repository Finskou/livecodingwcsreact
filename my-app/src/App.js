import React, { Component } from 'react';
//import logo from './logo.svg';//
import './App.css';
import Character from './character.js'
import Profil from './Profil.js'

class App extends Component {
  state = { 
    characters: [],
    genderFilter: 'female',
    profilSelected: null
  }
  constructor() {
    super()

    fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
    .then(res => res.json())
    .then(characters => {
      this.setState({ characters:characters })
    })
  }

  handleFilterClick = (gender) => {
    this.setState({ genderFilter: gender })
  }

  selectProfil = profilSelected => {
    this.setState({ profilSelected })
  }


  render() {
    console.log('render', this.state)

    if (this.state.profilSelected) {
      const selectProfil = this.state.characters
        .find(c => c.id === this.state.profilSelected)
      
      
      return(
        <div className="App">
        <Profil action={this.selectProfil} {...selectProfil} />
         </div>

      )
    }

    const characters = this.state.characters
    .filter(c => c.gender === this.state.genderFilter)
    .map(c => <Character key={c.id} action={this.selectProfil} character={c}/>)

    return (
      <div className="App">
      <button onClick={() => this.handleFilterCick('male')}>Male</button>
      <button onClick={() => this.handleFilterCick('female')}>Female</button>
      
        {characters}
      </div>
    );
  }
}

export default App;
