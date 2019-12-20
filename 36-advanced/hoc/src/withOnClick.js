/* eslint-disable react/prop-types */
import React from 'react';

export default BaseComponent => ({ children, onToggleClick, ...rest }) => (
  <BaseComponent {...rest}>
    {React.cloneElement(children, { onClick: onToggleClick })}
  </BaseComponent>
);
