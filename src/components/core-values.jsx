import React from "react";
import { FiZap, FiUsers, FiTrendingUp, FiHeart, FiTarget, FiStar, FiPhoneCall } from "react-icons/fi";
import { Title } from "./ui/title";

// Main Core Values Section
const MainCoreValues = ({ coreValues }) => {
  return (
    <>
      {/* Header */}
      <div className="text-center space-y-4 md:space-y-3 mb-10">
        <Title>Our Core Values</Title>
        <div className="max-w-3xl mx-auto ">
          <p className="text-lg md:text-xl text-main-3 font-medium">The principles that guide our work and define our commitment to excellence.</p>
          <p className="text-lg md:text-xl text-main-3 font-medium">These values shape our culture, drive our decisions,</p>
          <p className="text-lg md:text-xl text-main-3 font-medium">and inspire us to create meaningful impact for every client we serve.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {coreValues.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <div
              key={value.id}
              className="group relative overflow-hidden bg-lightColor dark:bg-darkColor transition-all duration-500 p-6 md:p-8 rounded-main border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradientColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon Container */}
              <div className="relative mb-6 flex justify-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-black shadow-lg ${value.bgColor} group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                  <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${value.color} transition-all duration-500 group-hover:scale-110`} />
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradientColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative text-center space-y-4">
                <h3 className={`text-xl md:text-2xl font-bold text-darkColor dark:text-lightColor transition-all duration-500 ${value.hoverColor}`}>{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{value.description}</p>
                {/* Hover Indicator */}
                <div className="flex justify-center">
                  <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-main-1/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// What Drives Us Forward Section
const DrivingValues = ({ additionalValues }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-darkColor dark:text-lightColor mb-3">What Drives Us Forward</h3>
        <p className="text-darkColor/70 dark:text-lightColor/70 mx-auto text-sm md:text-base">Additional principles that fuel our passion and commitment to your success.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
        {additionalValues.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <div
              key={value.id}
              className="group text-center p-4 md:p-6 bg-lightColor/50 dark:bg-darkColor/50 rounded-main border border-gray-200/30 dark:border-gray-700/30 hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-black shadow-md mb-3 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <IconComponent className={`w-6 h-6 md:w-7 md:h-7 ${value.color} transition-all duration-300 group-hover:scale-110`} />
              </div>
              <h4 className="text-lg font-semibold text-darkColor dark:text-lightColor mb-2 group-hover:text-main-1 transition-colors duration-300">{value.title}</h4>
              <p className="text-xs md:text-sm text-darkColor/70 dark:text-lightColor/70 group-hover:text-darkColor/80 dark:group-hover:text-lightColor/80 transition-colors duration-300">{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Call to Action Section
const ValuesCallToAction = () => {
  return (
    <div className=" text-center bg-gradient-to-r from-main-1/5 via-main-2/5 to-main-3/5 dark:from-main-1/10 dark:via-main-2/10 dark:to-main-3/10 rounded-main p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50">
      <h3 className="text-xl md:text-2xl font-bold text-darkColor dark:text-lightColor mb-3">See Our Values in Action</h3>
      <p className="text-darkColor/70 dark:text-lightColor/70 mb-6 max-w-2xl mx-auto text-sm md:text-base">These aren't just words on a page—they're the foundation of every project, partnership, and solution we deliver.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <a href="/services" className="inline-flex items-center space-x-2 bg-gradient-to-r from-main-1 to-main-2 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
          <span>Learn About Our Services</span>
          <FiTrendingUp className="w-4 h-4" />
        </a>
        <a href="/contact" className="inline-flex items-center space-x-2 border-2 border-main-1 text-main-1 px-6 py-3 rounded-lg font-semibold hover:bg-main-1 hover:text-white transition-all duration-300">
          <span>Contact Us</span>
          <FiPhoneCall className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

// Main Component
export const CoreValues = () => {
  const coreValues = [
    {
      id: 1,
      title: "Innovation & Sustainability",
      shortTitle: "Innovation",
      description: "We embrace forward-thinking strategies that challenge the status quo while creating solutions that address immediate challenges and foster long-term growth.",
      icon: FiZap,
      color: "text-main-1",
      bgColor: "bg-main-1/10 dark:bg-main-1/20",
      hoverColor: "group-hover:text-main-1",
      gradientColor: "from-main-1 to-main-2",
    },
    {
      id: 2,
      title: "Integrity & Collaboration",
      shortTitle: "Integrity",
      description: "We build meaningful partnerships with our clients based on transparency, honesty, and trust, working closely together to achieve shared success.",
      icon: FiUsers,
      color: "text-main-3",
      bgColor: "bg-main-3/10 dark:bg-main-3/20",
      hoverColor: "group-hover:text-main-3",
      gradientColor: "from-main-3 to-main-1",
    },
    {
      id: 3,
      title: "Empowerment",
      shortTitle: "Empowerment",
      description: "We empower individuals and teams to take ownership of their growth, enabling them to actively contribute to the organization’s success.",
      icon: FiTrendingUp,
      color: "text-sec-3",
      bgColor: "bg-sec-3/10 dark:bg-sec-3/20",
      hoverColor: "group-hover:text-sec-3",
      gradientColor: "from-sec-3 to-main-2",
    },
  ];

  const additionalValues = [
    {
      id: 4,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do",
      icon: FiStar,
      color: "text-yellow-500",
    },
    {
      id: 5,
      title: "Purpose",
      description: "Driven by meaningful impact and lasting transformation",
      icon: FiTarget,
      color: "text-blue-500",
    },
    {
      id: 6,
      title: "Passion",
      description: "Bringing enthusiasm and dedication to every project",
      icon: FiHeart,
      color: "text-red-500",
    },
  ];

  return (
    <>
      {/* Main Core Values */}
      <div className="margin spacing">
        <MainCoreValues coreValues={coreValues} />
      </div>

      {/* What Drives Us Forward */}
      <div className="margin spacing">
        <DrivingValues additionalValues={additionalValues} />
      </div>

      {/* Call to Action */}
      <div className="margin spacing">
        <ValuesCallToAction />
      </div>
    </>
  );
};
