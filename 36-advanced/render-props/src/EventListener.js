import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class EventListener extends PureComponent {

  componentDidMount() {
    if (typeof document !== 'undefined') {
      document.addEventListener(this.props.event, this.props.handler);
    }
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.removeEventListener(this.props.event, this.props.handler);
    }
  }

  render() {
    return <noscript />;
  }
}

EventListener.propTypes = {
  event: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default EventListener;
