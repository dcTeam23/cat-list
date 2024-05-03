import type { Meta,StoryObj } from '@storybook/react';

import  AddButton  from './Add-cat';

const meta: Meta<typeof AddButton> = {
  component: AddButton,
};

export default meta;
type Story = StoryObj<typeof AddButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <AddButton />,
};

export const WithLabel: Story = {
  render: () => <AddButton  label="outro texto aqui!" />,
};