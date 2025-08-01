import { Title } from "./ui/title"
import { 
    FaRocket, 
    FaUsers, 
    FaHandshake, 
    FaCrown, 
    FaLeaf,
    FaChartLine,
    FaLightbulb,
    FaHeart
} from 'react-icons/fa'

export const OurStory = () => {
    const consultingServices = [
        {
            id: 1,
            title: "Transforming Businesses",
            description: "Delivering strategic and innovative solutions that inspire meaningful change, setting the stage for long-term success and sustainable growth.",
            icon: FaRocket,
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50 dark:bg-blue-900/20",
            iconColor: "text-blue-600 dark:text-blue-400"
        },
        {
            id: 2,
            title: "Optimizing People & Processes",
            description: "Enhancing organizational efficiency, talent management, and operational excellence through customized consulting approaches that drive results.",
            icon: FaUsers,
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50 dark:bg-green-900/20",
            iconColor: "text-green-600 dark:text-green-400"
        },
        {
            id: 3,
            title: "Partnering for Success",
            description: "Building robust, trust-based relationships with our clients and providing expert guidance and ongoing support throughout their journey.",
            icon: FaHandshake,
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50 dark:bg-purple-900/20",
            iconColor: "text-purple-600 dark:text-purple-400"
        },
        {
            id: 4,
            title: "Empowering Leadership",
            description: "Developing strong and dynamic leaders and teams that promote collaboration, innovation, and a vibrant workplace culture that inspires excellence.",
            icon: FaCrown,
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50 dark:bg-orange-900/20",
            iconColor: "text-orange-600 dark:text-orange-400"
        },
        {
            id: 5,
            title: "Driving Sustainable Impact",
            description: "Offering solutions that tackle immediate challenges while fostering lasting, positive transformations for future success and environmental responsibility.",
            icon: FaLeaf,
            color: "from-teal-500 to-teal-600",
            bgColor: "bg-teal-50 dark:bg-teal-900/20",
            iconColor: "text-teal-600 dark:text-teal-400"
        }
    ];

    const coreValues = [
        {
            id: 1,
            title: "Innovation",
            description: "Embracing cutting-edge solutions and creative thinking",
            icon: FaLightbulb,
            iconColor: "text-yellow-500"
        },
        {
            id: 2,
            title: "Growth",
            description: "Fostering continuous improvement and development",
            icon: FaChartLine,
            iconColor: "text-blue-500"
        },
        {
            id: 3,
            title: "Passion",
            description: "Bringing enthusiasm and dedication to every project",
            icon: FaHeart,
            iconColor: "text-red-500"
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
                                src="https://images.unsplash.com/photo-1550305080-4e029753abcf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

            {/* Mission Section - Enhanced with Icons */}
            <section className="space-y-8 md:space-y-12 lg:space-y-16">
                <div className="text-left space-y-4 md:space-y-6">
                    <Title>
                        Our Mission
                    </Title>
                    <div className="space-y-4">
                        <p className="text-lg md:text-xl text-main-3 font-medium leading-relaxed">
                            Our mission is founded on the belief that organizations flourish when their people thrive.
                        </p>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            Through tailored consulting strategies and innovative approaches, we are dedicated to creating lasting impact that transforms businesses, empowers leaders, and drives sustainable success across all levels of your organization.
                        </p>
                    </div>
                </div>

                {/* Mission Cards - Enhanced Icon-Based Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-3">
                    {consultingServices.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className={`group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 ${service.bgColor} p-6 md:p-8 transition-all ease-in-out duration-500 hover:shadow-2xl hover:-translate-y-2`}
                            >
                                {/* Background Gradient Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                
                                {/* Icon Container */}
                                <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-gray-800 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                                    <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${service.iconColor} transition-all duration-500 group-hover:scale-110`} />
                                    
                                    {/* Icon Glow Effect */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                </div>

                                {/* Content */}
                                <div className="relative space-y-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-main-1 group-hover:to-main-2 transition-all duration-500">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                                        {service.description}
                                    </p>

                                    {/* Hover Arrow */}
                                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                                        <span className={`text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                            Learn More
                                        </span>
                                        <svg className={`w-4 h-4 ${service.iconColor} transition-transform duration-300 group-hover:translate-x-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-main-1/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    )
}