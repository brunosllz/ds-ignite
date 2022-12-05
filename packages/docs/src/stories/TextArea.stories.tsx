import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@bl-ui/react/'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text sizes="sm">Observations</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations',
  },
}

export const Disable: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
