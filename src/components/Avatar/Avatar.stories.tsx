import { StoryObj, Meta } from '@storybook/react';
import { AvatarProps } from './Avatar';
import { Avatar } from './Avatar'


const meta: Meta<AvatarProps> = {
  component: Avatar,
  argTypes: {
    imgSrc: { description: 'Endereço (URL) da Imagem do Avatar' },
    descricao: { description: 'Descrição da Imagem do Avatar' },
    format: {
      description: 'Formato do Avatar',
      control: { type: 'radio' },
      options: ['circle','square'],
    },
  },
  render: (args: AvatarProps) => <Avatar {...args} />,
};

export default meta;
type Story = StoryObj<typeof Avatar>;


// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Circle: Story = {
  args: { 
    imgSrc: 'data:image/jpeg;base64,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', 
    descricao: 'Octocat from Github',
    format: 'circle'
  }
};
export const Square: Story = {
  args: { 
    imgSrc: 'data:image/jpeg;base64,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', 
    descricao: 'Octocat from Github',
    format: 'square'
  }
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <Avatar imgSrc={'https://avatars.githubusercontent.com/u/133207241?v=4'} descricao={''} format={args.format}/>,
};
