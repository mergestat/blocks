import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgTrendDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.29289 6.29289C2.68342 5.90237 3.31658 5.90237 3.70711 6.29289L9 11.5858L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289L20 14.5858V9C20 8.44772 20.4477 8 21 8C21.5523 8 22 8.44772 22 9V17C22 17.5523 21.5523 18 21 18H13C12.4477 18 12 17.5523 12 17C12 16.4477 12.4477 16 13 16H18.5858L13 10.4142L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071L2.29289 7.70711C1.90237 7.31658 1.90237 6.68342 2.29289 6.29289Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgTrendDown;
