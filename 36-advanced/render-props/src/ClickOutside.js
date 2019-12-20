import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EventListener from './EventListener';

class ClickOutside extends PureComponent {

  containerRef = React.createRef();

  handleOutsideClick = (event) => {
    if (this.containerRef.current && !this.containerRef.current.contains(event.target)) {
      this.props.onClickOutside();
    }
  };

  render() {
    return (
      <>
        {this.props.closeOnOutsideClick && (
          <EventListener event="click" handler={this.handleOutsideClick} />
         )}
        
        {this.props.children({
          containerRef: this.containerRef
        })}
      </>
    );
  }
}

ClickOutside.propTypes = {
  children: PropTypes.func.isRequired,
  closeOnOutsideClick: PropTypes.bool,
  onClickOutside: PropTypes.func.isRequired
};

ClickOutside.defaultProps = {
  closeOnOutsideClick: false
};

export default ClickOutside;
