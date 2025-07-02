import { slugify } from "@/helper/slugify";
import Link from "next/link";
import {
    FaUserTie,
    FaChartLine,
    FaRegSmileBeam,
    FaChalkboardTeacher,
    FaMoneyCheckAlt,
    FaFileInvoiceDollar,
    FaFileSignature,
    FaProjectDiagram,
    FaShieldAlt,
    FaLaptopCode,
    FaUsersCog,
    FaPuzzlePiece,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export const ServiceMenu = ({ expandedId, onClose }) => {
    const expandAnimationClass = expandedId ? "scale-100 -translate-y-0 opacity-100 duration-500 ease-in-out" : "scale-[.90] -translate-y-12 opacity-0 duration-500 ease-in-out";

    const hrServicesMenu = [
        {
            title: "Talent Acquisition & Recruitment",
            icon: <FaUserTie />,
            desc: "Strategic hiring to attract top talent",
            slug: "talent-acquisition-recruitment"
        },
        {
            title: "Performance Management",
            icon: <FaChartLine />,
            desc: "Drive growth through performance tracking",
            slug: "performance-management"
        },
        {
            title: "Employee Engagement & Retention",
            icon: <FaRegSmileBeam />,
            desc: "Improve motivation and reduce turnover",
            slug: "employee-engagement-retention"
        },
        {
            title: "Training & Development",
            icon: <FaChalkboardTeacher />,
            desc: "Develop skills through tailored learning",
            slug: "training-development"
        },
        {
            title: "Compensation & Benefits",
            icon: <FaMoneyCheckAlt />,
            desc: "Design attractive pay and benefits",
            slug: "compensation-benefits"
        },
        {
            title: "Payroll Services",
            icon: <FaFileInvoiceDollar />,
            desc: "Timely and accurate payroll processing",
            slug: "payroll-services"
        },
        {
            title: "HR Policies & Procedures",
            icon: <FaFileSignature />,
            desc: "Clear and compliant HR frameworks",
            slug: "hr-policies-procedures"
        },
        {
            title: "Organizational Development",
            icon: <FaProjectDiagram />,
            desc: "Enhance structure and business agility",
            slug: "organizational-development"
        },
        {
            title: "Compliance Support",
            icon: <FaShieldAlt />,
            desc: "Ensure compliance with labor laws",
            slug: "compliance-support"
        },
        {
            title: "HR Technology Implementation",
            icon: <FaLaptopCode />,
            desc: "Adopt modern HR tools and systems",
            slug: "hr-technology-implementation"
        },
        {
            title: "Diversity, Equity, and Inclusion (DEI)",
            icon: <FaUsersCog />,
            desc: "Foster a diverse and inclusive culture",
            slug: "diversity-equity-inclusion"
        },
        {
            title: "Custom Services",
            icon: <FaPuzzlePiece />,
            desc: "Tailored HR solutions for your needs",
            slug: "custom-services"
        },
    ];

    // Handle click on service item
    const handleServiceClick = () => {
        if (onClose) {
            onClose();
        }
    };

    // Handle click on "View All Services"
    const handleViewAllClick = () => {
        if (onClose) {
            onClose();
        }
    };

    // Handle click on "Connect With Us Now"
    const handleConnectClick = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className={`${expandAnimationClass} pb-15`}>
            <div className="grid grid-cols-6 gap-10">
                <div className="col-span-4">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-bold tracking-wide opacity-80 uppercase">
                            Our Services
                        </p>
                        <Link
                            href="/services"
                            onClick={handleViewAllClick}
                            className="font-bold px-3 py-2 bg-main-2/10 dark:bg-main-1/30 rounded-full text-xs duration-300 ease-in-out hover:bg-main-1 dark:hover:bg-main-2"
                        >
                            View All Services
                        </Link>
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                        {hrServicesMenu.map((el, idx) => (
                            <Link
                                key={idx}
                                href={`/services/${el.slug}`}
                                onClick={handleServiceClick}
                                style={{ transitionDelay: `${idx * 10}ms` }}
                                className={`${expandAnimationClass} flex gap-3 rounded-main p-4 bg-lightColor/30 dark:bg-darkColor/30 text-secondaryDark dark:text-secondaryLight hover:bg-main-2/10 hover:dark:bg-main-1/10 transition-all duration-300 ease-in-out transform hover:scale-[1.02] relative group`}
                                aria-label={`Navigate to ${el.title} service page`}
                            >
                                <div className="text-xl p-2 h-fit rounded-secondary bg-black/10 dark:bg-white/20 group-hover:bg-main-1/20 dark:group-hover:bg-main-2/20 transition-colors duration-300">
                                    {el.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-sm leading-tight mb-1 group-hover:text-main-1 dark:group-hover:text-main-2 transition-colors duration-300">
                                        {el.title}
                                    </h3>
                                    <p className="text-xs text-secondaryDark/70 dark:text-secondaryLight/70 leading-relaxed line-clamp-2">
                                        {el.desc}
                                    </p>
                                </div>
                                
                                {/* Hover indicator */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FaArrowRight className="w-3 h-3 text-main-1 dark:text-main-2" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="col-span-2 relative overflow-hidden rounded-main group">
                    <img
                        className="rounded-secondary w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Professional HR consulting team meeting"
                        loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-main-1/80 dark:from-main-2/80 to-transparent rounded-b-secondary h-30 group-hover:from-main-1/90 dark:group-hover:from-main-2/90 transition-all duration-300">
                    </div>
                    <Link
                        href="/contact"
                        onClick={handleConnectClick}
                        className="absolute bottom-3 left-3 right-3 text-white text-2xl font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
                        aria-label="Navigate to contact page"
                    >
                        Connect With Us Now 
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    );
};