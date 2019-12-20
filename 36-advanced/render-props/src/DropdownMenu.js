import React from "react";
import PropTypes from "prop-types";

import Toggleable from './Toggleable';
import ClickOutside from './ClickOutside';
import Escape from './Escape';

import BaseMenu from './BaseMenu';

const DropdownMenu = props => (
  <Toggleable defaultOpen={props.defaultOpen}>
    {({ open, toggle }) => (
      <ClickOutside
        closeOnOutsideClick={props.closeOnOutsideClick}
        onClickOutside={() => toggle(false)}
        >
        {({ containerRef }) => (
          <>
            {props.closeOnEscape && <Escape onEscape={() => toggle(false)} /> }

             <BaseMenu
              containerRef={containerRef}
              items={props.items}
              onItemClick={toggle}
              open={open}
              offsetTop={20}
            >
              {props.children({ toggle })}
             </BaseMenu>
           </>
         )}
      </ClickOutside>
    )}
  </Toggleable>
);

DropdownMenu.propTypes = {
  children: PropTypes.func.isRequired,
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
