// components/ui/Input.tsx
import { forwardRef, type InputHTMLAttributes } from 'react';
import classNames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError = false, ...props }, ref) => {
    const classes = classNames(
      'block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none',
      {
        'border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50':
          hasError,
        'border-gray-300 focus:ring-blue-500 focus:border-blue-500': !hasError,
      },
      className
    );

    return <input ref={ref} className={classes} {...props} />;
  }
);

Input.displayName = 'Input';

export default Input;
