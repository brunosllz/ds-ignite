import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@bl-ui/react/'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi placeat vel dolores neque veniam ea nesciunt culpa. Enim consequuntur at facilis iure doloribus asperiores animi corrupti deleniti beatae minima!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
