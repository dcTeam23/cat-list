import type { Meta, StoryObj } from '@storybook/react';

import { MenuProfile } from './MenuProfile';

const meta: Meta<typeof MenuProfile> = {
  component: MenuProfile,
};

export default meta;
type Story = StoryObj<typeof MenuProfile>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <MenuProfile />,
};

export const WithLabel: Story = {
  render: () => <MenuProfile  />,
};