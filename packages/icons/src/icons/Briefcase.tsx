import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgBriefcase(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4a3 3 0 013-3h4a3 3 0 013 3v1h2a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.722V8a3 3 0 013-3h2V4zM5 7a1 1 0 00-1 1v4.57A22.95 22.95 0 0012 14c2.815 0 5.51-.505 8-1.43V8a1 1 0 00-1-1H5zm10-2H9V4a1 1 0 011-1h4a1 1 0 011 1v1zm5 9.692A24.971 24.971 0 0112 16c-2.796 0-5.487-.46-8-1.308V18a1 1 0 001 1h14a1 1 0 001-1v-3.308zM11 12a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgBriefcase;
