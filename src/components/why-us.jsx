export const WhyUs = () => {
    const whyChooseUs = [
        {
            title: "Expertise",
            description:
                "Our team possesses extensive experience and unmatched knowledge in transforming businesses and optimizing human capital.",
        },
        {
            title: "Tailored Solutions",
            description:
                "We develop customized solutions that are uniquely designed to align with your specific needs and objectives.",
        },
        {
            title: "Proven Results",
            description:
                "Our history of successful partnerships showcases our ability to drive sustainable growth and deliver lasting impact.",
        },
        {
            title: "Client-Focused Approach",
            description:
                "We prioritize fostering strong relationships and collaborating closely with you to achieve measurable success.",
        },
    ];

    return (
        <main className="margin spacing">
            <section>
                {/* Mobile Layout */}
                <div className="block lg:hidden space-y-4">
                    {/* Hero Card for Mobile */}
                    <div className="relative bg-lightColor rounded-main p-4 dark:bg-darkColor text-secondaryDark dark:text-secondaryLight flex flex-col justify-end h-48">
                        <img
                            className="absolute inset-0 w-full h-full object-cover rounded-main opacity-150"
                            src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <div className="absolute bottom-0 right-0 left-0 rounded-b-main w-full h-[50%] bg-gradient-to-t from-main-2/100 via-main-2/40 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-2xl text-white">
                            Only Here,
                            <br />
                            Only With Us
                        </p>
                    </div>

                    {/* Cards Grid for Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {whyChooseUs.map((el, idx) => (
                            <div
                                className="bg-lightColor rounded-main p-4 dark:bg-darkColor text-secondaryDark dark:text-secondaryLight min-h-[200px]"
                                key={idx}
                            >
                                <h1 className="text-xl sm:text-2xl font-semibold text-main-2 dark:text-main-1 mb-4">
                                    {el.title}
                                </h1>
                                <p className="text-sm sm:text-base">
                                    {el.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Layout (Original) */}
                <div className="hidden lg:grid grid-cols-5 gap-2">
                    <div className="relative bg-lightColor rounded-main p-4 dark:bg-darkColor text-secondaryDark dark:text-secondaryLight flex flex-col justify-end">
                        <img
                            className="absolute inset-0 w-full h-full object-cover rounded-main opacity-150"
                            src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <div className="absolute bottom-0 right-0 left-0 rounded-b-main w-full h-[50%] bg-gradient-to-t from-main-2/100 via-main-2/40 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-2xl text-white">
                            Only Here,
                            <br />
                            Only With Us
                        </p>
                    </div>
                    {whyChooseUs.map((el, idx) => (
                        <div
                            className="bg-lightColor rounded-main p-4 dark:bg-darkColor text-secondaryDark dark:text-secondaryLight"
                            key={idx}
                        >
                            <h1 className="text-2xl font-semibold text-main-2 dark:text-main-1 h-[30vh]">
                                {el.title}
                            </h1>
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