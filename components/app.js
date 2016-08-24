import React, { Component } from 'react'
import Input from './input'
import MapDisplay from './mapdisplay'
import TextDisplay from './textdisplay'

class App extends Component {

  constructor (props) {
    super(props)
    this.updateStopState = this.updateStopState.bind(this)
    this.updateRouteState = this.updateRouteState.bind(this)
    this.state = {
      stop: "",
      route: ""
    }
  }

  updateStopState(stop) {
    this.setState({stop: stop})
    console.log("updating stop in App parent: ", stop);
  }

  updateRouteState(route) {
    this.setState({route: route})
    console.log("updating route in App parent: ", route);
  }


  render () {
    const relevantProps = {
      stop: this.state.stop,
      route: this.state.route
    }

    return (
      <div>
        <h1>{this.props.name}: here to help</h1>
        <Input
          updateStopState={this.updateStopState}
          updateRouteState={this.updateRouteState}
          relevantProps={relevantProps}
        />
        <MapDisplay relevantProps={relevantProps} />
        <TextDisplay relevantProps={relevantProps} />
      </div>

    )
  }

}

export default App
