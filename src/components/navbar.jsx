"use client"
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import { navbarItems } from "@/app/system";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Logo = () => (
    <Link href="/" className="flex items-center z-50">
        <Image
            width={60}
            height={60}
            src="/icon.png"
            alt="Ganapatih Logo"
            className="dark:brightness-125 -ml-2"
        />
        <h1 className="font-[850] font-montserrat tracking-widest uppercase text-[20px] -ml-1 bg-gradient-to-br from-main-1 dark:from-white from-10% dark:from-5% via-baseColorDark dark:via-baseColorLight via-40% dark:via-60% to-main-3 dark:to-main-1 to-99% bg-clip-text text-transparent">
            People Impact
        </h1>
    </Link>
)

const LinkItem = ({ href, children }) => (
    <Link
        href={href}
        className="px-3 py-1 rounded-main hover:bg-darkColor hover:text-white dark:hover:text-white transition-colors duration-200 text-sm font-[500] text-secondaryDark dark:text-secondaryLight"
    >
        {children}
    </Link>
)

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const path = usePathname()

    const whitePaths = ["/", "/post"];

    const isActive = (href) => {
        return href === "/" ? path === "/" : path.startsWith(href)
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className="md:fixed top-0 left-0 right-0 h-20 z-40 pointer-events-none linear-blur-to-b" />
            <div className={`navbar z-50 sticky top-2 h-14 min-h-14  w-auto mx-2 py-2 rounded-main
                ${isScrolled ? "bg-lightColor/70 dark:bg-darkColor/70 backdrop-blur-sm shadow-custom" : "bg-lightColor dark:bg-darkColor"}
                `}>
                <div className="navbar-start">
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-1 text-sm">
                        <li>
                            <LinkItem href="">
                                Home
                            </LinkItem>
                        </li>
                        <li>
                            <LinkItem href="">
                                About Us
                            </LinkItem>
                        </li>
                        <li>
                            <LinkItem href="">
                                Our Services
                            </LinkItem>
                        </li>
                        {navbarItems.map((el, idx) => (
                            <LinkItem
                                key={idx}
                                href={el.href}
                            >
                                {el.label}
                            </LinkItem>
                        ))}

                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <ThemeSwitch />
                    <Button
                        variant={"glassColor"}>
                        Contact
                    </Button>
                </div>
            </div>
        </>
    );
}