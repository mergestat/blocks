import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgArrowLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.707 4.293a1 1 0 010 1.414L5.414 11H21a1 1 0 110 2H5.414l5.293 5.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgArrowLeft;
