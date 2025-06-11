import React, { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  errorMessage?: string;
  label?: string;
  helperText?: string;
  wrapperClass?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      error = false,
      errorMessage = "",
      label,
      helperText,
      className = "",
      wrapperClass = "",
      options,
      ...props
    },
    ref
  ) => {
    // Estilos base
    const baseClasses =
      "block w-full rounded-lg border text-sm transition-colors focus:outline-none focus:ring-1 p-2.5";

    // Estilos condicionales
    const selectClasses = [
      baseClasses,
      error
        ? "border-red-500 bg-red-50 text-red-900 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:border-red-500"
        : "border-gray-300 bg-white text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
      className,
    ].join(" ");

    const labelClasses = [
      "block mb-2 text-sm font-medium",
      error
        ? "text-red-700 dark:text-red-500"
        : "text-gray-700 dark:text-gray-200",
    ].join(" ");

    return (
      <div className={`flex flex-col gap-1 ${wrapperClass}`}>
        {label && (
          <label htmlFor={props.id || props.name} className={labelClasses}>
            {label}
          </label>
        )}

        <select ref={ref} className={selectClasses} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && errorMessage && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-500">
            {errorMessage}
          </p>
        )}

        {!error && helperText && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
