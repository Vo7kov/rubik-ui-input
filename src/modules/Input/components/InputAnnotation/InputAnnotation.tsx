import React from 'react';
import './InputAnnotation.css';

export type InputAnnotationProps = {
  helperText?: string;
  error?: boolean;
};

export const InputAnnotation: React.FC<InputAnnotationProps> = ({ helperText, error }) => {
  return (
    <small
      className={`${
        error
          ? 'input__helper-text input__helper-text--error'
          : 'input__helper-text'
      }`}
    >
      {helperText}
    </small>
  );
};
