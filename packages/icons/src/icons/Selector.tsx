import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgSelector(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L12 6.414 8.707 9.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0112 4zM7.293 14.293a1 1 0 011.414 0L12 17.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgSelector;
