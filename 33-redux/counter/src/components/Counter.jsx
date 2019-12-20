import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
  }

  incrementAsync() {
    setTimeout(() => this.props.onIncrement(1), 1000)
  }

  render() {
    const { value, onIncrement, onDecrement, onDelayedIncrement } = this.props
    return (
      <div className="wrapper">
        <p className="center">
          Clicked: {value} times
        </p>
        <p className="center">
          <button onClick={() => onIncrement(1)}>
            +
          </button>
          <button onClick={() => onDecrement(1)}>
            -
          </button>
          <button onClick={() => onIncrement(10)}>
            +10
          </button>
          <button onClick={this.incrementAsync}>
            Simple Increment async
          </button>
          <button onClick={() => onDelayedIncrement(1000, 1)}>
            Thunk Increment async
          </button>
        </p>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelayedIncrement: PropTypes.func.isRequired,
}

export default Counter
