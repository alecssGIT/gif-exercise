import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valore: '',
      giff: ''
    };
  }

  onChange = (event) => {
    this.setState({ valore: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.valore}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ valore: '', giff: data.data[0].images.fixed_height.url }))
      .catch(e => console.log('error', e));
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.valore} onChange={this.onChange} />
          <button>Search!</button>
        </form>
        <img src={this.state.giff} height="200" alt={this.state.valore} />
      </div>
    );
  }
}

export default App;