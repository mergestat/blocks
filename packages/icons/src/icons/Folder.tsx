import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgFolder(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 6a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V9a1 1 0 00-1-1h-6a1 1 0 01-.707-.293L10.586 6H5zM2 7a3 3 0 013-3h6a1 1 0 01.707.293L13.414 6H19a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3V7z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgFolder;
