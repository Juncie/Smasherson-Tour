"use client";
import { Card } from "flowbite-react";
import ActionButton from "../ActionButton";

export default function EventCard({
  image,
  title = "Card Title",
  description,
  href,
  date,
  btnShow = true,
  ...props
}) {
 
  return (
    <div className="container mx-1">
      <Card
        className={`max-w-md isolate ${props.className}`}
        href={href ?? "#"}
        imgSrc={image ?? "https://source.unsplash.com/random/250x250/?golf-champion"}
      >
        <span className="absolute top-0 text-gray-100 text-sm bg-blue-700 bg-opacity-75 w-2/12 text-center font-bold p-3 shadow-md tracking-wide">
          {date ?? "Aug, 01 2021"}
        </span>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
        </h5>
      
        <p className="font-normal text-gray-700 dark:text-gray-400">
            {description ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus"}
        </p>
        {btnShow && (
          <ActionButton children="View Event Details" type="primary" variant="filled" />
        )}
      </Card>
    </div>
  )
}
