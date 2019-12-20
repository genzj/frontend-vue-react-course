import React from "react";
import ReactDOM from "react-dom";

import DropdownMenu from './DropdownMenu';
import menu from './menu'

const rootElement = document.getElementById("root");

ReactDOM.render(
  <DropdownMenu items={menu} closeOnOutsideClick closeOnEscape>
    <button>Toggle menu</button>
  </DropdownMenu>,
  rootElement
);
