import React, { Component } from 'react'

class TextDisplay extends React.Component {

  render() {
    const { stop, route } = this.props.relevantProps

    return (
      <div>
        <h2>Placeholder for text display</h2>
        <p>There should be a list of places on this route: #{route}</p>
      </div>

    )
  }

}

export default TextDisplay
