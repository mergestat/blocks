import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SwitchVertical(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
      />
    </Icon>
  );
}

export default SwitchVertical;
