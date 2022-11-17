import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgChevronRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.293 19.707a1 1 0 010-1.414L14.586 12 8.293 5.707a1 1 0 011.414-1.414l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgChevronRight;
