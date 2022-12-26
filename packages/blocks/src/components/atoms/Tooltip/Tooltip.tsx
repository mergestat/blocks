import cx from 'classnames';
import React from 'react';
import { TooltipBox } from './TooltipBox';
import useTooltip from './useTooltip';

type BaseProps = {
  children?: React.ReactNode | string
  className?: string
  placement?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
  content: React.ReactNode | string
  offset?: [number, number] // default [skidding, distance]
  delay?: number,
}

export const Tooltip = ({
  children,
  className,
  placement = 'top',
  content,
  offset = [0, 20],
  delay = 100,
}: BaseProps) => {
  const _classname = className ? { [className]: !!className } : {}

  const tooltipBoxProps = useTooltip(placement, offset, delay)

  return (
    <>
      <span className={cx({ ..._classname })} ref={tooltipBoxProps.reference}>
        {children}
      </span>
      {tooltipBoxProps.isOpen && <TooltipBox content={content} {...tooltipBoxProps} />}
    </>
  )
}
