import React, { Component } from 'react'

class MapDisplay extends React.Component {
  constructor (props) {
    super(props)
        // this.map = <canvas height=${window.innerHeight}, width=${window.innerWidth} id="canvas"></canvas>
  }



  render() {
    //update your map here//
    //this.map.data()
    return (
      <div>
        <h2>Placeholder for map display</h2>
        <div id="mapWrapper">
            {/*this.map*/}
        </div>
        <p>One map layer should show this bus stop #{this.props.stop}</p>
        <p>One map layer should show this route #{this.props.route}</p>
      </div>
    )
  }

}

export default MapDisplay
