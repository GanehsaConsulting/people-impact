'use client'
import { IoIosArrowDown } from 'react-icons/io';
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from 'react';

export const MegaMenuNavbar = ({
    id,
    title,
    expandedId,
    setExpandedId,
    children,
    arrowVisibility = "block",
    icon,
    iconClassName,
    isMobile = false,
}) => {
    const [navbarHeight, setNavbarHeight] = useState(56);

    useEffect(() => {
        const updateNavbarHeight = () => {
            // Get actual navbar height dynamically
            const navbar = document.querySelector('nav');
            if (navbar) {
                setNavbarHeight(navbar.offsetHeight);
            }
        };

        // Update on mount and resize
        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);

        // Also update when scroll state might change navbar appearance
        const handleScroll = () => {
            updateNavbarHeight();
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', updateNavbarHeight);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isExpanded = expandedId === id;

    const handleToggleExpand = () => {
        setExpandedId(isExpanded ? null : id);
    };

    // For mobile, remove mouse events and use click only
    const containerProps = isMobile ? {} : {
        onMouseEnter: () => setExpandedId(id),
        onMouseLeave: () => setExpandedId(null)
    };

    return (
        <div className="relative" {...containerProps}>
            {/* Trigger */}
            <div className="z-[100] relative">
                {title ? (
                    <div
                        className={`${isExpanded ? 'bg-darkColor text-white dark:bg-lightColor dark:text-black' : ''}  cursor-pointer gap-1 flex items-center !z-999 px-3 py-1 rounded-main hover:bg-darkColor hover:text-white dark:hover:text-black transition-colors duration-200 text-sm font-[500] `}
                        onClick={handleToggleExpand}
                    >
                        {title}
                        <span className={`${arrowVisibility} ${isExpanded ? 'rotate-180' : ''} duration-300 ease-in-out`}>
                            <IoIosArrowDown />
                        </span>
                    </div>
                ) : (
                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={handleToggleExpand} checked={isExpanded} readOnly />
                        <div className="swap-off">
                            <div className={iconClassName}>{icon}</div>
                        </div>
                        <div className="swap-on">
                            <div className={iconClassName}><RxCross2 className="text-[18px] md:text-xl" /></div>
                        </div>
                    </label>
                )}
            </div>

            {/* Desktop Mega Menu */}
            {!isMobile && (
                <div
                    onMouseEnter={() => setExpandedId(id)}
                    className={`fixed top-2 left-2 right-2 rounded-main w-auto bg-lightColor dark:bg-darkColor transition-all duration-450 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] overflow-hidden 
                             ${isExpanded
                            ? 'pointer-events-auto opacity-100 translate-y-0 max-h-[80vh]'
                            : 'pointer-events-none opacity-0 -translate-y-5 max-h-0'}`}
                    style={{
                        minHeight: isExpanded ? '30vh' : '0',
                    }}
                >
                    <div className={`mx-15 mt-20`}>
                        {children}
                    </div>
                </div>
            )}

            {/* Mobile Mega Menu */}
            {isMobile && (
                <div
                    onMouseEnter={() => setExpandedId(id)}
                    className={`fixed inset-0 w-full transition-all duration-700 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${isExpanded ? 'pointer-events-auto max-h-[100vh] opacity-100 translate-y-0 overflow-y-scroll noBar' : 'pointer-events-none max-h-0 opacity-0 -translate-y-5'} overflow-hidden`}
                >
                    <div
                        className={`transition-transform duration-700 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}   `}
                    >
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};