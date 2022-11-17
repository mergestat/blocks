import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgOfficeBuilding(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5a3 3 0 013-3h10a3 3 0 013 3v15h1a1 1 0 110 2H3a1 1 0 010-2h1V5zm2 15h3v-4a2 2 0 012-2h2a2 2 0 012 2v4h3V5a1 1 0 00-1-1H7a1 1 0 00-1 1v15zm7 0v-4h-2v4h2zM8 7a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zm5 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-5 4a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zm5 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgOfficeBuilding;
