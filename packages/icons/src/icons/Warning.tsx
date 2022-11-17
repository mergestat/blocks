import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgWarning(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M12 14a1 1 0 01-1-1v-3a1 1 0 112 0v3a1 1 0 01-1 1zM10.5 16.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill="currentColor"
      />
      <path
        d="M10.23 3.216c.75-1.425 2.79-1.425 3.54 0l8.343 15.852C22.814 20.4 21.85 22 20.343 22H3.657c-1.505 0-2.47-1.6-1.77-2.931L10.23 3.216zM20.344 20L12 4.147 3.656 20h16.688z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgWarning;
