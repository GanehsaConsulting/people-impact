import { Title } from "./ui/title"

export const OurStory = () => {
    const consultingServices = [
        {
            id: 1,
            title: "Transforming Businesses",
            description: "Delivering strategic and innovative solutions that inspire meaningful change, setting the stage for long-term success.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Transforming Businesses",
            column: "left"
        },
        {
            id: 2,
            title: "Optimizing People & Processes",
            description: "Enhancing organizational efficiency, talent management, and operational excellence through customized consulting approaches.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Optimizing People & Processes",
            column: "left"
        },
        {
            id: 3,
            title: "Partnering for Success",
            description: "Building robust, trust-based relationships with our clients and providing expert guidance and ongoing support.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Partnering for Success",
            column: "left"
        },
        {
            id: 4,
            title: "Empowering Leadership",
            description: "Developing strong and dynamic leaders and teams that promote collaboration, innovation, and a vibrant workplace culture.",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Empowering Leadership",
            column: "right"
        },
        {
            id: 5,
            title: "Driving Sustainable Impact",
            description: "Offering solutions that tackle immediate challenges while fostering lasting, positive transformations for future success.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Driving Sustainable Impact",
            column: "right"
        }
    ];

    return (
        <main className="margin spacing space-y-12 md:space-y-16 lg:space-y-20">
            {/* Vision Section - Responsive Layout */}
            <section className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
                    {/* Image - Mobile First, Desktop Left */}
                    <div className="lg:col-span-5 relative order-1 lg:order-1">
                        <div className="relative">
                            <img
                                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-main shadow-xl"
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Vision - Team collaboration and growth"
                                loading="lazy"
                            />
                            {/* Decorative element - hidden on mobile */}
                            <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-main-1/20 to-main-2/20 rounded-main -z-10"></div>
                        </div>
                    </div>

                    {/* Content - Mobile Second, Desktop Right */}
                    <div className="lg:col-span-7 space-y-4 md:space-y-6 order-2 lg:order-2 lg:pr-8">
                        <Title>
                            Our Vision
                        </Title>

                        <div className="space-y-4 md:space-y-5 text-gray-700 dark:text-gray-300 text-sm md:text-base lg:text-md leading-6 md:leading-7 lg:leading-8">
                            <p className="text-base md:text-lg font-medium text-main-3 leading-relaxed">
                                At People Impact, our vision is to transform organizations through innovative, strategic, and people-focused solutions.
                            </p>
                            <p>
                                We drive sustainable growth and create meaningful impact by empowering organizations to unlock their full potential while cultivating environments where both businesses and individuals can thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section - Responsive Card Layout */}
            <section className="space-y-8 md:space-y-10 lg:space-y-12">
                <div className="space-y-2 md:space-y-3">
                    <Title>
                        Our Mission
                    </Title>
                    <p className="text-base md:text-lg text-muted-foreground leading-6 md:leading-relaxed">
                        Our mission is founded on the belief that organizations flourish when their people thrive. Through tailored consulting strategies, we are dedicated to creating lasting impact.
                    </p>
                </div>

                {/* Mission Cards - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-3">
                    {consultingServices.map((service, index) => (
                        <div
                            key={service.id}
                            className={`relative overflow-hidden rounded-main bg-white dark:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group
                                ${/* Mobile: Full height cards */ ''}
                                h-64 sm:h-72 md:h-80 lg:h-96 xl:h-120
                                ${/* Animation delay for staggered effect */ ''}
                            `}
                            style={{ 
                                animationDelay: `${index * 100}ms`,
                                transitionDelay: `${index * 50}ms`
                            }}
                        >
                            {/* Image */}
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                src={service.image}
                                alt={service.alt}
                                loading="lazy"
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-main-2 via-main-2/80 to-transparent w-full h-2/3 md:h-80 transition-opacity duration-300 group-hover:from-main-2/90"></div>
                            
                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-5 xl:p-4 text-white">
                                <div className="space-y-2 md:space-y-3">
                                    <h3 className="text-base md:text-lg xl:text-xl font-semibold leading-tight line-clamp-2 group-hover:text-white transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs md:text-sm leading-4 md:leading-5 opacity-90 line-clamp-3 md:line-clamp-4 group-hover:opacity-100 transition-opacity duration-300">
                                        {service.description}
                                    </p>
                                </div>
                                
                                {/* Read more indicator on hover */}
                                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-8 h-0.5 bg-white/60 rounded-full"></div>
                                </div>
                            </div>

                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                        </div>
                    ))}
                </div>

                {/* Mobile: Show fewer cards initially with "View More" option */}
                <div className="block sm:hidden">
                    <div className="text-center">
                        <button className="text-main-1 dark:text-main-2 font-medium text-sm underline decoration-2 underline-offset-4 hover:text-main-2 dark:hover:text-main-1 transition-colors duration-200">
                            View All Services
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}