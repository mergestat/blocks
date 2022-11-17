import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgHome(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.293 2.293a1 1 0 011.414 0l9 9a1 1 0 01-1.414 1.414L20 12.414V20a2 2 0 01-2 2H6a2 2 0 01-2-2v-7.586l-.293.293a1 1 0 01-1.414-1.414l9-9zM6 10.414V20h3v-4a2 2 0 012-2h2a2 2 0 012 2v4h3v-9.586l-6-6-6 6zM13 20v-4h-2v4h2z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgHome;
