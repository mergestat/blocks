import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgLogout(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5a2 2 0 00-2 2v10a2 2 0 002 2h4a2 2 0 002-2v-1a1 1 0 112 0v1a4 4 0 01-4 4H6a4 4 0 01-4-4V7a4 4 0 014-4h4a4 4 0 014 4v1a1 1 0 11-2 0V7a2 2 0 00-2-2H6zm10.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L18.586 13H7a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgLogout;
