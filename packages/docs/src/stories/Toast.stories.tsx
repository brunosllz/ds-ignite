import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@bl-ui/react/'
import { useEffect, useRef, useState } from 'react'

function DemoToast({ ...props }: ToastProps) {
  const [isOpen, setIsOpen] = useState(false)

  const timeRef = useRef(0)

  function handleOpenToast() {
    setIsOpen(false)
    window.clearTimeout(timeRef.current)
    timeRef.current = window.setTimeout(() => setIsOpen(true), 30)
  }

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])

  return (
    <Box>
      <Button onClick={handleOpenToast}>Agendar</Button>
      <Toast
        open={isOpen}
        onOpenChange={setIsOpen}
        description="Quarta-feira, 23 de Outubro às 16h"
        {...props}
      />
    </Box>
  )
}

export default {
  title: 'Tools/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
