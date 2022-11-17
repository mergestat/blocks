import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgChartSquareBar(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 2a1 1 0 011 1v8a1 1 0 11-2 0V8a1 1 0 011-1zm-4 3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm-4 3a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgChartSquareBar;
