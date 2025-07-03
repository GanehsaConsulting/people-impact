"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MegaMenuNavbar } from "./mega-menu";
import { HiMiniBars2 } from "react-icons/hi2";
import { ServiceMenu } from "./service-menu";
import ThemeSwitch from "./theme-switch";

export const MobileNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [expandedId, setExpandedId] = useState(null)

    const path = usePathname()

    const whitePaths = ["/", "/post"];

    const isActive = (href) => {
        return href === "/" ? path === "/" : path.startsWith(href)
    };

    // Check if current path is a service page
    const isServiceActive = () => {
        return path.startsWith("/services") || path.includes("service");
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

    const Logo = () => (
        <Link href="/" className={`${expandedId ? "-translate-y-[150%]" : "translate-y-0"} duration-300 flex items-center z-50`}>
            <Image
                width={50}
                height={50}
                src="/icon.png"
                alt="Ganapatih Logo"
                className="dark:brightness-125 -ml-2"
            />
            <h1 className="font-[850] font-montserrat tracking-widest uppercase text-[17px] -ml-1 bg-gradient-to-br from-main-1 dark:from-white from-10% dark:from-5% via-baseColorDark dark:via-baseColorLight via-40% dark:via-60% to-main-3 dark:to-main-1 to-99% bg-clip-text text-transparent">
                People Impact
            </h1>
        </Link>
    )
    return (
        <>
            <div className="z-40 fixed top-0 left-0 right-0 h-20 pointer-events-none linear-blur-mnavbar" />
            <nav className={`${expandedId ? "" : "bg-lightColor/50 dark:bg-darkColor/50 border border-white/30 dark:border-secondaryGray/10"}  z-50 flex justify-between md:hidden navbar sticky top-2 min-h-13 h-13  w-auto mx-2 my-2 rounded-main`}>
                <Logo />
                <div className="space-x-2 flex items-center">
                    <div className={`${expandedId ? "flex" : "hidden"}`}>
                        <ThemeSwitch />
                    </div>
                    <MegaMenuNavbar
                        id="menu"
                        icon={<HiMiniBars2 className={`text-xl mb-[2px] mr-2`} />}
                        iconClassName={''}
                        expandedId={expandedId}
                        setExpandedId={setExpandedId}
                        isMobile={true} // Fix: Changed from 'mobile' to 'isMobile'
                    >
                        <ServiceMenu
                            onClose={() => setExpandedId(null)}
                            expandedId={expandedId}
                        />
                    </MegaMenuNavbar>
                </div>
            </nav>
                    <div className={`fixed top-0 transition-opacity duration-300 z-10
                ${expandedId
                    ? "opacity-100 backdrop-blur-min md:backdrop-blur-[4px] w-screen h-screen"
                    : "opacity-0 pointer-events-none"
                } 
            `} />
        </>
    )
}