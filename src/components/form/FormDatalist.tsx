// components/forms/FormDataList.tsx
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import DataList from './Datalist';

interface FormDataListProps extends React.ComponentProps<typeof DataList> {
  label?: string;
  helperText?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  errorClassName?: string;
}

const FormDataList = forwardRef<HTMLInputElement, FormDataListProps>(
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

        <DataList
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

FormDataList.displayName = 'FormDataList';

export default FormDataList;
