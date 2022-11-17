import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgExternalLink(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 11-2 0V6.414l-8.293 8.293a1 1 0 01-1.414-1.414L17.586 5H14zM6 7a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4a1 1 0 112 0v4a3 3 0 01-3 3H6a3 3 0 01-3-3V8a3 3 0 013-3h4a1 1 0 110 2H6z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgExternalLink;
