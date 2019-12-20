// https://t43yr.csb.app/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

class DropdownMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: props.open || false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleEscape = this.handleEscape(this);
  }

  componentDidMount() {
    if (window === 'undefined') return;
    
    document.addEventListener('click', this.handleClickOutside);
    document.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    if (window === 'undefined') return;

    document.removeEventListener('click', this.handleClickOutside);
    document.removeEventListener('keydown', this.handleEscape);
  }

  handleClickOutside(event) {
    if (!this.rootNode.contains(event.target)) {
      this.setState({ open: false });
    }
  }

  handleEscape(event) {
    if (event.keyCode === 27) {
      this.setState({ open: false });
    }
  }

  toggleMenu(event) {
    event.preventDefault();

    this.setState({
      open: !this.state.open
    });
  }

  handleLinkClick(link) {
    this.setState({ open: false });
    this.props.linkClickHandler(link);
  }

  render() {
    const { props, state } = this;
    const triggerClass = ['menu-trigger'];
    const wrapperClasses = [
      'menu-wrapper',
      `menu-${state.open ? 'opened' : 'closed'}`
    ];

    if (state.open) {
      triggerClass.push('color-primary');
    }
    
    return (
      <div
        data-qa={props.qa}
        ref={(element) => { this.rootNode = element; }}
        className={wrapperClasses.join(' ')}
      >
        <a
          href={props.links.homePage.path}
          className={triggerClass.join(' ')}
          onClick={this.toggleMenu}
        >
          {props.icon && <Icon icon={props.icon} />}
          
          {props.label && <span className="menu-label">{props.label}</span>}
        </a>
        
        <ul className="menu">
          {Object.keys(props.links).map((key, i) => {
            const link = props.links[key];

            return (
              <li
                key={i}
                className="menu-item"
                onClick={() => this.handleLinkClick(link)}
              >
                <a href={link.path} className="menu-item-link">
                  <Icon icon={link.icon} />
                  {link.label || ''}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  links: PropTypes.shape({}).isRequired,
  linkClickHandler: PropTypes.func.isRequired,
  open: PropTypes.bool
};

DropdownMenu.defaultProps = {
  icon: undefined,
  label: undefined,
  open: false
};

export default DropdownMenu;
