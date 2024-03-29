import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCircleHelpFilled(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.514 7.164a1 1 0 01-1.972-.328c.356-2.136 2.303-3.102 3.971-3.022.854.04 1.733.347 2.409.979C15.587 7.44 16 8.368 16 9.5c0 1.291-.508 2.249-1.383 2.832-.496.33-1.062.508-1.617.595V13a1 1 0 11-2 0v-1a1 1 0 011-1c.67 0 1.186-.117 1.508-.332.25-.167.492-.46.492-1.168 0-.618-.212-1.003-.472-1.246-.277-.259-.68-.42-1.138-.443-.957-.045-1.76.49-1.904 1.353zM10.5 16.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCircleHelpFilled;
