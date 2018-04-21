import React, { Component } from 'react';
import '../styles/Map.css';

class Map extends Component {
  render() {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_EMBED_API_KEY;

    return (
      <iframe
        title="Google Map"
        className="Map"
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
          &q=Space+Needle,Seattle+WA`}
        allowFullScreen
      />
    );
  }
}

export default Map;
