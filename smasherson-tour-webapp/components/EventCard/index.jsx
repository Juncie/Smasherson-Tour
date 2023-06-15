import Image from "next/image";
import Header from "../Header";
import { Card } from "flowbite-react";

export default function EventCard({
  image = "",
  title = "Card Title",
  description,
}) {
 
  return (
    <Card
      className="max-w-md rounded-none "
      href="#"
      imgSrc={image ?? "https://source.unsplash.com/random/640x425/?golf"}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
          {description ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus"}
      </p>
    </Card>
  )
}
