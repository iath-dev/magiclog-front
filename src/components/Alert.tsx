import React from "react";
import { HiCheck, HiInformationCircle, HiExclamation, HiX } from "react-icons/hi";

type AlertVariant = "info" | "success" | "warning" | "danger";
type AlertSize = "sm" | "md" | "lg";
type AlertDismissible = boolean | { onDismiss: () => void };

interface AlertProps {
  variant?: AlertVariant;
  size?: AlertSize;
  title?: string;
  message: string;
  dismissible?: AlertDismissible;
  className?: string;
  icon?: React.ReactNode;
  onDismiss?: () => void;
}

const variantClasses: Record<AlertVariant, string> = {
  info: "text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
  success: "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
  warning: "text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
  danger: "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
};

const sizeClasses: Record<AlertSize, string> = {
  sm: "p-2 text-sm",
  md: "p-4 text-base",
  lg: "p-6 text-lg",
};

const iconClasses: Record<AlertVariant, string> = {
  info: "text-blue-500 dark:text-blue-600",
  success: "text-green-500 dark:text-green-600",
  warning: "text-yellow-500 dark:text-yellow-600",
  danger: "text-red-500 dark:text-red-600",
};

const defaultIcons: Record<AlertVariant, React.ReactNode> = {
  info: <HiInformationCircle className="w-5 h-5" />,
  success: <HiCheck className="w-5 h-5" />,
  warning: <HiExclamation className="w-5 h-5" />,
  danger: <HiExclamation className="w-5 h-5" />,
};

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  size = "md",
  title,
  message,
  dismissible = false,
  className = "",
  icon,
  onDismiss,
}) => {
  const handleDismiss = () => {
    if (typeof dismissible === "object" && dismissible.onDismiss) {
      dismissible.onDismiss();
    } else if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <div
      className={`flex items-center rounded-lg ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      role="alert"
    >
      <span className={`mr-3 ${iconClasses[variant]}`}>
        {icon || defaultIcons[variant]}
      </span>
      
      <div className="flex-1">
        {title && <span className="font-medium mr-2">{title}</span>}
        <span>{message}</span>
      </div>
      
      {dismissible && (
        <button
          type="button"
          className={`ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 ${variantClasses[variant]} hover:opacity-80 focus:ring-2 focus:ring-opacity-50`}
          aria-label="Cerrar"
          onClick={handleDismiss}
        >
          <span className="sr-only">Cerrar</span>
          <HiX className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};