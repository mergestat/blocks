import { Strategy } from '@floating-ui/react';
import React from 'react';

type TooltipBoxProps = {
  content: React.ReactNode | string
  x: number | null
  y: number | null
  arrowX: number | undefined
  arrowY: number | undefined
  strategy: Strategy
  arrowRef: React.MutableRefObject<null>
  staticSide: string
  floating: (node: HTMLElement | null) => void
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>
}

export const TooltipBox = ({
  content,
  x,
  y,
  arrowX,
  arrowY,
  strategy,
  arrowRef,
  staticSide,
  floating,
  getFloatingProps
}: TooltipBoxProps) => {
  return (
    <div
      {...getFloatingProps({
        className: 'tooltip',
        ref: floating,
        style: {
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
          width: 'max-content',
          zIndex: 10
        }
      })}
    >
      {content}
      <div
        ref={arrowRef}
        className='arrow'
        style={{
          left: arrowX != null ? `${arrowX}px` : '',
          top: arrowY != null ? `${arrowY}px` : '',
          [staticSide]: '-4px',
        }}
      ></div>
    </div>
  )
}
