import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgMail(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V8.014 7zm2 2.869V17a1 1 0 001 1h14a1 1 0 001-1V9.869l-6.336 4.223a3 3 0 01-3.328 0L4 9.87zm16-2.404l-7.445 4.963a1 1 0 01-1.11 0L4 7.465V7a1 1 0 011-1h14a1 1 0 011 1v.465z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgMail;
