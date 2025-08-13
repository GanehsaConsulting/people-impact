import { Title } from "./ui/title";
import { FaRocket, FaUsers, FaHandshake, FaCrown, FaLeaf, FaChartLine, FaLightbulb, FaHeart } from "react-icons/fa";

export const OurStory = () => {
  const consultingServices = [
    {
      id: 1,
      title: "Transforming Businesses",
      description: "Delivering strategic and innovative solutions that inspire meaningful change, setting the stage for long-term success and sustainable growth.",
      icon: FaRocket,
      color: "from-main-1 to-main-1/80",
      bgColor: "bg-main-1/5 dark:bg-main-1/10",
      iconColor: "text-main-1",
    },
    {
      id: 2,
      title: "Empowering Leadership",
      description: "Developing strong and dynamic leaders and teams that promote collaboration, innovation, and a vibrant workplace culture that inspires excellence.",
      icon: FaCrown,
      color: "from-main-3 to-main-3/80",
      bgColor: "bg-main-3/5 dark:bg-main-3/10",
      iconColor: "text-main-3",
    },
    {
      id: 3,
      title: "Optimizing People & Processes",
      description: "Enhancing organizational efficiency, talent management, and operational excellence through customized consulting approaches that drive results.",
      icon: FaUsers,
      color: "from-main-3 to-main-3/80",
      bgColor: "bg-main-3/5 dark:bg-main-3/10",
      iconColor: "text-main-3",
    },
    {
      id: 4,
      title: "Driving Sustainable Impact",
      description: "Offering solutions that tackle immediate challenges while fostering lasting, positive transformations for future success and environmental responsibility.",
      icon: FaLeaf,
      color: "from-main-1 to-main-1/80",
      bgColor: "bg-main-1/5 dark:bg-main-1/10",
      iconColor: "text-main-1",
    },
    {
      id: 5,
      title: "Partnering for Success",
      description: "Building robust, trust-based relationships with our clients and providing expert guidance and ongoing support throughout their journey.",
      icon: FaHandshake,
      color: "from-main-1 to-main-1/80",
      bgColor: "bg-main-1/5 dark:bg-main-1/10",
      iconColor: "text-main-1",
    },
  ];

  const coreValues = [
    {
      id: 1,
      title: "Innovation",
      description: "Embracing cutting-edge solutions and creative thinking",
      icon: FaLightbulb,
      iconColor: "text-main-3",
    },
    {
      id: 2,
      title: "Growth",
      description: "Fostering continuous improvement and development",
      icon: FaChartLine,
      iconColor: "text-main-1",
    },
    {
      id: 3,
      title: "Passion",
      description: "Bringing enthusiasm and dedication to every project",
      icon: FaHeart,
      iconColor: "text-main-3",
    },
  ];

  return (
    <main className="">
      {/* Vision Section - Responsive Layout */}
      <section className="margin spacing relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Image - Mobile First, Desktop Left */}
          <div className="relative order-1 lg:order-1">
            <div className="relative">
              <img className="w-full h-48 sm:h-64 md:h-80 lg:h-full min-h-[400px] object-cover rounded-main shadow-xl" src="/vision.png" alt="Vision - Team collaboration and growth" loading="lazy" />
              {/* Decorative element - hidden on mobile */}
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-main-1/20 to-main-3/20 rounded-main -z-10"></div>
            </div>
          </div>

          {/* Content - Mobile Second, Desktop Right */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-2 flex flex-col">
            <Title>Our Vision</Title>

            <div className="space-y-4 md:space-y-5 text-gray-700 dark:text-gray-300 text-sm md:text-base lg:text-md leading-6 md:leading-7 lg:leading-8 text-justify">
              <p className="text-base md:text-lg font-medium text-main-3 leading-relaxed">
                At People Impact, our vision is to transform the organization we partner with by providing innovative, strategic, and people-focused solutions that drive sustainable growth and create a meaningful impact.
              </p>
              <p className="text-justify">We aspire to empower organizations to unlock their full potential while cultivating environments where both businesses and individuals can thrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Enhanced with Icons */}
      <section className="margin spacing">
        <div className="space-y-4 md:space-y-6 text-center">
          <Title>Our Mission</Title>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-main-3 font-medium leading-relaxed text-center">
              Our mission is founded on the belief that organizations flourish when their people thrive. Through tailored consulting strategies.  we are dedicated to:
            </p>
          </div>
        </div>

        {/* Mission Cards - Enhanced Icon-Based Design with Custom Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-3 mt-5">
          {consultingServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 ${service.bgColor} p-6 md:p-8 transition-all ease-in-out duration-500 hover:shadow-2xl hover:-translate-y-2 text-center`}
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
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-main-1 group-hover:to-main-3 transition-all duration-500 text-start">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 text-start">{service.description}</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${
                    service.iconColor === "text-main-1" ? "from-main-1/5" : "from-main-3/5"
                  } to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
