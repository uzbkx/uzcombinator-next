import Link from "next/link";
import Image from "next/image";

export function Logo({ className, white }: { className?: string; white?: boolean }) {
  return (
    <Link href="/" className={`flex items-center no-underline ${className || ""}`}>
      <Image
        src={white ? "/logo-white.png" : "/logo.png"}
        alt="UZ Combinator"
        width={160}
        height={40}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
