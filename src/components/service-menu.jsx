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
        },
        {
            title: "Performance Management",
            icon: <FaChartLine />,
            desc: "Drive growth through performance tracking",
        },
        {
            title: "Employee Engagement & Retention",
            icon: <FaRegSmileBeam />,
            desc: "Improve motivation and reduce turnover",
        },
        {
            title: "Training & Development",
            icon: <FaChalkboardTeacher />,
            desc: "Develop skills through tailored learning",
        },
        {
            title: "Compensation & Benefits",
            icon: <FaMoneyCheckAlt />,
            desc: "Design attractive pay and benefits",
        },
        {
            title: "Payroll Services",
            icon: <FaFileInvoiceDollar />,
            desc: "Timely and accurate payroll processing",
        },
        {
            title: "HR Policies & Procedures",
            icon: <FaFileSignature />,
            desc: "Clear and compliant HR frameworks",
        },
        {
            title: "Organizational Development",
            icon: <FaProjectDiagram />,
            desc: "Enhance structure and business agility",
        },
        {
            title: "Compliance Support",
            icon: <FaShieldAlt />,
            desc: "Ensure compliance with labor laws",
        },
        {
            title: "HR Technology Implementation",
            icon: <FaLaptopCode />,
            desc: "Adopt modern HR tools and systems",
        },
        {
            title: "Diversity, Equity, and Inclusion (DEI)",
            icon: <FaUsersCog />,
            desc: "Foster a diverse and inclusive culture",
        },
        {
            title: "Custom Services",
            icon: <FaPuzzlePiece />,
            desc: "Tailored HR solutions for your needs",
        },
    ];


    return (
        <div className={`${expandAnimationClass} pb-15`}>
            <div className="grid grid-cols-6 gap-10">
                <div className="col-span-4">
                    <p className="text-sm font-bold tracking-wide opacity-80 uppercase">
                        Our Services
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                        {hrServicesMenu.map((el, idx) => (
                            <a
                                key={idx}
                                href=""
                                style={{ transitionDelay: `${idx * 10}ms` }}
                                className={`${expandAnimationClass} flex gap-3 rounded-main p-4 bg-lightColor/30 dark:bg-darkColor/30 text-secondaryDark dark:text-secondaryLight hover:bg-main-2/10 hover:dark:bg-main-1/10 transition-all duration-300 ease-in-out transform hover:scale-[1.02] relative`}
                            >
                                <div className="text-xl p-2 h-fit rounded-secondary bg-black/10 dark:bg-white/20">
                                    {el.icon}
                                </div>
                                <div>
                                    <h1 className="font-semibold">
                                        {el.title}
                                    </h1>
                                    <p className="text-sm text-secondaryDark/70 dark:text-secondaryLight/70">
                                        {el.desc}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="col-span-2 relative">
                    <img
                        className="rounded-secondary w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-main-1/80 dark:from-main-2/80 to-transparent rounded-b-secondary h-30">
                    </div>
                    <h1 className="absolute bottom-3 left-3 right-3 text-white text-2xl font-semibold flex items-center gap-2">
                        Connect With Us Now <FaArrowRight />
                    </h1>
                </div>
            </div>
        </div>
    );
};