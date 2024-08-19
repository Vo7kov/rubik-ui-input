import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '../components/Tooltip';

const meta = {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The tooltip component. I've decided to make it separate component, because it could be reusable */
export const Base: Story = {
  args: {
    tooltipText: 'This is tooltip text',
  },
};
