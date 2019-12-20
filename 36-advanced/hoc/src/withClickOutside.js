import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

export default BaseComponent => class extends Component {

  static propTypes = {
    closeOnOutsideClick: PropTypes.bool,
    onOutsideClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    closeOnOutsideClick: false
  };

  rootNode = createRef();

  constructor(props) {
    super(props);

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    if (this.props.closeOnOutsideClick) {
      document.addEventListener('click', this.handleOutsideClick);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnOutsideClick) {
      document.removeEventListener('click', this.handleOutsideClick);
    }
  }

  handleOutsideClick(event) {
    if (this.rootNode && !this.rootNode.current.contains(event.target)) {
      this.props.onOutsideClick(false);
    }
  }

  render() {
    return (
      <BaseComponent {...this.props} ref={this.rootNode} />
    );
  }
};
