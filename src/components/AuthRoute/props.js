import PropTypes from 'prop-types';
import { isValidElementType } from 'react-is';

// Source react-router
export const Props = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  component: (props, propName) => {
    if (props[propName] && !isValidElementType(props[propName])) {
      return new Error(
        `Invalid prop 'component' supplied to 'Route': the prop is not a valid React component`
      );
    }
  },
  exact: PropTypes.bool,
  location: PropTypes.object,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  render: PropTypes.func,
  sensitive: PropTypes.bool,
  strict: PropTypes.bool,
  isAuthorized: PropTypes.bool,
};
