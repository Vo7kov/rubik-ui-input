import React from 'react';

import './Tooltip.css';

type Props = {
  tooltipText: string;
};

export const Tooltip: React.FC<Props> = ({ tooltipText }) => {
  return <div className="tooltip" data-tooltip={tooltipText}></div>;
};
