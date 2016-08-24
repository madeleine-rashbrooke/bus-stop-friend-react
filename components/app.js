import React, { Component } from 'react'
import Input from './input'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      stop: this.props.stop,
      route: this.props.route,
    }
  }

  render () {
    return (
      <div>
        <h1>{this.props.name}: here to help</h1>
        <Input stop={this.state.stop} route={this.state.route}/>
      </div>

    )
  }

}

export default App
