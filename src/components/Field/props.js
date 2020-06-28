import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import { Props as LabelProps } from '../Label/props';
import { isValidElementType } from 'react-is';

export const Base = {
  type: PropTypes.oneOf(['password', 'text']),
  title: LabelProps.title,
  sub: LabelProps.sub,
  invalid: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
  name: PropTypes.string,
  component: (props, propName) => {
    if (props[propName] && !isValidElementType(props[propName])) {
      return new Error(
        `Invalid prop 'component' supplied to 'Field': the prop is not a valid React component`
      );
    }
  },
};
export const Props = exact(Base);
