export default function ActionButton(
  {
    title = "Button",
    variant = "fill" || "outline" || "ghost",
    onClick = () => {},
    color,
    size,
    children,
    className,
  },
  ...args
) {
  const colors = {
      primary: "blue-400",
      secondary: "gray-400",
      success: "green-400",
      danger: "red-400",
      warning: "yellow-400",
      white: "white",
      black: "black",
    },
    btnColor = colors[color] ? `bg-${colors[color]}` : `bg-[${color}]`,
    variants = {
      fill: `bg-[${btnColor}] hover:bg-opacity-60 border-0`,
      outline: `bg-transparent border-2 border-[${btnColor}] hover:border-[${btnColor}]`,
      ghost: "bg-transparent border-0 text-blue-400",
    },
    btnVariant = variants[variant],
    sizes = {
      xs: "btn-xs",
      sm: "btn-sm",
      lg: "btn-lg",
    },
    // Setting the size of the button
    btnSize = sizes[size];

  // Condensing inline styles into a single variable
  const btnStyles = `btn ${btnVariant} ${btnSize} ${btnColor}`;
  console.log(className + " " + btnStyles);
  return (
    <div
      className={`${btnStyles}, ${className}`}
      onClick={onClick}
      variant={variant}
      color={color}
      size={size}
      title={title}
    >
      <span className="font-semibold text-xs">{title}</span>
    </div>
  );
}
