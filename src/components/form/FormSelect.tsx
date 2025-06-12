// components/forms/FormSelect.tsx
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import Select from '../ui/Select';

interface FormSelectProps extends React.ComponentProps<typeof Select> {
  label?: string;
  helperText?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  errorClassName?: string;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
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
      options,
      ...props
    },
    ref
  ) => {
    const labelClasses = classNames(
      'block text-sm font-medium mb-1',
      {
        'text-red-600': error || hasError,
        'text-gray-700': !error && !hasError,
      },
      labelClassName
    );

    return (
      <div className={containerClassName}>
        {label && (
          <label htmlFor={props.id} className={labelClasses}>
            {label}
          </label>
        )}

        <Select
          ref={ref}
          hasError={!!error || hasError}
          className={className}
          options={options}
          {...props}
        />

        {helperText && !error && (
          <p className={classNames('mt-1 text-sm text-gray-500', helperTextClassName)}>
            {helperText}
          </p>
        )}

        {error && (
          <p className={classNames('mt-1 text-sm text-red-600', errorClassName)}>{error}</p>
        )}
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';

export default FormSelect;
