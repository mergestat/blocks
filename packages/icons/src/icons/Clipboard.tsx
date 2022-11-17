import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgClipboard(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.17 4A3.001 3.001 0 0111 2h2c1.306 0 2.418.835 2.83 2H17a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h1.17zm0 2H7a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1h-1.17A3.001 3.001 0 0113 8h-2a3.001 3.001 0 01-2.83-2zM11 4a1 1 0 100 2h2a1 1 0 100-2h-2z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgClipboard;
