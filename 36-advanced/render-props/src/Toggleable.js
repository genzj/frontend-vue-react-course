import { Component } from 'react';
import PropTypes from 'prop-types';

class Toggleable extends Component {
  state = {
    open: this.props.defaultOpen
  };

  toggle = (open) => {
    this.setState(state => ({
      open: typeof open === 'boolean' ? open : !state.open
    }));
  };

  render() {
    return this.props.children({
      open: this.state.open,
      toggle: this.toggle
    });
  }
}

Toggleable.propTypes = {
  children: PropTypes.func.isRequired,
  defaultOpen: PropTypes.bool
};

Toggleable.defaultProps = {
  defaultOpen: false
};

export default Toggleable;
