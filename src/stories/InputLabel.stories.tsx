import type { Meta, StoryObj } from '@storybook/react';

import { InputLabel } from '../modules/Input/components/InputLabel/InputLabel';

const meta = {
  title: 'InputGroup/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The input label */
export const Base: Story = {
  args: {
    label: 'Label text',
    htmlFor: 'id',
  },
};
