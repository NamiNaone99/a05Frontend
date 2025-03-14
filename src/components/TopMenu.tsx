import Image from "next/image";
import Link from "next/link";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="w-full text-white flex justify-end h-20 py-5 items-center gap-4 px-8 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl rounded-lg">
      <TopMenuItem title="Booking" href="/booking" />
      <div className="relative w-12 h-12 overflow-hidden">
        <Link href="/" className="block relative w-full h-full">
          <Image
            src="/image/logo.png"
            alt="Logo"
            fill
            className="rounded-lg object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
