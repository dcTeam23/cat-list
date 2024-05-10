import type { Meta, StoryObj } from '@storybook/react';

import { PopUp } from './PopUp';

const meta: Meta<typeof PopUp> = {
  component: PopUp,
};

export default meta;
type Story = StoryObj<typeof PopUp>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <PopUp />,
};

export const Secondary: Story = {
  render: () => <PopUp  label="Nome do Botão" />,
};