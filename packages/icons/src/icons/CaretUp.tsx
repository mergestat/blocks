import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCaretUp(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 15L12 9L17 15L7 15Z" fill="currentColor" />
    </Icon>
  );
}

export default SvgCaretUp;
