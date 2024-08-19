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
  title: 'InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is main component which contains all other components.
 * Also, according to task I've decided to use standart css because it's native and doesn't require additional packages,
 * which is very useful,
 * because it requires less space if you want to publish it anywhere
 */
export const Base: Story = {
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

    tooltipText: 'This is tooltip',
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
