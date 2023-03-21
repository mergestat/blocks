import React from 'react';

export type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type EnumSize = 'small';

export type EnumSkin =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger-primary'
  | 'danger'
  | 'borderless'
  | 'borderless-muted'
  | 'borderless-i'

export interface ButtonProps {
  href?: string,
  component?: React.ElementType
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  skin?: EnumSkin
  isBlock?: boolean
  isBlockBetween?: boolean
  isIconOnly?: boolean
  size?: EnumSize
  label?: string
  isActive?: boolean
  tooltip?: string
  tooltipOffset?: [number, number]
  tooltipPlacement?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
  tooltipDelay?: number
}
