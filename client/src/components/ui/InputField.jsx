import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InputField = ({
  label,
  type,
  onChange,
  placeholder,
  value,
  variant = "regular",
  helpText,
}) => {
  const variants = {
    regular:
      "p-2 pl-2 pr-8 border border-[var(--color-light-100)] hover:border-[var(--color-light-200)] focus:border-[var(--color-light-400)] focus:outline-none",
    error:
      "p-2 pl-2 pr-8 border border-red-300 hover:border-red-400 focus:border-red-600 focus:outline-none",
  };

  const labelColor = variant === "error" ? "text-red-600" : "text-light-600";
  const helpTextcolor = variant === "error" ? "text-red-600" : "text-light-600";

  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative">
      <label
        className={`absolute z-10 -top-2 left-6 px-2 text-xs bg-white ${labelColor}`}
      >
        {label === "Confirm Password"
          ? "Confirm Password"
          : type === "password"
          ? showPass
            ? "Password"
            : "Password"
          : label}
      </label>
      <div className="relative w-full">
        <input
          type={type === "password" ? (showPass ? "text" : "password") : type}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className={`w-full p-2 rounded-md text-light-600 ${variants[variant]}`}
        />

        {type === "password" && (
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        )}
      </div>

      <p className={` mt-2  text-xs ${helpTextcolor}`}>{helpText}</p>
    </div>
  );
};

export default InputField;
