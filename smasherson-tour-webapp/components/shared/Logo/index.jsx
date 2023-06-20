import Image from "next/image";

export default function ({width, height}) {
    return(
        <div className="logo">
            <Image src="/logo.png" width={width ?? 75} height={height ?? 75} />
        </div>
    )
}