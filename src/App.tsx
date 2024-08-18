import React, { useState } from 'react';
import { InputGroup } from './modules/Input';

import search from './assets/input/search/search.svg';
import searchDisabled from './assets/input/search/searchDisabled.svg';
import searchError from './assets/input/search/searchError.svg';

import info from './assets/input/info/info.svg';
import infoDisabled from './assets/input/info/infoDisabled.svg';
import infoError from './assets/input/info/infoError.svg';

import shortcut from './assets/input/shortcut.svg';

import './App.css';

export const App: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="app">
      <InputGroup
        id="id"
        label="Test"
        placeholder="placeholder"
        iconBefore={search}
        iconBeforeError={searchError}
        iconBeforeDisabled={searchDisabled}
        iconBeforeAlt="search"
        iconAfterFirst={info}
        iconAfterFirstError={infoError}
        iconAfterFirstDisabled={infoDisabled}
        iconAfterFirstAlt="info"
        iconAfterSecond={shortcut}
        iconAfterSecondAlt="shortcut"
        tooltipText="this is tooltip"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
