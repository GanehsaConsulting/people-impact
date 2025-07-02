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
        <main className="margin spacing space-y-20">
            {/* Vision Section - Diagonal Layout */}
            <section className="relative">
                <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-5 relative">
                        <div className="relative">
                            <img
                                className="w-full h-80 object-cover rounded-main shadow-xl"
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Vision - Team collaboration and growth"
                            />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-main-1/20 to-main-2/20 rounded-main -z-10"></div>
                        </div>
                    </div>

                    <div className="col-span-7 space-y-6 pr-8">
                        <Title >
                            Our Vision
                        </Title>

                        <div className="space-y-5 text-gray-700 dark:text-gray-300 text-md leading-8">
                            <p className="text-lg font-medium text-main-3 leading-relaxed">
                                At People Impact, our vision is to transform organizations through innovative, strategic, and people-focused solutions.
                            </p>
                            <p>
                                We drive sustainable growth and create meaningful impact by empowering organizations to unlock their full potential while cultivating environments where both businesses and individuals can thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section - Card-based Layout */}
            <section className="space-y-12">
                <div className="space-y-3">
                    <Title>
                        Our Mission
                    </Title>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Our mission is founded on the belief that organizations flourish when their people thrive. Through tailored consulting strategies, we are dedicated to creating lasting impact.
                    </p>
                </div>

                {/* Mission Cards Grid */}
                <div className="grid grid-cols-5 gap-3">
                    {consultingServices.map((service) => (
                        <div
                            key={service.id}
                            className={`h-120 relative overflow-hidden rounded-main bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 `}
                        >
                            <img
                                className="w-full h-full object-cover rounded-t-main mb-4"
                                src={service.image}
                                alt={service.alt}
                            />
                            {/* <div className="absolute bottom-0 left-0 right-0 linear-blur-to-t w-full h-80"></div> */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-main-2 to-transparent w-full h-80"></div>
                            <div className="min-h-40 absolute bottom-0 left-0 right-0 p-4 rounded-b-main text-white drop-shadow" >
                                <h3 className="text-xl font-semibold leading-tight mb-3">{service.title}</h3>
                                <p className="leading-4 text-sm opacity-80">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}