import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export const ContainerProps = exact({});

export const RootProps = exact({
  className: PropTypes.string,
  account: PropTypes.string,
  sublogin: PropTypes.string,
  onLogout: PropTypes.func,
});
