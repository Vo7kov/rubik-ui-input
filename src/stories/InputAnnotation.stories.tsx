import type { Meta, StoryObj } from '@storybook/react';

import { InputAnnotation } from '../modules/Input/components/InputAnnotation/InputAnnotation';

const meta = {
  title: 'InputGroup/InputAnnotation',
  component: InputAnnotation,
  tags: ['autodocs'],
} satisfies Meta<typeof InputAnnotation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The input helper text */
export const Base: Story = {
  args: {
    helperText: 'This is helper text',
  },
};
