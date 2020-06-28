import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export const Props = exact({
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  type: PropTypes.oneOf(['error']),
  className: PropTypes.string,
  icon: PropTypes.node,
});
