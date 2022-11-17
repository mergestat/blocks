import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgDuplicate(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6a3 3 0 013-3h8a3 3 0 013 3v1h1a3 3 0 013 3v8a3 3 0 01-3 3h-8a3 3 0 01-3-3v-1H6a3 3 0 01-3-3V6zm6 12a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1h-8a1 1 0 00-1 1v8zm6-11h-5a3 3 0 00-3 3v5H6a1 1 0 01-1-1V6a1 1 0 011-1h8a1 1 0 011 1v1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgDuplicate;
