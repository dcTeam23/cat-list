import type { Meta, StoryObj } from '@storybook/react';

import { EditProfile } from './EditProfile';

const meta: Meta<typeof EditProfile> = {
  component: EditProfile,
};

export default meta;
type Story = StoryObj<typeof EditProfile>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <EditProfile />,
};