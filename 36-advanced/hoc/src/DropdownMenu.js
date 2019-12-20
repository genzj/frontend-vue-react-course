import PropTypes from "prop-types";

import withHandlers from "./withHandlers";
import withToggle from "./withToggle";
import withRef from "./withRef";
import withClickOutside from "./withClickOutside";
import withEscape from "./withEscape";
import withOnClick from "./withOnClick";

import BaseMenu from "./BaseMenu";

const DropdownMenu =
  withToggle(
    withHandlers(
      withEscape(
        withClickOutside(
          withRef(
            withOnClick(BaseMenu)
          )
        )
      )
    )
  );

DropdownMenu.propTypes = {
  closeOnOutsideClick: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  defaultOpen: PropTypes.bool
};

DropdownMenu.defaultProps = {
  closeOnOutsideClick: false,
  closeOnEscape: false,
  defaultOpen: false
};

export default DropdownMenu;
