import React from 'react'
import MapContainer from './MapContainer'
let places = require('./places.json');


export class Map extends React.Component {
  state = {
    selectedItem: { lat: 49.2606, lng: -123.246 }
  };

  showInfo(e, selectedItem) {
    this.setState({ selectedItem: selectedItem });
    console.log(selectedItem);
  }
  render() {
    return(
    <div>
      <h1>Map</h1>
      <MapContainer
        center={{ lat: 49.2606, lng: -123.246 }}
        data={places}
        selectedItem={this.state.selectedItem}
      />
    </div>
    );
  }
}

export default Map
