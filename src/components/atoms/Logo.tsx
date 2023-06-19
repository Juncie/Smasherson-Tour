import LogoImage from 'public/Logo.png'
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/">
    <Image src={LogoImage} alt="Logo" width={150} height={150} />
  </Link>
);

export default Logo;
