import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
export const Props = exact({
  affix: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
});
