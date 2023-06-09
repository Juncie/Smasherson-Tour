export default function ActionButton(
  {
    label = "Button",
    variant = "fill" || "outline" || "ghost",
    onClick = () => {},
    color,
    size,
    children,
    className,
  },
  ...args
) {
  // Variables

  // Setting the color of the button
  const colors = {
    primary: "blue-400",
    secondary: "gray-400",
    success: "green-400",
    danger: "red-400",
    warning: "yellow-400",
    white: "white",
    black: "black",
  };
  const btnColor = colors[color] ? `bg-${colors[color]}` : `bg-[${color}]`;

  // Setting the variant of the button
  const variants = {
      fill: `bg-[${btnColor}] hover:bg-opacity-60 border-0`,
      outline: `bg-transparent border-2 border-[${btnColor}] hover:border-[${btnColor}]`,
      ghost: "bg-transparent border-0 text-blue-400",
    },
    btnVariant = variants[variant];

  // Setting the size of the button
  const sizes = {
      xs: "btn-xs",
      sm: "btn-sm",
      lg: "btn-lg",
    },
    btnSize = sizes[size];

  // Condensing inline styles into a single variable
  const btnStyles = `btn ${btnVariant} ${btnSize} ${btnColor}`;

  return (
    <div
      className={`${btnStyles}, ${className}`}
      onClick={onClick}
      variant={variant}
      color={color}
      size={size}
      label={label}
    >
      <span className="font-semibold text-xs">{label}</span>
    </div>
  );
}
