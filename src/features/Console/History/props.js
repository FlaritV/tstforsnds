import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const Actions = {
  onRemove: PropTypes.func,
  onPick: PropTypes.func,
  onSend: PropTypes.func,
};

const RequestBase = {
  id: PropTypes.string.isRequired,
  date: PropTypes.number,
  response: PropTypes.object,
  body: PropTypes.object.isRequired,
  isLast: PropTypes.bool,
  isFailedResponse: PropTypes.bool,
  ...Actions,
};

export const RootProps = exact({
  ...Actions,
  clearAll: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.shape(RequestBase)),
});
export const ContainerProps = exact({});
export const RequestProp = exact(RequestBase);
export const OverlayProps = {};
