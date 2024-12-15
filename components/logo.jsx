import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    (<Link href="/" className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="StyleMate Logo"
          width={40}
          height={40}
          className="object-contain" />
      </div>
      <span
        className="font-serif text-2xl tracking-wide bg-gradient-to-r from-[#556B2F] to-[#3A4A1C] bg-clip-text text-transparent font-bold">
        StyleMate
      </span>
    </Link>)
  );
}

