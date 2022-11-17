import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCircleWarning(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
        fill="currentColor"
      />
      <path
        d="M12 14a1 1 0 01-1-1V7a1 1 0 112 0v6a1 1 0 01-1 1zM10.5 16.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCircleWarning;
