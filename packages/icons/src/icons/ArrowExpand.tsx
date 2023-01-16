import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgArrowExpand(props: IconProps) {
  return (
    <Icon viewBox='0 0 20 20' {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 0C14.4477 0 14 0.44772 14 1C14 1.55228 14.4477 2 15 2H16.5858L12.2929 6.29289C11.9024 6.68342 11.9024 7.31658 12.2929 7.70711C12.6834 8.0976 13.3166 8.0976 13.7071 7.70711L18 3.41422V5.00001C18 5.55229 18.4477 6 19 6C19.5523 6 20 5.55229 20 5V1C20 0.44772 19.5523 0 19 0H15ZM2 16.5858V15C2 14.4477 1.55228 14 1 14C0.44771 14 0 14.4477 0 15V19C0 19.5523 0.44772 20 1 20H5C5.55228 20 6 19.5523 6 19C6 18.4477 5.55229 18 5 18H3.41421L7.70711 13.7071C8.0976 13.3166 8.0976 12.6834 7.70711 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929L2 16.5858Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgArrowExpand;
