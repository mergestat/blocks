import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgClock(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 0111 12V8a1 1 0 011-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgClock;
