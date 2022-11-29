import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@bl-ui/react/'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing box element</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
