// components/ui/Select.tsx
import React, { type SelectHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
  placeholder?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError = false, options, ...props }, ref) => {
    const classes = classNames(
      'block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none',
      {
        'border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50':
          hasError,
        'border-gray-300 focus:ring-blue-500 focus:border-blue-500': !hasError,
      },
      className
    );

    return (
      <select ref={ref} className={classes} {...props}>
        {props.placeholder && (
          <option value="" disabled hidden>
            {props.placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = 'Select';

export default Select;
