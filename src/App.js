import React from 'react'
import './App.css';

const Loader = () => (
  <div className="lds-heart">
    <div></div>
  </div>
)

class App extends React.Component {
  state = {
    timesClicked: 0,
    searchValue: "",
    imageSource: "",
    loading: false
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({loading: true})

    const baseUrl = "https://pokeapi.co/api/v2/"
    fetch(`${baseUrl}pokemon/${this.state.searchValue}`)
      .then(res => res.json())
      .then(data => {
        const imageData = data.sprites.other["official-artwork"].front_default
        this.setState({
          imageSource: imageData
        })
      })
      .catch(err => console.log(err))
      .finally(() => this.setState({loading: false}))
  }

  handleTextUpdate = (event) => {
    event.preventDefault()
    // console.log(event.target.value)
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="e.g. bulbasaur"
            value={searchValue}
            onChange={this.handleTextUpdate}
          />
        <button type="submit">Click Me</button>
        </form>
        <button onClick={this.clear}>Clear</button>
        {imageSource && <img src={imageSource} alt="a pokemon" />}
      </>
    )
  }
}

export default App;