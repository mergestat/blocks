import cx from 'classnames';
import React from 'react';

type VariantEnum = 'error' | 'success' | 'default';

type HelperTextProps = {
  variant?: VariantEnum;
}

export const HelpText: React.FC<
  HelperTextProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
> = ({ className, children, variant = 'default', ...props }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <p
      {...props}
      className={cx(`t-help-text t-help-text-${variant}`, { ..._classname })}
    >
      {children}
    </p>
  );
};
