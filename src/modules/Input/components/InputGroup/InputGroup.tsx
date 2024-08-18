import React from 'react';

import { InputText, type InputTextProps } from '../InputText/InputText';
import { InputLabel, type InputLabelProps } from '../InputLabel/InputLabel';
import {
  InputAnnotation,
  type InputAnnotationProps,
} from '../InputAnnotation/InputAnnotation';

import './InputGroup.css';

type InputGroupProps = {
  position?: 'vertical' | 'horizontal';
  className?: string;
};

type Props = InputGroupProps &
  InputTextProps &
  InputLabelProps &
  InputAnnotationProps;

export const InputGroup: React.FC<Props> = ({
  id,
  label,
  value,
  onChange,
  iconBefore,
  iconBeforeError,
  iconBeforeDisabled,
  iconBeforeAlt,
  iconAfterFirst,
  iconAfterFirstError,
  iconAfterFirstDisabled,
  iconAfterFirstAlt,
  iconAfterSecond,
  iconAfterSecondAlt,
  position = 'vertical',
  placeholder,
  helperText,
  tooltipText,
  size = 'Medium',
  required,
  quiet = false,
  disabled = false,
  error = false,
  className = '',
}) => {
  return (
    <div
      className={`
        input
        ${position === 'vertical' ? 'input--vertical' : 'input--horizontal'}
        ${className}
      `}
    >
      <InputLabel
        label={label}
        htmlFor={id}
        required={required}
        tooltipText={tooltipText}
      />

      <InputText
        id={id}
        value={value}
        onChange={onChange}
        size={size}
        placeholder={placeholder}
        quiet={quiet}
        disabled={disabled}
        error={error}
        iconBefore={iconBefore}
        iconBeforeError={iconBeforeError}
        iconBeforeDisabled={iconBeforeDisabled}
        iconBeforeAlt={iconBeforeAlt}
        iconAfterFirst={iconAfterFirst}
        iconAfterFirstError={iconAfterFirstError}
        iconAfterFirstDisabled={iconAfterFirstDisabled}
        iconAfterFirstAlt={iconAfterFirstAlt}
        iconAfterSecond={iconAfterSecond}
        iconAfterSecondAlt={iconAfterSecondAlt}
      />

      {helperText && <InputAnnotation helperText={helperText} error={error} />}
    </div>
  );
};
