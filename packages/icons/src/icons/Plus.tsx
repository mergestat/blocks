import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgPlus(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a1 1 0 011 1v7h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H4a1 1 0 110-2h7V4a1 1 0 011-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgPlus;
