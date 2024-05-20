import type { Meta, StoryObj } from '@storybook/react';

import { CardItem } from './card-item';

const meta: Meta<typeof CardItem> = {
  component: CardItem,
};

export default meta;
type Story = StoryObj<typeof CardItem>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <CardItem />,
};