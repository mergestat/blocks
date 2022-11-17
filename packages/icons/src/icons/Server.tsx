import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgServer(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6a3 3 0 013-3h14a3 3 0 013 3v4c0 .768-.289 1.47-.764 2 .475.53.764 1.232.764 2v4a3 3 0 01-3 3H5a3 3 0 01-3-3v-4c0-.768.289-1.47.764-2A2.989 2.989 0 012 10V6zm3 7a1 1 0 00-1 1v4a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 00-1-1H5zm14-2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v4a1 1 0 001 1h14zm-3-3a1 1 0 011-1h.01a1 1 0 110 2H17a1 1 0 01-1-1zm0 8a1 1 0 011-1h.01a1 1 0 110 2H17a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgServer;
