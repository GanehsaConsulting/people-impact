import { Title } from "./ui/title"

export const About = () => {
    return (
        <main className="margin spacing grid grid-cols-2 gap-10">
            <section className="space-y-5">
                <Title>
                    Who We Are
                </Title>
                <div class="space-y-6 text-gray-700 dark:text-gray-300 text-base leading-7">
                    <p>
                        We are a dedicated team of Human Resources professionals committed to empowering organizations and enhancing workplace environments. With years of experience across various industries, our mission is to provide tailored HR solutions that align with your company's goals and values.
                    </p>

                    <p>
                        We believe that people are the foundation of every successful organization. Our approach emphasizes collaboration, innovation, and best practices to help you attract, develop, and retain top talent. From strategic workforce planning to employee engagement initiatives, we offer comprehensive services designed to meet your unique needs.
                    </p>

                    <p>
                        Our team combines deep industry knowledge with a passion for fostering positive workplace cultures. We pride ourselves on our integrity, responsiveness, and commitment to excellence, ensuring our clients are equipped with the tools and strategies needed to thrive in today's competitive landscape.
                    </p>

                    <p class="font-medium text-main-3">
                        Join us in transforming your HR practices and unlocking the full potential of your workforce.
                    </p>
                </div>
            </section>
            <section>
                <img
                    className="w-full h-full object-cover rounded-main"
                    src="https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
            </section>
        </main>
    )
}