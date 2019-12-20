import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ESCAPE_KEY = 27;

export default BaseComponent => class extends Component {

  static propTypes = {
    closeOnEscape: PropTypes.bool,
    onEscape: PropTypes.func.isRequired
  };

  static defaultProps = {
    closeOnEscape: false
  };

  constructor(props) {
    super(props);

    this.handleEscape = this.handleEscape.bind(this);
  }

  componentDidMount() {
    if (this.props.closeOnEscape) {
      document.addEventListener('keydown', this.handleEscape);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEscape) {
      document.removeEventListener('keydown', this.handleEscape);
    }
  }

  handleEscape(event) {
    if (event.keyCode === ESCAPE_KEY) {
      this.props.onEscape(false);
    }
  }

  render() {
    return (
      <BaseComponent {...this.props} />
    );
  }
};
