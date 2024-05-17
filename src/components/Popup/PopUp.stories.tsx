import type { Meta, StoryObj } from '@storybook/react';
import { PopUp, PopUpWithToaster } from './PopUp';

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
  render: () => <PopUpWithToaster />,
};

export const Secondary: Story = {
  render: () => <PopUpWithToaster />,
};