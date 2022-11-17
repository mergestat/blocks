import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCalendar(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h2a3 3 0 013 3v12a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h2V3a1 1 0 011-1zM7 6H5a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V7a1 1 0 00-1-1h-2v1a1 1 0 11-2 0V6H9v1a1 1 0 01-2 0V6zm-1 5a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCalendar;
