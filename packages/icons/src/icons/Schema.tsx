import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgSchema(props: IconProps) {
  return (
    <Icon width="18" height="18" viewBox="0 0 18 18" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C12.552 0 13 0.448 13 1V5C13 5.552 12.552 6 12 6H10V8H14C14.552 8 15 8.448 15 9V12H17C17.552 12 18 12.448 18 13V17C18 17.552 17.552 18 17 18H11C10.448 18 10 17.552 10 17V13C10 12.448 10.448 12 11 12H13V10H5V12H7C7.552 12 8 12.448 8 13V17C8 17.552 7.552 18 7 18H1C0.448 18 0 17.552 0 17V13C0 12.448 0.448 12 1 12H3V9C3 8.448 3.448 8 4 8H8V6H6C5.448 6 5 5.552 5 5V1C5 0.448 5.448 0 6 0H12ZM6 14H2V16H6V14ZM16 14H12V16H16V14ZM11 2H7V4H11V2Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgSchema;
