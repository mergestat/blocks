import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgTable(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M2 5.5a2 2 0 012-2h16a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2v-13zm9 0H4v3h7v-3zm2 0v3h7v-3h-7zm7 5h-7v3h7v-3zm0 5h-7v3h7v-3zm-9 3v-3H4v3h7zm-7-5h7v-3H4v3z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgTable;
