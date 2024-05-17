import type { Meta, StoryObj } from '@storybook/react';

import { PhotoExibition } from './PhotoExibition';

const meta: Meta<typeof PhotoExibition> = {
  component: PhotoExibition,
};

export default meta;
type Story = StoryObj<typeof PhotoExibition>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <PhotoExibition />,
};