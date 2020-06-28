import React, { cloneElement, forwardRef } from 'react';
import classnames from 'classnames';
import { composeRef, supportRef } from './helpers';

const Trigger = forwardRef(
  ({ children, className, onClick, ...props }, ref) => {
    const child = React.Children.only(children);
    const cloneProps = {};

    /* Class Names */
    const childClasses = classnames(child?.props?.className, className);
    cloneProps.className = childClasses;

    /* Ref */
    if (supportRef(child)) {
      cloneProps.ref = composeRef(ref, child.ref);
    }

    /* Compare Click */
    cloneProps.onClick = (event) => {
      onClick(event);
      if (child?.props?.onClick) {
        child.props.onClick(event);
      }
    };

    return cloneElement(child, { ...cloneProps, ...props });
  }
);

export default Trigger;
