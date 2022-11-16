import { Icon } from "../components/Icon";
import { IconProps } from "../utils/types";

function SvgLockClosed(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7a5 5 0 0110 0v3h1a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3v-6a3 3 0 013-3h1V7zm2 3h6V7a3 3 0 10-6 0v3zm-3 2a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1v-6a1 1 0 00-1-1H6zm6 2a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgLockClosed;
