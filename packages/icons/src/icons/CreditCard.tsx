import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCreditCard(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8a4 4 0 014-4h12a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V8zm2 3v5a2 2 0 002 2h12a2 2 0 002-2v-5H4zm16-2H4V8a2 2 0 012-2h12a2 2 0 012 2v1zM6 15a1 1 0 011-1h1a1 1 0 110 2H7a1 1 0 01-1-1zm5 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCreditCard;
