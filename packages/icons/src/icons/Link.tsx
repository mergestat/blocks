import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgLink(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.121 4.879a3 3 0 00-4.242 0l-1.1 1.1a1 1 0 11-1.414-1.415l1.1-1.1a5 5 0 117.07 7.072l-4 4a5 5 0 01-7.07 0 1 1 0 111.414-1.415 3 3 0 004.242 0l4-4a3 3 0 000-4.242zm-6 6a3 3 0 00-4.242 0l-4 4A3 3 0 109.12 19.12l1.102-1.101a1 1 0 111.414 1.414l-1.101 1.101a5 5 0 11-7.072-7.07l4-4a5 5 0 017.072 0 1 1 0 11-1.415 1.414z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgLink;
