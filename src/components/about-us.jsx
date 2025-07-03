import { Title } from "./ui/title"

export const About = () => {
    return (
        <main className="margin spacing grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Content Section */}
            <section className="space-y-4 md:space-y-5 order-2 lg:order-1">
                <Title>
                    Who We Are
                </Title>
                <div className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-6 md:leading-7">
                    <p>
                        We are a dedicated team of Human Resources professionals committed to empowering organizations and enhancing workplace environments. With years of experience across various industries, our mission is to provide tailored HR solutions that align with your company's goals and values.
                    </p>

                    <p>
                        We believe that people are the foundation of every successful organization. Our approach emphasizes collaboration, innovation, and best practices to help you attract, develop, and retain top talent. From strategic workforce planning to employee engagement initiatives, we offer comprehensive services designed to meet your unique needs.
                    </p>

                    <p>
                        Our team combines deep industry knowledge with a passion for fostering positive workplace cultures. We pride ourselves on our integrity, responsiveness, and commitment to excellence, ensuring our clients are equipped with the tools and strategies needed to thrive in today's competitive landscape.
                    </p>

                    <p className="font-medium text-main-3 text-sm md:text-base">
                        Join us in transforming your HR practices and unlocking the full potential of your workforce.
                    </p>
                </div>
            </section>

            {/* Image Section */}
            <section className="order-1 lg:order-2">
                <div className="relative">
                    <img
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover rounded-main shadow-lg"
                        src="https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Professional team working together in a modern office environment"
                        loading="lazy"
                    />
                    
                    {/* Optional overlay for better visual hierarchy */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-main pointer-events-none"></div>
                </div>
            </section>
        </main>
    )
}