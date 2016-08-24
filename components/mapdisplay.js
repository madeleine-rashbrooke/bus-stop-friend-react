import React, { Component } from 'react'

class MapDisplay extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
      stop: this.props.stop,
      route: this.props.route,
    }
  }


  render() {
    return (
      <div>
        <h2>Placeholder for map display</h2>
        <p>One map layer should show this bus stop #{this.state.stop}</p>
        <p>One map layer should show this route #{this.state.route}</p>
      </div>

    )
  }

}

export default MapDisplay
