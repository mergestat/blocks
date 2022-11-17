import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgWarningFilled(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M13.77 3.216c-.75-1.425-2.79-1.425-3.54 0L1.887 19.068C1.186 20.4 2.15 22 3.657 22h16.687c1.505 0 2.47-1.6 1.77-2.931L13.77 3.216zM11 13v-3a1 1 0 112 0v3a1 1 0 11-2 0zm1 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgWarningFilled;
