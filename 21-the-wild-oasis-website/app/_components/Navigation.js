import Image from "next/image";
import Link from "next/link";
import jinhsi from "@/public/Jinhsi.png";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors text-accent-600"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors text-accent-600"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors text-accent-600"
          >
            <div className="flex items-center gap-5">
              <div className="w-10 h-10">
                <Image src={jinhsi} alt="Avatar" className="rounded-full" />
              </div>
              <span>Guest area</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
