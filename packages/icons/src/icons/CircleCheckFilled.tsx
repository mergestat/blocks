import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCircleCheckFilled(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.747 8.164l-5.333 6a1 1 0 01-1.495 0l-2.666-3a1 1 0 011.494-1.328l1.92 2.159 4.586-5.16a1 1 0 111.494 1.33z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCircleCheckFilled;
