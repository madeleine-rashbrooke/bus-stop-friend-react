import React, { Component } from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.handleStopChange = this.handleStopChange.bind(this)
    this.handleRouteChange = this.handleRouteChange.bind(this)
    this.state = {
      stop: this.props.stop,
      route: this.props.route,
    }
  }



  handleStopChange (e) {
    this.setState({
        stop: e.target.value
    })
  }

  handleRouteChange (e) {
    this.setState({
        route: e.target.value
    })
  }


  render() {
    return (
      <div>
        <h2>Where are you?</h2>
        <input type="text" onChange={this.handleStopChange} />
        <p>You selected bus stop #{this.state.stop}</p>


        <h2>What bus is coming?</h2>
        <input type="text" onChange={this.handleRouteChange} />
        <p>You selected route #{this.state.route}</p>
      </div>

    )
  }

}

export default Input
