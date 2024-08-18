import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InputGroup } from '../modules/Input';

import search from '../assets/input/search/search.svg';
import searchDisabled from '../assets/input/search/searchDisabled.svg';
import searchError from '../assets/input/search/searchError.svg';

import info from '../assets/input/info/info.svg';
import infoDisabled from '../assets/input/info/infoDisabled.svg';
import infoError from '../assets/input/info/infoError.svg';

import shortcut from '../assets/input/shortcut.svg';

const meta = {
  title: 'Input',
  component: InputGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Some kind of features such as `tootlipText` and padding for right icons don't work properly in this demo, but in usage everything is fine */
export const Input: Story = {
  args: {
    id: 'id',
    label: 'Test',

    value: '',
    onChange: () => {},

    iconBefore: search,
    iconBeforeDisabled: searchDisabled,
    iconBeforeError: searchError,
    iconBeforeAlt: 'search',

    iconAfterFirst: info,
    iconAfterFirstDisabled: infoDisabled,
    iconAfterFirstError: infoError,
    iconAfterFirstAlt: 'info',

    iconAfterSecond: shortcut,
    iconAfterSecondAlt: 'shortcut',
  },
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <InputGroup
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};
