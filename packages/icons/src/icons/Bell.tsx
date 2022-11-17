import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgBell(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.018 4.665a3 3 0 015.963 0A7 7 0 0119 11v3.159c0 .273.109.535.302.729l1.405 1.405A1 1 0 0120 18h-4a4 4 0 01-8 0H4a1 1 0 01-.707-1.707l1.405-1.405c.193-.194.302-.456.302-.73V11a7 7 0 014.018-6.335zM10 18a2 2 0 104 0h-4zm2-14a1 1 0 00-1 1v.341a1 1 0 01-.667.943A5.003 5.003 0 007 11v3.159c0 .669-.221 1.315-.623 1.841h11.246A3.032 3.032 0 0117 14.159V11a5.002 5.002 0 00-3.333-4.716A1 1 0 0113 5.341V5a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgBell;
