import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export const ContainerProps = exact({});

export const RootProps = exact({
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
  fail: PropTypes.string,
});
