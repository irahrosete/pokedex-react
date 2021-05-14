import React from 'react'
// import styled from 'styled-components'
import './App.css';

class App extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     timesClicked: 0
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }

  state = {
    timesClicked: 0,
    searchValue: ""
  }

  // this means that the App component has mounted
  // componentDidMount() {
  //   console.log("component mounted!")
  //   const baseUrl = "https://pokeapi.co/api/v2/"
  //   fetch(`${baseUrl}pokemon/bulbasaur`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }

  // componenDidUpdate() {
  //   console.log("the component updated!")
  // }

  // componentWillMount() {
  // }

  // returns true or false
  // shouldComponentUpdate() {
  //   if (this.state.timesClicked % 2 === 0) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  // use fat arrow for this keyword to mean the parent. normal function with this keyword will mean the function itself
  // handClick for timesClick
  // handleClick = () => {
  //   // increment the timesClicked state by 1
  //   this.setState({
  //     timesClicked: this.state.timesClicked + 1
  //   })
  // }

  // handleClick for PokeAPI
  handleClick = () => {
    const baseUrl = "https://pokeapi.co/api/v2/"
    fetch(`${baseUrl}pokemon/bulbasaur`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  handleTextUpdate = (event) => {
    // event.preventDefault()

    console.log(event.target.value)
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <>
        {/* <p>Times clicked: {this.state.timesClicked}</p> */}
        <input
          type="text"
          placeholder="e.g. bulbasaur"
          value={this.state.searchValue}
          onChange={this.handleTextUpdate}
        />
        <button onClick={this.handleClick}>Click Me</button>
      </>
    )
  }
}

export default App;
