import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgChartBar(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5a3 3 0 013-3h2a3 3 0 013 3v14a3 3 0 01-3 3h-2c-.768 0-1.47-.289-2-.764A2.989 2.989 0 0113 22h-2c-.768 0-1.47-.289-2-.764A2.989 2.989 0 017 22H5a3 3 0 01-3-3v-6a3 3 0 013-3h2c.35 0 .687.06 1 .17V9a3 3 0 013-3h2c.35 0 .687.06 1 .17V5zm2 14a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v14zM14 9a1 1 0 00-1-1h-2a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 001-1V9zm-6 4a1 1 0 00-1-1H5a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgChartBar;
