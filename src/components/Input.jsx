const Input = ({
  label,
  value,
  variant = "default",
  state = "default",
  adornmentStart,
  adornmentEnd,
  helpText,
  size = "medium",
  onChange,
  disabled,
  ...props
}) => {
  const variantClasses = {
    default:
      "border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
  };

  const stateClasses = {
    default: "",
    hovered: "border-blue-500",
    incorrect: "border-red-500",
    disabled: "bg-gray-100 cursor-not-allowed",
  };

  const sizeClasses = {
    medium: "px-4 py-2 text-sm",
    small: "px-3 py-1 text-xs",
  };

  const inputClasses = `
        block w-full rounded-md shadow-sm
        ${variantClasses[variant]}
        ${stateClasses[state]}
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `;

  const helpTextClasses = `
        mt-1 text-xs text-gray-500
        ${state === "incorrect" ? "text-red-500" : ""}
      `;

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {adornmentStart && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            {adornmentStart}
          </div>
        )}
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={`${inputClasses} ${adornmentStart ? "pl-10" : ""} ${
            adornmentEnd ? "pr-10" : ""
          }`}
          disabled={disabled}
          {...props}
        />
        {adornmentEnd && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
            {adornmentEnd}
          </div>
        )}
      </div>
      {helpText && <p className={helpTextClasses}>{helpText}</p>}
    </div>
  );
};

export default Input;
