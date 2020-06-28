import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import { Base as BaseInputProps } from 'components/Input/props';
import { Base as BaseFieldProps } from 'components/Field/props';

export const RootProps = exact({
  onSend: PropTypes.func.isRequired,
  request: PropTypes.object,
  response: PropTypes.object,
  isFetching: PropTypes.bool,
  isFailedResponse: PropTypes.bool,
});

export const FooterProps = exact({
  onFormat: PropTypes.func,
  isFetching: PropTypes.bool,
  isDisabled: PropTypes.bool,
});

export const ContainerProps = exact({});
export const AreaProps = exact(BaseInputProps);
export const WorkspaceProps = exact(BaseFieldProps);
