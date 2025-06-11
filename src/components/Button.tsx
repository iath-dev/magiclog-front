import React, { forwardRef, type ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import { Spinner } from './Spinner';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';
type ButtonShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  shadow?: ButtonShadow;
  fullWidth?: boolean;
  outline?: boolean;
  pill?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-300',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-300',
  success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-300',
  danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-300',
  warning: 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-300',
  info: 'bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-300',
  light: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300',
  dark: 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-300',
  link: 'bg-transparent hover:bg-transparent text-blue-600 hover:text-blue-700 underline focus:ring-blue-300',
};

const outlineVariantClasses: Record<ButtonVariant, string> = {
  primary: 'text-blue-600 border-blue-600 hover:bg-blue-50',
  secondary: 'text-gray-900 border-gray-300 hover:bg-gray-50',
  success: 'text-green-600 border-green-600 hover:bg-green-50',
  danger: 'text-red-600 border-red-600 hover:bg-red-50',
  warning: 'text-yellow-500 border-yellow-500 hover:bg-yellow-50',
  info: 'text-cyan-500 border-cyan-500 hover:bg-cyan-50',
  light: 'text-gray-600 border-gray-200 hover:bg-gray-50',
  dark: 'text-gray-800 border-gray-800 hover:bg-gray-50',
  link: 'text-blue-600 hover:text-blue-700 underline',
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
  xl: 'px-6 py-3 text-base',
};

const roundedClasses: Record<ButtonRounded, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

const shadowClasses: Record<ButtonShadow, string> = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow',
  lg: 'shadow-md',
  xl: 'shadow-lg',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      rounded = 'md',
      shadow = 'none',
      fullWidth = false,
      outline = false,
      pill = false,
      loading = false,
      icon,
      iconPosition = 'left',
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonClasses = classNames(
      'inline-flex items-center justify-center font-medium text-center border focus:ring-4 focus:outline-none focus:ring-opacity-20 transition-all duration-200 ease-in-out',
      {
        'w-full': fullWidth,
        'rounded-full': pill,
        'opacity-70 cursor-not-allowed': disabled || loading,
        [roundedClasses[rounded]]: !pill,
        [shadowClasses[shadow]]: true,
        [outline ? outlineVariantClasses[variant] : variantClasses[variant]]: true,
      },
      sizeClasses[size],
      className
    );

    const iconClasses = classNames({
      'mr-2': iconPosition === 'left',
      'ml-2': iconPosition === 'right',
      'animate-spin': loading
    });

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className={iconClasses}>
            {loading ? <Spinner /> : icon}
          </span>
        )}
        
        {children}
        
        {icon && iconPosition === 'right' && (
          <span className={iconClasses}>
            {loading ? <Spinner /> : icon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;