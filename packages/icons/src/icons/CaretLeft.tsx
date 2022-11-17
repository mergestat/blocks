import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCaretLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15 17L9 12L15 7L15 17Z" fill="currentColor" />
    </Icon>
  );
}

export default SvgCaretLeft;
