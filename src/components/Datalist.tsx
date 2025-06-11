// components/ui/DataList.tsx
import React, { type InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

interface DataListProps extends InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  hasError?: boolean;
}

const DataList = forwardRef<HTMLInputElement, DataListProps>(
  ({ className, hasError = false, options, id, ...props }, ref) => {
    const classes = classNames(
      'block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none',
      {
        'border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50': hasError,
        'border-gray-300 focus:ring-blue-500 focus:border-blue-500': !hasError
      },
      className
    );

    return (
      <>
        <input
          ref={ref}
          list={`${id}-list`}
          className={classes}
          {...props}
        />
        <datalist id={`${id}-list`}>
          {options.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
      </>
    );
  }
);

DataList.displayName = 'DataList';

export default DataList;