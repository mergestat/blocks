import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgUsers(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4a3 3 0 100 6 3 3 0 000-6zm3-1a5 5 0 100 8 5 5 0 100-8zm1.334 1.505C13.758 5.239 14 6.09 14 7s-.242 1.76-.666 2.495a3 3 0 100-4.99zM9 15a5 5 0 00-5 5h10a5 5 0 00-5-5zm7 5h4a5 5 0 00-6.001-4.9A6.977 6.977 0 0116 20zm-4-6.326A7 7 0 002 20v1a1 1 0 001 1h18a1 1 0 001-1v-1a7 7 0 00-10-6.326z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgUsers;
