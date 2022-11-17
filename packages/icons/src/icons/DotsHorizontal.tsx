import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgDotsHorizontal(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgDotsHorizontal;
