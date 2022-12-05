import React from 'react';

export type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type EnumSize = 'small';

export type EnumSkin =
  | 'primary'
  | 'secondary'
  | 'danger-primary'
  | 'danger'
  | 'borderless'
  | 'borderless-muted'
  | 'borderless-i';

export interface ButtonProps {
  href?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  skin?: EnumSkin;
  isBlock?: boolean;
  isIconOnly?: boolean;
  size?: EnumSize;
  label?: string;
  isActive?: boolean;
  tooltip?: string;
  tooltipOffset?: [number, number];
  tooltipPlacement?: 'top' | 'bottom' | 'right' | 'left' | 'auto';
}
