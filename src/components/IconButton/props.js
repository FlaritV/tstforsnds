import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import { isValidElementType } from 'react-is';

export const Props = exact({
  icon: (props, propName) => {
    if (!props[propName]) return new Error(`Prop 'icon' isRequired`);
    if (!isValidElementType(props[propName])) {
      return new Error(
        `Invalid prop 'icon' supplied to 'IconButton': the prop is not a valid React component`
      );
    }
  },

  placement: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
});
