import type { Meta, StoryObj } from '@storybook/react';

import { CatForm } from './catform.tsx';

const meta: Meta<typeof CatForm> = {
  component: CatForm,
};

export default meta;
type Story = StoryObj<typeof CatForm>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <CatForm/>,
};
