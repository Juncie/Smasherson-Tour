"use client";
import ActionButton from "../ActionButton";

export default function Header({
  title = "Header",
  titleSize = "xl" || "xxl" || "3xl" || "lg" || "md" || "sm" || "xs",
  titleWeight = "bold" || "semi-bold" || "black" || "extra-bold",
  subtitle = "",
  subTitleSize = "sm" || "md" || "lg" || "xl",
  titleColor = "dark" || "light",
  subTitleColor = "gray-400" || "white" || "gray-500" || "gray-600" || "black",
  btnTitle,
  btnSize = "" || "sm" || "lg",
  btnType = "fill" || "outline" || "ghost",
  showButton = true || false,
  direction = "row" || "col" || "column-reverse" || "row-reverse",
  ...props
}) {
  // Base, title, and subtitle styles for the header
  const base = `flex flex-${direction} justify-between items-center mx-4 `,
    titleStyle = `font-${titleWeight} text-${titleSize}`,
    subtitleStyle = `
      font-normal
      text-${subTitleSize}
      ${subTitleColor ? `text-${subTitleColor}` : "text-gray-400"}
      `;

  return (
    <>
      <div className={`${base} ${props.className ? props.className : ""}`}>
        <div>
          <h2 className={titleStyle}>{title}</h2>
          {subtitle && <p className={subtitleStyle}>{subtitle}</p>}
        </div>

        {showButton && <ActionButton type={btnType} size={btnSize}  >{btnTitle}</ActionButton>}
      </div>
    </>
  );
}