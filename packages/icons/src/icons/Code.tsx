import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCode(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.242 3.03a1 1 0 01.728 1.213l-4 16a1 1 0 11-1.94-.485l4-16a1 1 0 011.213-.728zM6.707 7.293a1 1 0 010 1.414L3.414 12l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0zm10.586 0a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L20.586 12l-3.293-3.293a1 1 0 010-1.414z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCode;
