import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgRefresh(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3a1 1 0 011 1v2.343A8.982 8.982 0 0112 3c4.59 0 8.377 3.436 8.93 7.876a1 1 0 11-1.984.248A7.001 7.001 0 006.254 8H9a1 1 0 010 2H4a1 1 0 01-1-1V4a1 1 0 011-1zm-.062 9.008a1 1 0 011.116.868A7.001 7.001 0 0017.746 16H15a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.343A8.982 8.982 0 0112 21c-4.59 0-8.377-3.436-8.93-7.876a1 1 0 01.868-1.116z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgRefresh;
