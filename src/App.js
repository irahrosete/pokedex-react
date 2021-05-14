import React from 'react'
// import styled from 'styled-components'
import './App.css';

const Loader = () => (
  <div className="lds-heart">
    <div></div>
  </div>
)

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
    searchValue: "",
    imageSource: "",
    loading: false
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

  // handleSubmit for PokeAPI
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({loading: true})

    const baseUrl = "https://pokeapi.co/api/v2/"
    fetch(`${baseUrl}pokemon/${this.state.searchValue}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const imageData = data.sprites.other["official-artwork"].front_default
        this.setState({
          imageSource: imageData
        })

        console.log("🚀 ~ file: App.js ~ line 61 ~ App ~ imageData", imageData)
      })
      .catch(err => console.log(err))
      .finally(() => this.setState({loading: false}))
  }

  handleTextUpdate = (event) => {
    event.preventDefault()

    console.log(event.target.value)
    this.setState({
      searchValue: event.target.value
    })
  }

  clear = () => {
    this.setState({
      imageSource: ""
    })
  }

  render() {
    const {searchValue, imageSource, loading} = this.state

    if (loading) {
      return <Loader />
    }

    return (
      <>
        {/* <p>Times clicked: {this.state.timesClicked}</p> */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="e.g. bulbasaur"
            value={searchValue}
            onChange={this.handleTextUpdate}
          />

        {/* <button onClick={this.handleClick}>Click Me</button> */}
        <button type="submit">Click Me</button>
        </form>
        {/* {loading && <p>loading...</p>} */}
        <button onClick={this.clear}>Clear</button>
        {imageSource && <img src={imageSource} alt="a pokemon" />}
      </>
    )
  }
}

export default App;