import React from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '75%',
  height: '75%',
};


export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const data = this.props.data;

    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 49.2606, lng: -123.246}}
      >
        {data.map(item => (
            <Marker
              key={item.id}
              title={item.name}
              name={item.name}
              position={{ lat: item.lat, lng: item.lng }}
            />
        ))}
        <InfoWindow
            visible={true}
            position={{
              lat: this.props.selectedItem.lat,
              lng: this.props.selectedItem.lng
            }}
        />
            <div>
              <h1>{this.props.selectedItem.title}</h1>
            </div>
      </Map>     
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDqMPznHZxoxPx88BZN8AuBEmuOnh4snpE'
})(MapContainer);