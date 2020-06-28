import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export const Props = exact({
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
});
