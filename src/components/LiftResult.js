import React, { Component } from 'react'


export default class LiftResult extends Component {

  render() {
    return (
      <div className="LiftResult">
        <p>{this.props.result.weight} on {this.props.result.date}</p>
      </div>
    )
  }

}