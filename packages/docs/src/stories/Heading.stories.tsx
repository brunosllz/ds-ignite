import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@bl-ui/react/'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi placeat vel dolores neque veniam ea nesciunt culpa. Enim consequuntur at facilis iure doloribus asperiores animi corrupti deleniti beatae minima!',
    sizes: 'md',
  },
  argTypes: {
    sizes: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl', '7xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
