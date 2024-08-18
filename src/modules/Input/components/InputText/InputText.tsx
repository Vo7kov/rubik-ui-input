import React from 'react';
import './InputText.css';

export type InputTextProps = {
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  size?: 'Extra small' | 'Medium' | 'Large' | 'Extra large';
  placeholder?: string;
  quiet?: boolean;
  disabled?: boolean;
  error?: boolean;
  iconBefore?: string;
  iconBeforeError?: string;
  iconBeforeDisabled?: string;
  iconBeforeAlt?: string;
  iconAfterFirst?: string;
  iconAfterFirstError?: string;
  iconAfterFirstDisabled?: string;
  iconAfterFirstAlt?: string;
  iconAfterSecond?: string;
  iconAfterSecondAlt?: string;
};

export const InputText: React.FC<InputTextProps> = ({
  id,
  value,
  onChange,
  size,
  placeholder,
  quiet,
  disabled,
  error,
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
}) => {
  return (
    <div className="input__wrapper">
      {iconBefore && iconBeforeError && iconBeforeDisabled && iconBeforeAlt && (
        <img
          src={
            error ? iconBeforeError : disabled ? iconBeforeDisabled : iconBefore
          }
          alt={iconBeforeAlt}
          className="icon input__wrapper-icon-before"
        />
      )}

      <input
        id={id}
        value={value}
        onChange={onChange}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        className={`
          input__wrapper-field
          ${size === 'Extra large' ? 'input__wrapper-field--extra-large' : ''}
          ${size === 'Large' ? 'input__wrapper-field--large' : ''}
          ${size === 'Medium' ? 'input__wrapper-field--medium' : ''}
          ${size === 'Extra small' ? 'input__wrapper-field--extra-small' : ''}

          ${iconBefore && iconBeforeError && iconBeforeDisabled && iconBeforeAlt ? 'input__wrapper-field--with-icon-before' : ''}
          ${iconAfterFirst && iconAfterFirstError && iconAfterFirstDisabled && iconAfterFirstAlt ? 'input__wrapper-field--with-icon-after-first' : ''}
          ${iconAfterSecond && iconAfterSecondAlt ? 'input__wrapper-field--with-icon-after-second' : ''}

          ${quiet ? 'input__wrapper-field--quiet' : ''}
          ${error ? 'input__wrapper-field--error' : ''}
        `}
      />

      {iconAfterFirst &&
        iconAfterFirstError &&
        iconAfterFirstDisabled &&
        iconAfterFirstAlt && (
          <img
            src={
              error
                ? iconAfterFirstError
                : disabled
                  ? iconAfterFirstDisabled
                  : iconAfterFirst
            }
            alt={iconAfterFirstAlt}
            className={`
            icon
            input__wrapper-icon-after-first
            ${
              !iconAfterSecond && !iconAfterSecondAlt
                ? 'input__wrapper-icon-after-first--without-second-icon'
                : ''
            }
          `}
          />
        )}

      {iconAfterSecond && iconAfterSecondAlt && (
        <img
          src={iconAfterSecond}
          alt={iconAfterSecondAlt}
          className="icon input__wrapper-icon-after-second"
        />
      )}
    </div>
  );
};
