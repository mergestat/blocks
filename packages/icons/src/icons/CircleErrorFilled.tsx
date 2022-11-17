import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCircleErrorFilled(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.207 7.793L12 10.586l2.793-2.793a1 1 0 111.414 1.414L13.414 12l2.793 2.793a1 1 0 01-1.414 1.414L12 13.414l-2.793 2.793a1 1 0 01-1.414-1.414L10.586 12 7.793 9.207a1 1 0 011.414-1.414z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCircleErrorFilled;
