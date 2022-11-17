import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgAdjustments(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3a1 1 0 011 1v9.17a3.001 3.001 0 010 5.66V20a1 1 0 11-2 0v-1.17a3.001 3.001 0 010-5.66V4a1 1 0 011-1zm6 0a1 1 0 011 1v1.17a3.001 3.001 0 010 5.66V20a1 1 0 11-2 0v-9.17a3.001 3.001 0 010-5.66V4a1 1 0 011-1zm6 0a1 1 0 011 1v9.17a3.001 3.001 0 010 5.66V20a1 1 0 11-2 0v-1.17a3.001 3.001 0 010-5.66V4a1 1 0 011-1zm-6 4a1 1 0 100 2 1 1 0 000-2zm-6 8a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgAdjustments;
