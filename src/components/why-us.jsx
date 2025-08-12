import { Title } from "./ui/title";
import { FaUserTie, FaCog, FaTrophy, FaHandshake } from "react-icons/fa";

export const WhyUs = () => {
    const whyChooseUs = [
        {
            title: "Expertise",
            description:
                "Our team possesses extensive experience and unmatched knowledge in transforming businesses and optimizing human capital.",
            icon: <FaUserTie className="text-3xl text-sec-2 dark:text-sec-1" />
        },
        {
            title: "Tailored Solutions",
            description:
                "We develop customized solutions that are uniquely designed to align with your specific needs and objectives.",
            icon: <FaCog className="text-3xl text-sec-2 dark:text-sec-1" />
        },
        {
            title: "Proven Results",
            description:
                "Our history of successful partnerships showcases our ability to drive sustainable growth and deliver lasting impact.",
            icon: <FaTrophy className="text-3xl text-sec-2 dark:text-sec-1" />
        },
        {
            title: "Client-Focused Approach",
            description:
                "We prioritize fostering strong relationships and collaborating closely with you to achieve measurable success.",
            icon: <FaHandshake className="text-3xl text-sec-2 dark:text-sec-1" />
        },
    ];

    return (
        <main className="margin space-y-5 spacing">
            <Title>
                Why Choose Us?
            </Title>
            <section className="mt-10" >
                {/* Mobile Layout */}
                <div className="block lg:hidden space-y-4">
                    {/* Cards Grid for Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {whyChooseUs.map((el, idx) => (
                            <div
                                className="relative flex flex-col justify-center items-center text-center overflow-hidden bg-lightColor rounded-main p-4 dark:bg-darkColor text-secondaryDark dark:text-secondaryLight min-h-[200px]"
                                key={idx}
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-main-1 rounded-full blur-3xl"></div>
                                <div className="absolute top-0 right-0 w-15 h-15 bg-main-3 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-sec-4 rounded-full blur-3xl"></div>
                                
                                <h1 className="text-xl sm:text-4xl font-semibold text-main-2 dark:text-main-1 mb-4">
                                    {el.title}
                                </h1>
                                <div className="mb-4 p-4 rounded-full dark:bg-black bg-white w-fit text-xl">
                                    {el.icon}
                                </div>
                                <p className="text-sm sm:text-base">
                                    {el.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-4 gap-2">
                    {whyChooseUs.map((el, idx) => (
                        <div
                            className="relative flex flex-col justify-center items-center text-center overflow-hidden bg-lightColor rounded-main p-4 dark:bg-darkColor text-secondaryDark dark:text-secondaryLight"
                            key={idx}
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-main-1 rounded-full blur-3xl"></div>
                            <div className="absolute top-0 right-0 w-15 h-15 bg-main-3 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-20 bg-sec-4 rounded-full blur-3xl"></div>
                            
                            <h1 className="text-2xl font-bold text-main-2 dark:text-main-1 mb-4">
                                {el.title}
                            </h1>
                            <div className="mb-4 p-4 rounded-full dark:bg-black bg-white w-fit">
                                {el.icon}
                            </div>
                            <p>
                                {el.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}