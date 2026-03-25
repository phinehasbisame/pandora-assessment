import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#D9B899] text-[#4A3E31] py-3 px-3 md:px-[10%] w-screen flex items-center justify-between">
      <Link href={`/`} className="flex items-center gap-2 font-medium">
        <Image
          src={`/logo.webp`}
          alt="logo"
          width={100}
          height={100}
          className="w-10 h-10 rounded-full"
        />
      </Link>
      <nav className="text-xs md:text-sm space-x-5">
        <Link href={`/`}>Home</Link>
        <Link href={`/payment-history`}>Payment History</Link>
        <Link href={`/about`}>About</Link>
        <Link href={`/contact`}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
