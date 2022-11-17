import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCircleInformationFilled(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1 2v6a1 1 0 11-2 0v-6a1 1 0 112 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCircleInformationFilled;
