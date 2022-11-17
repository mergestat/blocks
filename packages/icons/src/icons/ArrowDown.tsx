import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgArrowDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a1 1 0 011 1v15.586l5.293-5.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L11 18.586V3a1 1 0 011-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgArrowDown;
