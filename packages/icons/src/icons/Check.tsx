import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.707 6.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 15.586l9.293-9.293a1 1 0 011.414 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCheck;
