import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgDocumentText(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9.414L12.586 4H7zM4 5a3 3 0 013-3h5.586A2 2 0 0114 2.586L19.414 8A2 2 0 0120 9.414V19a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm4 7a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgDocumentText;
