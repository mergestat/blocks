import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCircleWarningFilled(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 11V7a1 1 0 112 0v6a1 1 0 11-2 0zm1 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCircleWarningFilled;
