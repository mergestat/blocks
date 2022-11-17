export type IconProps = JSX.IntrinsicAttributes & {
  as?: string | React.ReactSVGElement;
  width?: string | number;
  height?: string | number;
  className?: string;
} & React.SVGAttributes<SVGAElement> &
  React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode };

export type IconPropsT = {
  as?: React.ReactSVGElement | string;
  width?: string | number;
  height?: string | number;
  className?: string;
} & React.SVGAttributes<SVGAElement> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
