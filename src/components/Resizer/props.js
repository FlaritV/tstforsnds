import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export const Props = exact({
  minWidth: PropTypes.number,
  className: PropTypes.string,
  localStorageKey: PropTypes.string,
});
