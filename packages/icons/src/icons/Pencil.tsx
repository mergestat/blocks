import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgPencil(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.56 4.44a1.5 1.5 0 00-2.12 0l-.794.792 2.122 2.122.793-.793a1.5 1.5 0 000-2.122zm-2.206 4.328l-2.122-2.122L4 17.88v2.156h2.086L17.354 8.768zm-1.329-5.743a3.5 3.5 0 014.95 4.95L7.207 21.743a1 1 0 01-.707.293H3a1 1 0 01-1-1v-3.572a1 1 0 01.293-.707L16.025 3.025z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgPencil;
