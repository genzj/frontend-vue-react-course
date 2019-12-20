import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default BaseComponent => class extends Component {

  static propTypes = {
    defaultOpen: PropTypes.bool
  };

  static defaultProps = {
    defaultOpen: false
  };

  constructor(props) {
    super(props);

    this.state = {
      open: this.props.defaultOpen
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(open) {
    this.setState(state => ({
      open: typeof open === 'boolean' ? open : !state.open
    }));
  }

  render() {
    return (
      <BaseComponent {...this.props} open={this.state.open} toggle={this.toggle} />
    );
  }
};
