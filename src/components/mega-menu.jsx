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
    isActive = false, // Tambahkan prop isActive
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
                        className={`cursor-pointer gap-1 flex items-center !z-999 px-3 py-1 rounded-main transition-all duration-200 text-base font-[700] relative
                            ${isExpanded 
                                ? 'bg-darkColor text-white dark:bg-lightColor dark:text-black' 
                                : isActive
                                    ? "bg-sec-2/20 dark:bg-main-1/20 dark:text-white pl-4.5 pr-2"
                                    : "hover:bg-darkColor dark:hover:bg-lightColor dark:hover:text-black hover:text-white text-secondaryDark dark:text-secondaryLight"
                            }
                        `}
                        onClick={handleToggleExpand}
                    >
                        {title}
                        
                        {/* Active indicator dot */}
                        {isActive && !isExpanded && (
                            <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2 w-[6px] h-[6px] bg-sec-2 dark:bg-main-1 rounded-full"></div>
                        )}
                        
                        <span className={`${arrowVisibility} ${isExpanded ? 'rotate-180' : ''} duration-300 ease-in-out ml-auto`}>
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
                            ? 'pointer-events-auto opacity-100 translate-y-0'
                            : 'pointer-events-none opacity-0 -translate-y-5 max-h-0'}`}
                    style={{
                        minHeight: isExpanded ? 'min-h-screen' : '0',
                        top: `${navbarHeight + 8}px`, // Use dynamic navbar height
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
                    className={`z-20 fixed inset-0 w-full h-screen bg-darkColor/50 dark:bg-darkColor/50 transition-all duration-700 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${
                        isExpanded 
                            ? 'pointer-events-auto opacity-100 translate-y-0 overflow-y-auto' 
                            : 'pointer-events-none opacity-0 translate-y-5 overflow-hidden'
                    }`}
                 
                >
                    <div
                        className={`transition-all duration-700 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] p-4 ${
                            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                    >
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};