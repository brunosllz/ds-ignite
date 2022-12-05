import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Provider> {
  as?: ElementType
  content: string | ReactNode
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent>
            <TooltipArrow />
            {content}
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
