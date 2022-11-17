import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgEye(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.512 12a9.004 9.004 0 0016.977 0 9.004 9.004 0 00-16.977 0zm-2.008-.3C2.906 7.238 7.074 4 12 4c4.927 0 9.095 3.238 10.497 7.7a1 1 0 010 .6C21.095 16.762 16.927 20 12 20c-4.927 0-9.095-3.238-10.497-7.7a1 1 0 010-.6zM12 10a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgEye;
