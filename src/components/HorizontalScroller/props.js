import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export const Props = exact({
  affix: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
});
