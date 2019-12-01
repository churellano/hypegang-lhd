import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%',
};

export class MapContainer extends React.Component {
  
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 49.2606, lng: -123.246}}
        />        
    );
  };
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDqMPznHZxoxPx88BZN8AuBEmuOnh4snpE'
})(MapContainer);