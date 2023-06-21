import Image from "next/image";

export default function Logo({width, height}) {
    return(
        <div className="logo">
            <Image src="/logo.png" width={width ?? 75} height={height ?? 75} alt="Logo" />
        </div>
    )
}