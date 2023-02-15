import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCaretRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 7L15 12L9 17L9 7Z" fill="currentColor" />
    </Icon>
  );
}

export default SvgCaretRight;
