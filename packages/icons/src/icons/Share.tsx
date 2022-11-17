import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgShare(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 11.983 2.626l-5.071 2.536a4.012 4.012 0 010 1.676l5.071 2.536a4 4 0 11-.895 1.788l-5.071-2.536a4 4 0 110-5.253l5.071-2.535A4.015 4.015 0 0114 6zm-8 4a2 2 0 100 4 2 2 0 000-4zm12 6a2 2 0 10-.001 4A2 2 0 0018 16z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgShare;
