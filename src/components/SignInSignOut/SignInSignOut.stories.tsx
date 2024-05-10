import type { Meta, StoryObj } from '@storybook/react';

import { SignInSignOut} from '../SignInSignOut/SignInSignOut';

const meta: Meta<typeof SignInSignOut> = {
  component: SignInSignOut,
};

export default meta;
type Story = StoryObj<typeof SignInSignOut>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <SignInSignOut />,
};