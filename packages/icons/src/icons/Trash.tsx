import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgTrash(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4a2 2 0 012-2h4a2 2 0 012 2v2h4a1 1 0 110 2h-.069l-.8 11.214A3 3 0 0116.137 22H7.862a3 3 0 01-2.992-2.786L4.069 8H4a1 1 0 010-2h4V4zM6.074 8l.79 11.071a1 1 0 00.998.929h8.276a1 1 0 00.997-.929L17.926 8H6.074zM14 6h-4V4h4v2zm-4 4a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zm4 0a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgTrash;
