import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgMinus(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 12a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgMinus;
