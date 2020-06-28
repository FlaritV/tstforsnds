import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export const Base = {
  type: PropTypes.oneOf(['password', 'text']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
  name: PropTypes.string,
};
export const Props = exact(Base);
