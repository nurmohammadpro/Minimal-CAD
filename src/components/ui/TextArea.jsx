const TextArea = ({
  label,
  type,
  onChange,
  placeholder,
  variant = "regular",
  helpText,
}) => {
  const variants = {
    regular:
      "p-2 pl-2 border border-[var(--color-light-100)] hover:border-[var(--color-light-200)] focus:border-[var(--color-light-400)] focus:outline-none",
    error:
      "p-2 pl-2 border border-red-300 hover:border-red-400 focus:border-red-600 focus:outline-none",
  };

  const labelColor = variant === "error" ? "text-red-600" : "text-light-600";
  const helpTextcolor = variant === "error" ? "text-red-600" : "text-light-600";

  return (
    <div className="relative">
      <label
        className={`absolute -top-2 left-6 px-2 text-xs bg-white ${labelColor}`}
      >
        {label}
      </label>
      <textarea
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={`p-2 rounded-md text-light-600 ${variants[variant]}`}
      />
      <p className={` mt-2  text-xs ${helpTextcolor}`}>{helpText}</p>
    </div>
  );
};

export default TextArea;
