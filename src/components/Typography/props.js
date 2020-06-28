import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export const Props = exact({
  type: PropTypes.oneOf(['inverse', 'mute']),
  size: PropTypes.oneOf(['200', '300', '400', '500', '600', '800']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
});
