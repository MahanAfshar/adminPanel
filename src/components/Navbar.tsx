import Link from "next/link";
import Image from "next/image";
import Button from "./reusable/Button";
import arrow from "@/../public/icons/arrow.svg";
import user from "@/../public/icons/user.svg";

export default function Navbar() {
  return (
    <nav
        className="flex items-center justify-between py-5 px-6 border-b border-grayTwo"
    >
        <div>
            <div
                className="hidden sm:flex items-center gap-5 text-xl"
            >
                <Link
                    href="#"
                >
                    Products
                </Link>
                <Image 
                    src={arrow}
                    width={25}
                    height={25}
                    alt="arrow"
                    className="rotate-90"
                />
                <Link
                    href="#"
                    className="font-bold"
                >
                    Creating Physical Product
                </Link>
            </div>
            <h1
                className="text-2xl font-bold sm:hidden"
            >
                Droplinked
            </h1>
        </div>
        <Button 
            className="border border-grayTwo p-2 sm:p-3 select-none"
            iconSrc={user}
        />
    </nav>
  )
}
