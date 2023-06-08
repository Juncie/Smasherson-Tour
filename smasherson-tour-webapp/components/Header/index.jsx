import ActionButton from "../Button";

export default function Header({
  title = "Header",
  titleSize = "xl" || "xxl" || "3xl" || "lg" || "md" || "sm" || "xs",
  titleWeight = "bold" || "semi-bold" || "black" || "extra-bold",
  subtitle = "",
  subTitleSize = "sm" || "md" || "lg" || "xl",
  textColor = "dark" || "light",
  btnTitle = "Book Now",
  btnSize = "" || "sm" || "lg",
  btnType = "fill" || "outline" || "ghost",
  showButton = true || false,
  direction = "row" || "col" || "column-reverse" || "row-reverse",
  ...props
}) {
  // Base, title, and subtitle styles for the header
  const base = `flex flex-${direction} justify-between items-center`,
    titleStyle = `
      font-${titleWeight}
      text-${titleSize}
      ${textColor === "dark" ? "text-gray-900" : "text-white"}`,
    subtitleStyle = `
      font-normal
      text-${subTitleSize}
      ${textColor === "dark" ? "text-gray-500" : "text-white"}
      `;

  return (
    <>
      <div
        id="Header"
        className={`${base} ${props.className ? props.className : ""}`}
      >
        <div>
          <h2 className={titleStyle}>{title}</h2>
          {/* Only render subtitle if subtitle prop has been passed */}
          {subtitle && <p className={subtitleStyle}>{subtitle}</p>}
        </div>

        {showButton && (
          <ActionButton title={btnTitle} size={btnSize} variant={btnType} />
        )}
      </div>
    </>
  );
}
