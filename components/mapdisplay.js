import React, { Component } from 'react'

class MapDisplay extends Component {
  constructor (props) {
    super(props)
        // this.map = <canvas height=${window.innerHeight}, width=${window.innerWidth} id="canvas"></canvas>
  }



  componentDidMount() {
    L.mapbox.accessToken = 'pk.eyJ1IjoibWFkZWxlaW5lLXJhc2hicm9va2UiLCJhIjoiY2lyeDVqdXRmMDA4OTJ5b2ZxZXc1dDg5dCJ9.6kyfgf7klxvu7UizZNzA9A';

    var map = L.mapbox.map('map', 'mapbox.streets')
      .setView([-41.2963, 174.7742], 15);

    var featureLayer = L.mapbox.featureLayer()
      .loadID("madeleine-rashbrooke.15b5e4nd")
      .addTo(map)
  }

  render() {
    const { stop, route } = this.props.relevantProps

    //update your map here//
    //this.map.data()
    return (
      <div>
        <h2>Placeholder for map display</h2>
        <div id="mapWrapper">
            {/*this.map*/}
        </div>
        <div id="map"></div>

        <p>One map layer should show this bus stop #{stop}</p>
        <p>One map layer should show this route #{route}</p>
      </div>
    )
  }

}

export default MapDisplay
