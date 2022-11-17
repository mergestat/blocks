import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCircleInformation(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
        fill="currentColor"
      />
      <path
        d="M12 10a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zM13.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCircleInformation;
