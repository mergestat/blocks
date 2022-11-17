import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCircleHelp(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
        fill="currentColor"
      />
      <path
        d="M12 14a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM10.5 16.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill="currentColor"
      />
      <path
        d="M12.39 7.811c-.957-.045-1.76.49-1.904 1.353a1 1 0 01-1.972-.328c.356-2.136 2.303-3.102 3.971-3.022.854.04 1.733.347 2.409.979C15.587 7.44 16 8.368 16 9.5c0 1.291-.508 2.249-1.383 2.832-.803.535-1.788.668-2.617.668a1 1 0 110-2c.67 0 1.186-.117 1.508-.332.25-.167.492-.46.492-1.168 0-.618-.212-1.003-.472-1.246-.277-.259-.68-.42-1.138-.443z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCircleHelp;
