import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgPlus1(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5V6a1 1 0 011-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgPlus1;
