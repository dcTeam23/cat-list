import type { Meta, StoryObj } from '@storybook/react';

import { MyButton } from './MyButton';

const meta: Meta<typeof MyButton> = {
  component: MyButton,
};

export default meta;
type Story = StoryObj<typeof MyButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <MyButton />,
};

export const WithLabel: Story = {
  render: () => <MyButton  label="outro texto aqui!" />,
};