"use client"
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import { navbarItems } from "@/app/system";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MegaMenuNavbar } from "./mega-menu";
import { ServiceMenu } from "./service-menu";

const Logo = () => (
    <Link href="/" className="flex items-center z-999">
        <Image
            width={70}
            height={70}
            src="/icon.png"
            alt="Ganapatih Logo"
            className="dark:brightness-125 -ml-2"
        />
        <h1 className="font-[850] font-montserrat tracking-widest uppercase text-[22px] -ml-1 bg-gradient-to-br from-main-1 dark:from-white from-10% dark:from-5% via-baseColorDark dark:via-baseColorLight via-40% dark:via-60% to-main-3 dark:to-main-1 to-99% bg-clip-text text-transparent">
            People Impact
        </h1>
    </Link>
)

const LinkItem = ({ href, children, isActive }) => (
    <Link
        href={href}
        className={`!z-999 px-3 py-1 rounded-main transition-all duration-200 text-base font-[700] relative
        ${isActive
                ? "bg-sec-2/20 dark:bg-main-1/20 dark:text-white pl-4.5 pr-2"
                : "hover:bg-darkColor dark:hover:bg-lightColor dark:hover:text-black hover:text-white text-secondaryDark dark:text-secondaryLight"
            }
    `}
    >
        {children}
        {/* Active indicator dot */}
        {isActive && (
            <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2 w-[6px] h-[6px] bg-sec-2 dark:bg-main-1 rounded-full"></div>
        )}
    </Link>
)

export const Navbar = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [expandedId, setExpandedId] = useState(null)

    const path = usePathname()

    const whitePaths = ["/", "/post"];

    const isActive = (href) => {
        return href === "/" ? path === "/" : path.startsWith(href)
    };

    // Check if current page is a service page
    const isServicePage = path.startsWith("/services") || path === "/services";

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
            {isScrolled && (
                <>
                    <div className="md:fixed top-0 left-0 right-0 h-35 z-40 pointer-events-none linear-blur-to-b" />
                </>
            )}
            <div className={`hidden md:flex navbar z-50 sticky top-2 w-auto mx-3 py-10 px-5 rounded-main min-h-16 h-17
                ${isScrolled ? "bg-lightColor/70 dark:bg-darkColor/70 shadow-custom border border-neutral-300/30 dark:border-secondaryGray/10" : "bg-white dark:bg-black"}
                `}
            >
                <div className="navbar-start">
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-end space-x-2 z-50">
                    <ul className="flex items-center gap-1 text-sm">
                        <li className="z-50">
                            <LinkItem href="/" isActive={isActive("/")}>
                                Home
                            </LinkItem>
                        </li>
                        <li className="z-50">
                            <LinkItem href="/about-us" isActive={isActive("/about-us")}>
                                About Us
                            </LinkItem>
                        </li>
                        <li>
                            <div className="relative">
                                <MegaMenuNavbar
                                    id="service"
                                    title="Services"
                                    expandedId={expandedId}
                                    setExpandedId={setExpandedId}
                                    className="absolute"
                                    isActive={isServicePage} // Pass isActive prop
                                >
                                    <ServiceMenu
                                        onClose={() => setExpandedId(null)}
                                        expandedId={expandedId}
                                    />
                                </MegaMenuNavbar>
                            </div>
                        </li>
                        {/* <li className="z-50">
                            <LinkItem href="/blog" isActive={isActive("/blog")}>
                                Resources
                            </LinkItem>
                        </li> */}
                        <li className="z-50">
                            <LinkItem href="/job-board" isActive={isActive("/job-board")}>
                                Job Board
                            </LinkItem>
                        </li>
                        <li className="z-50">
                            <LinkItem href="/contact" isActive={isActive("/contact")}>
                                Contact
                            </LinkItem>
                        </li>
                    </ul>
                    <ThemeSwitch />
                    {/* <Link href="/contact">
                        <Button
                            variant={"glassColor"}
                            className={`text-base font-[700] transition-all duration-200 ${isActive("/contact")
                                ? "ring-2 ring-main-1 ring-offset-2 ring-offset-lightColor dark:ring-offset-darkColor"
                                : ""
                                }`}
                        >
                            Contact
                        </Button>
                    </Link> */}
                </div>
            </div>

            <div className={`md:flex hidden fixed top-0 transition-opacity duration-300 z-10 bg-black/50 dark:bg-white/50
                ${expandedId
                    ? "opacity-100 backdrop-blur-none md:backdrop-blur-[4px] w-screen h-screen"
                    : "opacity-0 pointer-events-none"
                } 
            `} />

            {/* Main Content */}
            <div className={`${expandedId ? 'pointer-events-none md:scale-105' : ''} md:duration-300 md:ease-in-out`}>
                {children}
            </div>
        </>
    );
}