import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export const Props = exact({
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  className: PropTypes.string,
});
