/* eslint-disable react/prop-types */
import React from 'react';

export default BaseComponent => ({ toggle, ...rest }) => (
  <BaseComponent
    onOutsideClick={toggle}
    onToggleClick={toggle}
    onEscape={toggle}
    onItemClick={toggle}
    {...rest}
  />
);
