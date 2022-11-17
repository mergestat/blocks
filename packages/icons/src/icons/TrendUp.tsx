import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgTrendUp(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6H21C21.5523 6 22 6.44772 22 7V15C22 15.5523 21.5523 16 21 16C20.4477 16 20 15.5523 20 15V9.41421L13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071L9 12.4142L3.70711 17.7071C3.31658 18.0976 2.68342 18.0976 2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929L8.29289 10.2929C8.68342 9.90237 9.31658 9.90237 9.70711 10.2929L13 13.5858L18.5858 8H13Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgTrendUp;
