import React from 'react';
import './InputLabel.css';
import { Tooltip } from '../../../../components/Tooltip/Tooltip';

export type InputLabelProps = {
  label: string;
  htmlFor: string;
  required?: 'optional' | 'default' | 'asterisk';
  tooltipText?: string;
};

export const InputLabel: React.FC<InputLabelProps> = ({
  label,
  htmlFor,
  required,
  tooltipText,
}) => {
  return (
    <div className="input__label-wrapper">
      <label className="input__label" htmlFor={htmlFor}>
        {label}

        {required === 'optional' && (
          <span className="input__label-required--optional"> (optional)</span>
        )}

        {required === 'default' && (
          <span className="input__label-required--default"> (required)</span>
        )}

        {required === 'asterisk' && (
          <span className="input__label-required--asterisk"> *</span>
        )}
      </label>

      {tooltipText && <Tooltip tooltipText={tooltipText} />}
    </div>
  );
};
