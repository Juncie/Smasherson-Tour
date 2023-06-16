"use client";
import { Button } from "flowbite-react"

const theme = {
        primary: {
            filled: 
                "bg-blue-700 hover:bg-blue-800 text-white",
            outline: 
                "bg-transparent border-2 border-blue-800 hover:text-white",
            ghost: 
                "bg-transparent hover:bg-transparent hover:text-blue-500",
        },
        secondary: {
            filled:
                "bg-white hover:opacity-75 text-black",
            outline:
                "bg-transparent border border-green-400 hover:text-white",
            ghost:
                "bg-transparent hover:bg-primary hover:text-white",
        },
        tertiary: {
            filled:
                "bg-red-400 hover:opacity-75 text-white",
            outline:
                "bg-transparent border border-red-400 hover:text-white",
            ghost:
                "bg-transparent hover:bg-primary hover:text-white",
        }
};

export default function ActionButton({
    type = "primary" || "secondary" || "tertiary", 
    variant = "filled" || "outline" || "ghost", 
    size = "" || "sm" || "md" || "lg" || "xl",
    children,
    label,
    title,
    onClick,
}) {
    return <button 
                children={children ?? "Press The Button"} 
                size={size}
                onClick={onClick}
                className={`${theme[type][variant]} 
                    whitespace-nowrap rounded-sm 
                    transition duration-200 
                    py-2 px-4 
                    inline-flex items-center justify-center 
                    text-center text-sm font-semibold tracking-wide 
                    shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
                {children ?? label ?? title ?? "Press The Button"}
            </button>

}