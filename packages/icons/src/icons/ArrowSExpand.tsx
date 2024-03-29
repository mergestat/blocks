import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgArrowSExpand(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l3.293 3.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm13-1h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-3.293 3.293a1 1 0 01-1.414-1.414L17.586 5H16a1 1 0 110-2zM9.707 14.293a1 1 0 010 1.414L6.414 19H8a1 1 0 110 2H4a1 1 0 01-1-1v-4a1 1 0 112 0v1.586l3.293-3.293a1 1 0 011.414 0zm4.586 0a1 1 0 011.414 0L19 17.586V16a1 1 0 112 0v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-3.293-3.293a1 1 0 010-1.414z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgArrowSExpand;
