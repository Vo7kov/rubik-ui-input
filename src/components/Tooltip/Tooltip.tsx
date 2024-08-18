import React from 'react';

import info from '../../assets/input/info/info.svg';

import './Tooltip.css';

type Props = {
  tooltipText: string;
};

export const Tooltip: React.FC<Props> = ({ tooltipText }) => {
  return (
    <div className="tooltip">
      <img src={info} alt="tooltip" />

      <span className="tooltip__text">{tooltipText}</span>
    </div>
  );
};
