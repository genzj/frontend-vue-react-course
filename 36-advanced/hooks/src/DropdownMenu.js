import React, { useCallback } from 'react';
import PropTypes from "prop-types";

import useToggle from './useToggle';
import useEscape from './useEscape';
import useClickOutside from './useClickOutside';

import BaseMenu from './BaseMenu';

const DropdownMenu = (props) => {
  const [open, toggle] = useToggle(props.defaultOpen);
  const close = useCallback(() => toggle(false), [toggle]);
  const containerRef = useClickOutside(close, !props.closeOnOutsideClick);
  useEscape(close, !props.closeOnEscape);
  
  return (
    <BaseMenu
      containerRef={containerRef}
      items={props.items}
      onItemClick={toggle}
      open={open}
      offsetTop={20}
    >
      {React.cloneElement(props.children, { onClick: toggle })}
    </BaseMenu>
  );
};

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  closeOnOutsideClick: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  items: BaseMenu.propTypes.items
};

DropdownMenu.defaultProps = {
  closeOnOutsideClick: false,
  closeOnEscape: false,
  defaultOpen: false,
  items: []
};

export default DropdownMenu;
