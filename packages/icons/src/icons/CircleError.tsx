
import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCircleError(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm5.793-4.207a1 1 0 011.414 0L12 10.586l2.793-2.793a1 1 0 111.414 1.414L13.414 12l2.793 2.793a1 1 0 01-1.414 1.414L12 13.414l-2.793 2.793a1 1 0 01-1.414-1.414L10.586 12 7.793 9.207a1 1 0 010-1.414z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCircleError;
