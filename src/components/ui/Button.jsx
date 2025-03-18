const Button = ({ title, onClick, variant = "light" }) => {
  const variants = {
    light:
      "bg-[var(--color-light-50)] hover:bg-[var(--color-light-100)] text-[var(--color-dark-800)] border border-[var(--color-dark-800)]   ",
    dark: "bg-[var(--color-dark-800)] hover:bg-[var(--color-dark-950)] text-[var(--color-light-50)] border border-[var(--color-dark-800)] hover:border-[var(--color-dark-950)]",
  };

  return (
    <div>
      <button
        className={`px-4 py-2 rounded-md text-medium ${variants[variant]}`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
