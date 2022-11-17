import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgFilter(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4a2 2 0 012-2h16a2 2 0 012 2v2.586A2 2 0 0121.414 8L15 14.414V17a1 1 0 01-.293.707l-4 4A1 1 0 019 21v-6.586L2.586 8A2 2 0 012 6.586V4zm18 0H4v2.586L10.414 13A2 2 0 0111 14.414v4.172l2-2v-2.172A2 2 0 0113.586 13L20 6.586V4z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgFilter;
