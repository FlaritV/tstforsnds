import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export const Props = exact({
  title: PropTypes.node.isRequired,
  sub: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
});
