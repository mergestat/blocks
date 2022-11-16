import cx from 'classnames';
import React from 'react';
import '../../styles/main.css';
import { IconPropsT } from '../utils/types';

const fallbackIcon = {
  path: (
    <g stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        fill="none"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  ),
  viewBox: '0 0 24 24',
};

export const Icon: React.FC<
  IconPropsT &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ as: element, className, ...props }) => {
  const {
    viewBox,
    color = 'currentColor',
    focusable = false,
    children,
    ...rest
  } = props;

  const _className = className ? cx('mergestat-icon', { [className]: !!className }) : 'mergestat-icon'
  const _viewBox = viewBox ?? fallbackIcon.viewBox;

  const styles: any = {
    lineHeight: '1em',
    flexShrink: 0,
    color,
  };

  const shared: any = {
    focusable,
    style: styles,
  };

  /**
   * If you're using an icon library like `react-icons`.
   * Note: anyone passing the `as` prop, should manage the `viewBox` from the external component
   */
  if (element) {
    if (typeof element === 'string') {
      return (
        <div className={_className}>
          <img src={element} {...shared} {...rest} />
        </div>
      );
    }

    return (
      <div className={_className}>
        <svg as={element} {...shared} {...rest} />
      </div>
    );
  }

  const _path = (children ?? fallbackIcon.path) as React.ReactNode;

  return (
    <div className={_className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={_viewBox}
        {...shared}
        {...rest}
      >
        {_path}
      </svg>
    </div>
  );
};
