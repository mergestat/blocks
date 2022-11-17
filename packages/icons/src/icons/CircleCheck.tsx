import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCircleCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm14.664-3.247a1 1 0 01.083 1.411l-5.333 6a1 1 0 01-1.495 0l-2.666-3a1 1 0 011.494-1.328l1.92 2.159 4.586-5.16a1 1 0 011.411-.082z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCircleCheck;
