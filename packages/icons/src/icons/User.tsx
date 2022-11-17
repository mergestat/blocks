import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgUser(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a3 3 0 100 6 3 3 0 000-6zM7 7a5 5 0 1110 0A5 5 0 017 7zm-.917 13h11.834a6.002 6.002 0 00-11.834 0zM4 21a8 8 0 1116 0 1 1 0 01-1 1H5a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgUser;
