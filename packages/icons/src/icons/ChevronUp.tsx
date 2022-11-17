import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgChevronUp(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.707 15.707a1 1 0 01-1.414 0L12 9.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 010 1.414z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgChevronUp;
