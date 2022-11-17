import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.293 4.293a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L18.586 13H3a1 1 0 110-2h15.586l-5.293-5.293a1 1 0 010-1.414z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgArrowRight;
