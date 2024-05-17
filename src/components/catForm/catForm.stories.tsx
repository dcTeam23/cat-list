import type { Meta, StoryObj } from '@storybook/react';

import { CatForm, transformProps } from './catForm.tsx';

const meta: Meta<transformProps> = {
  component: CatForm,
  argTypes: {
    add: {description: "Edit or Add",
    control: "boolean"}
  },
  render: (args: transformProps) => <CatForm {...args} />,
}

export default meta;
type Story = StoryObj<typeof CatForm>;



/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <CatForm add={args.add}/>,
};
