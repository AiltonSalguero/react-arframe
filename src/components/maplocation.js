import React, { Component } from 'react';
import GoogleMaps from './googlemaps';

class MapLocation extends Component {
  render() {
    return(
      <div>
        <GoogleMaps></GoogleMaps>
      </div>
    )
  }
}

export default MapLocation;