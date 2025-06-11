// components/forms/FormInput.tsx
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import Input from '../ui/Input';

interface FormInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
  helperText?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  errorClassName?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label,
      helperText,
      error,
      containerClassName,
      labelClassName,
      helperTextClassName,
      errorClassName,
      hasError,
      className,
      ...props
    },
    ref
  ) => {
    const labelClasses = classNames(
      'block text-sm font-medium mb-1',
      {
        'text-red-600': error || hasError,
        'text-gray-700': !error && !hasError
      },
      labelClassName
    );

    return (
      <div className={containerClassName}>
        {label && (
          <label htmlFor={props.name} className={labelClasses}>
            {label}
          </label>
        )}
        
        <Input
          ref={ref}
          hasError={!!error || hasError}
          className={className}
          {...props}
        />
        
        {helperText && !error && (
          <p className={classNames('mt-1 text-sm text-gray-500', helperTextClassName)}>
            {helperText}
          </p>
        )}
        
        {error && (
          <p className={classNames('mt-1 text-sm text-red-600', errorClassName)}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;