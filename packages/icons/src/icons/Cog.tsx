import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgCog(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.353 4.081c.674-2.775 4.62-2.775 5.294 0a.724.724 0 001.08.448c2.44-1.486 5.23 1.305 3.744 3.744a.724.724 0 00.448 1.08c2.775.674 2.775 4.62 0 5.294a.724.724 0 00-.448 1.08c1.486 2.44-1.305 5.23-3.744 3.744a.724.724 0 00-1.08.448c-.674 2.775-4.62 2.775-5.294 0a.724.724 0 00-1.08-.448c-2.44 1.486-5.23-1.305-3.744-3.744a.724.724 0 00-.448-1.08c-2.775-.674-2.775-4.62 0-5.294a.724.724 0 00.448-1.08c-1.486-2.44 1.305-5.23 3.744-3.744a.724.724 0 001.08-.448zm3.35.472c-.178-.737-1.227-.737-1.407 0a2.724 2.724 0 01-4.064 1.684c-.648-.395-1.39.347-.995.995.96 1.575.109 3.63-1.684 4.064-.737.18-.737 1.229 0 1.408a2.724 2.724 0 011.684 4.064c-.395.648.347 1.39.995.995a2.724 2.724 0 014.064 1.684c.18.737 1.229.737 1.408 0a2.724 2.724 0 014.064-1.684c.648.395 1.39-.347.995-.995a2.724 2.724 0 011.684-4.064c.737-.18.737-1.229 0-1.408a2.724 2.724 0 01-1.684-4.064c.395-.648-.347-1.39-.995-.995-1.575.96-3.63.109-4.064-1.684zM12 10a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgCog;
