import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ width, height, ...props }) {
    return (
        <Link href="/" className={`logo`}>
            <Image
                src="/logo.png"
                width={width ?? 75}
                height={height ?? 75}
                alt="Logo"
                className={props?.className}
            />
        </Link>
    )
}
