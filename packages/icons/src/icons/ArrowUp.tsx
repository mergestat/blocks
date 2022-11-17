import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgArrowUp(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.293 2.293a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414L13 5.414V21a1 1 0 11-2 0V5.414l-5.293 5.293a1 1 0 01-1.414-1.414l7-7z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgArrowUp;
