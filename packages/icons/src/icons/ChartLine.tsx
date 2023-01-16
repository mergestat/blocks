import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgChartLine(props: IconProps) {
  return (
    <Icon width="19" height="18" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0C1.55228 0 2 0.447715 2 1V16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H0V1C0 0.447716 0.447715 0 1 0ZM16.586 3.99988C16.9765 3.60947 17.6095 3.6095 18 3.99996C18.3904 4.39045 18.3904 5.02355 18 5.41404L13.8484 9.56561C13.3798 10.0342 12.6201 10.0343 12.1515 9.56575L10 7.415L6.41404 11.0001C6.02354 11.3905 5.3905 11.3905 5.00004 11C4.60955 10.6096 4.60955 9.97645 5.00004 9.58596L9.15162 5.43439C9.62019 4.96581 10.3799 4.96575 10.8485 5.43425L13 7.585L16.586 3.99988Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgChartLine;
