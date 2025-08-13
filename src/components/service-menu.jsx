import { slugify } from "@/helper/slugify";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  FaHome,
  FaUsers,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export const ServiceMenu = ({ expandedId, onClose }) => {
  const expandAnimationClass = expandedId ? "scale-100 -translate-y-0 opacity-100 duration-500 ease-in-out" : "scale-[.90] -translate-y-12 opacity-0 duration-500 ease-in-out";
  const path = usePathname();

  // Quick navigation links from desktop navbar
  const quickLinks = [
    {
      title: "Home",
      href: "/",
      icon: <FaHome />,
      desc: "Back to homepage",
    },
    {
      title: "About Us",
      href: "/about-us",
      icon: <FaUsers />,
      desc: "Learn more about our company",
    },
    {
      title: "Job Board",
      href: "/job-board",
      icon: <FaBriefcase />,
      desc: "Find your next opportunity",
    },
    {
      title: "Contact",
      href: "/contact",
      icon: <FaEnvelope />,
      desc: "Get in touch with us",
    },
  ];

  const isActive = (href) => {
    return href === "/" ? path === "/" : path.startsWith(href);
  };

  const hrServicesMenu = [
    {
      title: "Talent Acquisition & Recruitment",
      icon: <FaUserTie />,
      desc: "Strategic hiring to attract top talent",
      slug: "talent-acquisition-recruitment",
    },
    {
      title: "Performance Management",
      icon: <FaChartLine />,
      desc: "Drive growth through performance tracking",
      slug: "performance-management",
    },
    {
      title: "Employee Engagement & Retention",
      icon: <FaRegSmileBeam />,
      desc: "Improve motivation and reduce turnover",
      slug: "employee-engagement-retention",
    },
    {
      title: "Training & Development",
      icon: <FaChalkboardTeacher />,
      desc: "Develop skills through tailored learning",
      slug: "training-development",
    },
    {
      title: "Compensation & Benefits",
      icon: <FaMoneyCheckAlt />,
      desc: "Design attractive pay and benefits",
      slug: "compensation-benefits",
    },
    {
      title: "Payroll Services",
      icon: <FaFileInvoiceDollar />,
      desc: "Timely and accurate payroll processing",
      slug: "payroll-services",
    },
    {
      title: "HR Policies & Procedures",
      icon: <FaFileSignature />,
      desc: "Clear and compliant HR frameworks",
      slug: "hr-policies-procedures",
    },
    {
      title: "Organizational Development",
      icon: <FaProjectDiagram />,
      desc: "Enhance structure and business agility",
      slug: "organizational-development",
    },
    {
      title: "Compliance Support",
      icon: <FaShieldAlt />,
      desc: "Ensure compliance with labor laws",
      slug: "compliance-support",
    },
    {
      title: "HR Technology Implementation",
      icon: <FaLaptopCode />,
      desc: "Adopt modern HR tools and systems",
      slug: "hr-technology-implementation",
    },
    {
      title: "Diversity, Equity, and Inclusion (DEI)",
      icon: <FaUsersCog />,
      desc: "Foster a diverse and inclusive culture",
      slug: "diversity-equity-inclusion",
    },
    {
      title: "Custom Services",
      icon: <FaPuzzlePiece />,
      desc: "Tailored HR solutions for your needs",
      slug: "custom-services",
    },
  ];

  // Handle click on service item
  const handleServiceClick = () => {
    if (onClose) {
      onClose();
    }
  };

  // Handle click on "View All Services"
  const handleViewAllClick = () => {
    if (onClose) {
      onClose();
    }
  };

  // Handle click on "Connect With Us Now"
  const handleConnectClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`${expandAnimationClass} pb-6`}>
      {/* Mobile Layout */}
      <div className="block md:hidden pt-10 pb-15">
        {/* Quick Navigation - Compact Grid */}
        <div className="mb-5">
          <h2 className="text-xs font-semibold text-secondaryLight/60 dark:text-secondaryLight/60 uppercase tracking-wider mb-3">Navigate</h2>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={handleServiceClick}
                style={{ transitionDelay: `${idx * 25}ms` }}
                className={`${expandAnimationClass} flex flex-row items-center gap-2 rounded-2xl p-3 min-h-[70px] transition-all duration-300 ease-out active:scale-95 group ${
                  isActive(link.href)
                    ? "bg-main-1/70 text-white shadow-lg shadow-main-1/25"
                    : "bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-secondaryDark dark:text-secondaryLight hover:bg-main-1/10 dark:hover:bg-main-1/20 hover:border-main-1/20"
                }`}
                aria-label={`Navigate to ${link.title} page`}
                role="button"
              >
                {/* Icon */}
                <div className={`text-lg p-2 bg-main-2/10 rounded-full transition-all duration-300 ${isActive(link.href) ? "text-white scale-110" : "text-sec-2 dark:text-sec-1  group-hover:scale-110"}`}>{link.icon}</div>

                {/* Title */}
                <span className={`text-sm font-medium text-center leading-tight transition-colors duration-300 ${isActive(link.href) ? "text-white" : "group-hover:text-main-1 dark:group-hover:text-main-2"}`}>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Services Section - Compact List */}
        <div className="mb-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-semibold text-secondaryLight/60 dark:text-secondaryLight/60 uppercase tracking-wider">Services</h2>
            <Link
              href="/services"
              onClick={handleViewAllClick}
              className="text-xs font-medium text-main-1  hover:text-main-2 dark:hover:text-main-1 transition-colors duration-200 flex items-center gap-1 group"
              aria-label="View all services page"
            >
              View All
              <FaArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Services Compact List */}
          <div className="space-y-1.5">
            {hrServicesMenu.map((el, idx) => (
              <Link
                key={idx}
                href={`/services/${el.slug}`}
                onClick={handleServiceClick}
                style={{ transitionDelay: `${quickLinks.length * 25 + idx * 20}ms` }}
                className={`${expandAnimationClass} flex items-center gap-3 rounded-2xl px-4 py-3 bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-secondaryLight dark:text-secondaryLight hover:bg-main-1/5 dark:hover:bg-main-1/10 hover:border-main-1/20 transition-all duration-300 ease-out active:scale-[0.98] group`}
                aria-label={`Learn about ${el.title} service`}
                role="button"
              >
                {/* Icon */}
                <div className="text-sec-2 dark:text-sec-1 text-sm p-2 bg-main-1/10 dark:bg-main-2/10 rounded-xl group-hover:bg-main-1/20 dark:group-hover:bg-main-2/20 transition-all duration-300 flex-shrink-0">{el.icon}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm leading-tight text-secondaryDark dark:text-secondaryLight group-hover:text-main-1 dark:group-hover:text-main-2 transition-colors duration-300">{el.title}</h3>
                </div>

                {/* Arrow Icon */}
                <div className="text-main-1/40 group-hover:text-main-1 dark:group-hover:text-main-2 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0">
                  <FaArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section - Compact */}
        <div className="relative overflow-hidden rounded-2xl group">
          <div className="relative h-24 bg-gradient-to-br from-main-1/80 via-sec-1 to-sec-4/80 dark:from-main-2 dark:via-sec-2 dark:to-sec-3 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10"></div>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#dots)" />
              </svg>
            </div>

            <Link
              href="/contact"
              onClick={handleConnectClick}
              className="absolute inset-0 flex items-center justify-between px-5 text-white group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-2xl"
              aria-label="Contact us for personalized HR solutions"
              role="button"
            >
              <div>
                <div className="font-bold text-base mb-0.5">Let's Connect</div>
                <div className="text-sm opacity-90 font-medium">Get personalized HR solutions</div>
              </div>
              <div className="bg-white/20 rounded-full p-2.5 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Fixed Image Container */}
      <div className="hidden md:block">
        <div className="grid grid-cols-6 gap-10">
          <div className="col-span-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold tracking-wide opacity-80 uppercase">Our Services</p>
              <Link href="/services" onClick={handleViewAllClick} className="font-bold px-3 py-2 bg-main-2/10 dark:bg-main-1/30 rounded-full text-xs duration-300 ease-in-out hover:bg-main-1 dark:hover:bg-main-2">
                View All Services
              </Link>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {hrServicesMenu.map((el, idx) => (
                <Link
                  key={idx}
                  href={`/services/${el.slug}`}
                  onClick={handleServiceClick}
                  style={{ transitionDelay: `${idx * 10}ms` }}
                  className={`${expandAnimationClass} flex gap-3 rounded-main p-4 bg-lightColor/30 dark:bg-darkColor/30 text-secondaryDark dark:text-secondaryLight hover:bg-main-2/10 hover:dark:bg-main-1/10 transition-all duration-300 ease-in-out transform hover:scale-[1.02] relative group`}
                  aria-label={`Navigate to ${el.title} service page`}
                >
                  <div className="text-xl p-2 h-fit rounded-secondary bg-black/10 dark:bg-white/20 group-hover:bg-main-1/20 dark:group-hover:bg-main-2/20 transition-colors duration-300">{el.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm leading-tight mb-1 group-hover:text-main-1 dark:group-hover:text-main-2 transition-colors duration-300">{el.title}</h3>
                    <p className="text-xs text-secondaryDark/70 dark:text-secondaryLight/70 leading-relaxed line-clamp-2">{el.desc}</p>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaArrowRight className="w-3 h-3 text-main-1 dark:text-main-2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Fixed Image Container */}
          <div className="col-span-2">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-main group">
              {/* Image with proper sizing */}
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1594022527131-2c26853089f1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional HR consulting team meeting"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-main-1/90 via-main-1/40 to-transparent dark:from-main-2/90 dark:via-main-2/40 group-hover:from-main-1/95 dark:group-hover:from-main-2/95 transition-all duration-300"></div>

              {/* Decorative Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="desktop-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#desktop-dots)" />
                </svg>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Top Badge */}
                <div className="flex justify-end">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium border border-white/30">Expert Consultants</div>
                </div>

                {/* Bottom Content */}
                <div className="space-y-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2 leading-tight">Ready to Transform Your HR?</h3>
                    <p className="text-sm opacity-90 leading-relaxed">Get personalized solutions from our expert team</p>
                  </div>

                  <Link
                    href="/contact"
                    onClick={handleConnectClick}
                    className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 hover:border-white/50 rounded-xl px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                    aria-label="Navigate to contact page"
                  >
                    <span>Connect With Us</span>
                    <div className="bg-white/20 rounded-full p-1 group-hover/btn:bg-white/40 transition-all duration-300">
                      <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
