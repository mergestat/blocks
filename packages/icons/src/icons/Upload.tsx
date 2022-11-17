import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgUpload(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 17a2 2 0 002 2h10a2 2 0 002-2v-1a1 1 0 112 0v1a4 4 0 01-4 4H7a4 4 0 01-4-4v-1a1 1 0 112 0v1zm2.293-8.293a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L13 6.414V16a1 1 0 11-2 0V6.414L8.707 8.707a1 1 0 01-1.414 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgUpload;
