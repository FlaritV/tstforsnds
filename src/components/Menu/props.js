import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export const MenuProps = exact({
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
});

export const MenuItemProps = exact({
  isDanger: PropTypes.bool,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
});
