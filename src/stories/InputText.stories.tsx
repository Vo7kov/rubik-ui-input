import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from '../modules/Input/components/InputText/InputText';

const meta = {
  title: 'InputGroup/InputText',
  component: InputText,
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The input field */
export const Base: Story = {
  args: {
    id: 'id',

    value: '',
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <InputText
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};
