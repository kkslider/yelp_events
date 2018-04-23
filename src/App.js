import React, { Component } from 'react';
import YelpControls from './components/YelpControls';
import Map from './components/Map';
import axios from 'axios';
import './styles/App.css';

class App extends Component {
  componentDidMount() {
    axios
      .get('/api/events')
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        <YelpControls />
        <Map />
      </div>
    );
  }
}

export default App;
