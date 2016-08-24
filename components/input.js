import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.handleStopChange = this.handleStopChange.bind(this)
    this.handleRouteChange = this.handleRouteChange.bind(this)
  }

  handleStopChange (e) {
    this.props.updateStopState(e.target.value)
  }

  handleRouteChange (e) {
    this.props.updateRouteState(e.target.value)
  }


  render() {
    const { stop, route } = this.props.relevantProps

    return (
      <div>
        <h2>Where are you?</h2>
        <input type="text" onChange={this.handleStopChange} />
        <p>You selected bus stop #{stop}</p>


        <h2>What bus is coming?</h2>
        <input type="text" onChange={this.handleRouteChange} />
        <p>You selected route #{route}</p>
      </div>

    )
  }

}

export default Input
