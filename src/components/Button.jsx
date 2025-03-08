const Button = ({
  children,
  color = "default",
  state = "enabled",
  iconStart,
  iconEnd,
  size = "medium",
  onClick,
  title,
  disabled,
  ...props
}) => {
  const colorClasses = {
    default: "bg-gray-800 hover:bg-gray-700 text-white",
    primary: "bg-blue-600 hover:bg-blue-500 text-white",
    info: "bg-cyan-500 hover:bg-cyan-400 text-white",
    success: "bg-green-600 hover:bg-green-500 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-400 text-gray-800",
    error: "bg-red-600 hover:bg-red-500 text-white",
  };

  const stateClasses = {
    enabled: "",
    hover: "", // Hover styles are included in colorClasses
    disabled: "opacity-50 cursor-not-allowed",
  };

  const sizeClasses = {
    large: "px-6 py-3 text-lg",
    medium: "px-4 py-2 text-base",
    small: "px-3 py-1 text-sm",
  };

  const buttonClasses = `
        inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${colorClasses[color]}
        ${stateClasses[state]}
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `;

  return (
    <button
      className={buttonClasses}
      onClick={disabled ? null : onClick}
      disabled={disabled}
      {...props}
    >
      {title}
      {iconStart && <span className="mr-2">{iconStart}</span>}
      {children}
      {iconEnd && <span className="ml-2">{iconEnd}</span>}
    </button>
  );
};

export default Button;
