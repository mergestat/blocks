import { arrow, flip, offset as offsetFloating, Placement, shift, useFloating, useFocus, useHover, useInteractions } from '@floating-ui/react';
import { useRef, useState } from 'react';

const useTooltip = (placement: Placement | undefined, offset: [number, number], delay: number) => {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)

  const {
    context, x, y, reference, floating, strategy, placement: floatingPlacement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }
  } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offsetFloating({ mainAxis: offset[1], crossAxis: offset[0] }),
      flip(),
      shift(),
      arrow({ element: arrowRef })
    ],
  })

  const { getFloatingProps } = useInteractions([
    useHover(context, { delay: { open: delay, close: 0 } }),
    useFocus(context)
  ]);

  const staticSide = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[floatingPlacement.split("-")[0]] as string

  return {
    x, y, strategy, arrowX, arrowY, staticSide, isOpen, arrowRef,
    reference, floating, getFloatingProps
  }
}

export default useTooltip
