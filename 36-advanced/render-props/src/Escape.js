import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EventListener from './EventListener';

const ESCAPE_KEY = 27;

class Escape extends PureComponent {

  constructor(props) {
    super(props);

    this.handleEscape = this.handleEscape.bind(this);
  }

  handleEscape = (event) => {
    if (event.keyCode === ESCAPE_KEY) {
      this.props.onEscape();
    }
  };

  render() {
    return <EventListener event="keydown" handler={this.handleEscape} />;
  }
}

Escape.propTypes = {
  onEscape: PropTypes.func.isRequired
};

export default Escape;
