import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgChevronLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.707 4.293a1 1 0 010 1.414L9.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgChevronLeft;
