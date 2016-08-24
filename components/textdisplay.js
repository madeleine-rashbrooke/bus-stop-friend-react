import React, { Component } from 'react'

class TextDisplay extends React.Component {
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
        <h2>Placeholder for text display</h2>
        <p>There should be a list of places on this route: #{this.props.route}</p>
      </div>

    )
  }

}

export default TextDisplay
