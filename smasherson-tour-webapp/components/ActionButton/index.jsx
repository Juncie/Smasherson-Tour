import { Button } from "flowbite-react"

const theme = {
        primary: {
            filled: 
                "bg-blue-600 hover:bg-blue-800 text-white",
            outline: 
                "bg-transparent border-2 border-blue-800 hover:text-white",
            ghost: 
                "bg-transparent hover:bg-transparent hover:text-blue-500",
        },
        secondary: {
            filled:
                "bg-green-400 hover:opacity-75 text-white",
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
    children
}) {
    return <Button 
                children={children ?? "Press The Button"} 
                size={size}
                className={`${theme[type][variant]} rounded-sm transition duration-200`}
            />

}