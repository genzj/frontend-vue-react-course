import React, { forwardRef } from 'react';

export default BaseComponent => forwardRef(
  (props, ref) => <BaseComponent {...props} containerRef={ref} />
);
