import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import { Base } from 'components/Input/props';

export const Props = exact({ ...Base, isCode: PropTypes.bool });
