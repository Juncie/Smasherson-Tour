import Image from "next/image";
import ActionButton from "../Button";
import Header from "../Header";

export default function Card({
  image = "",
  title = "Card Title",
  description = "",
  type = "boxed" || "list" || "filled",
  imgAlt = "",
  flow = "up" || "down" || "left" || "right",
}) {
  // Defining the base styles for the card
  const base = "sm:max-w-sm lg:max-w-xl inline-flex flex-col ",
    types = {
      boxed: "bg-white p-4 rounded-sm",
      filled: "rounded-sm flex flex-col",
    };

  return (
    <div className={`${base} ${types[type]}`}>
      <figure id="card-top" className="">
        <Image
          src={image}
          alt={imgAlt ? imgAlt : title}
          width={640}
          height={360}
          className="rounded-sm "
        />
      </figure>

      <div id="card-bottom" className="p-2">
        <Header
          title={title}
          titleSize="md"
          subtitle={description}
          btnTitle="Book Now"
          btnType="ghost"
          btnSize="xs"
        />
      </div>
    </div>
  );
}
