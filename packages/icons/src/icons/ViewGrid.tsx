import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgViewgrid(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V6a1 1 0 00-1-1H6zm7 1a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3h-2a3 3 0 01-3-3V6zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V6a1 1 0 00-1-1h-2zM3 16a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3v-2zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H6zm7 1a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3h-2a3 3 0 01-3-3v-2zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgViewgrid;
