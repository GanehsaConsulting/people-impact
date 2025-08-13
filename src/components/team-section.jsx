"use client";

import { useEffect, useState } from "react";
import { FiArrowRight, FiX, FiLinkedin, FiMail, FiAward, FiBookOpen } from "react-icons/fi";
import { Title } from "./ui/title";

// Function to format bio text into HTML paragraphs
const formatBio = (bioText) => {
  // Split by double line breaks first, then single line breaks
  const paragraphs = bioText.split("\n\n").map((paragraph) => paragraph.replace(/\n/g, " "));

  return paragraphs
    .map((paragraph, index) => {
      // Clean up any extra spaces
      const cleanParagraph = paragraph.trim();
      if (!cleanParagraph) return null;

      return (
        <p key={index} className="text-darkColor/80 dark:text-lightColor/80 leading-relaxed text-base mb-4 last:mb-0">
          {cleanParagraph}
        </p>
      );
    })
    .filter(Boolean);
};

export const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Lady Meiske",
      position: "Managing Partner & Co-Founder People Impact",
      photo: "https://cms-ganesha.ganeshaconsulting.co.id/uploads/Meiske_cc2fb34123.webp",
      alt: "Lady Meiske Photo",
      bio: "Meiske brings over 20 years of experience across industries like Agritech, FMCG, hospitality, and education, with the past 10 years focused on strategic HR leadership. She holds a Diploma in Project Management (S.A.C.) from Stonebridge Associated Colleges, United Kingdom. Before joining People Impact, Meiske served as VP of People Culture & Corporate Support at an Agritech startup, where she played a pivotal role in building and shaping the organization's HR framework.\n\nHer areas of expertise encompass a wide range of HR functions, including Recruiting, Onboarding, Talent Management, Communication, Training, Compensation and Succession Planning, Organizational Development, Leadership Development, Compliance, HRIS, Data Analytics, Fundraising, Business Process Improvement, Change Management, and Project Management.\n\nMeiske's extensive background equips her with a unique analytical perspective, enabling her to guide business leaders on effectively adopting HR strategies that align with their talent objectives. She is passionate about providing resources and insights to empower the next generation of talent, preparing them for the future of work.",
      expertise: [
        "Recruiting",
        "Onboarding",
        "Talent Management",
        "Organizational Development",
        "Leadership Development",
        "Compensation & Succession Planning",
        "Compliance",
        "HRIS",
        "Data Analytics",
        "Fundraising",
        "Business Process Improvement",
        "Change Management",
        "Project Management",
      ],
      linkedin: "https://www.linkedin.com/in/lady-meiske",
      summary: "20+ years experience across multiple industries, 10 years in strategic HR leadership",
      experience: "20+ Years",
      specialty: "Strategic HR Leadership & Organizational Development",
    },
    {
      id: 2,
      name: "Siska Rajagukguk",
      position: "Managing Partner & Co-Founder People Impact",
      photo: "https://cms-ganesha.ganeshaconsulting.co.id/uploads/Siska_bb0f49beb9.webp",
      alt: "Siska Rajagukguk Photo",
      bio: "Siska is a Certified Human Resources Professional with over 18 years of experience across NGOs, donor-funded projects (World Bank, DFAT, USAID, etc), private companies, and start-ups. She holds a Bachelor's degree in Human Resources Management from Atma Jaya Catholic University, Jakarta. Previously, Siska served as the HR Director at an NGO, where she played a key role in strengthening the organization's HR functions, systems, and structure.\n\nHer expertise covers HR strategy, organizational development, compliance, change management, recruitment, contracts, compensation & benefit, performance management, HRIS, and policy design. She has led national HR operations, built HR systems from scratch, managed over 3,000 hires, and supported remote teams across Indonesia.\n\nAs an independent consultant, Siska has provided strategic advice to a diverse range of organizations—including wealth management firms, reinsurance companies, logistics firms, banks, NGOs, and early-stage start-ups—helping them establish ethical, scalable, and compliant HR practices. A people-centered leader and strategic partner, Siska is dedicated to aligning HR initiatives with organizational objectives while fostering inclusive, values-driven, and impactful workplaces.",
      expertise: ["HR Strategy", "Organizational Development", "Compliance", "Change Management", "Recruitment", "Contracts", "Compensation & Benefit", "Performance Management", "HRIS", "Policy Design"],
      linkedin: "https://www.linkedin.com/in/siska-rajagukguk-280b4988/",
      summary: "Certified HR Professional with 18+ years across NGOs, private companies, and start-ups",
      experience: "18+ Years",
      specialty: "HR Strategy & Organizational Development",
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "unset";
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedMember) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [selectedMember]);

  return (
    <>
      <section>
        <div className="margin spacing">
          {/* Section Header */}
          <div className="text-left mb-16">
            <Title>Our Team</Title>
            <div className="mt-6">
              <p className="text-lg text-darkColor/80 dark:text-lightColor/80 leading-relaxed mb-4">
                Our team is spearheaded by two accomplished HR professionals, Siska Rajagukguk and Lady Meiske, along with our diverse and highly skilled team of HR professionals.
              </p>
              <p className="text-darkColor/70 dark:text-lightColor/70 leading-relaxed">
                Each member brings a wealth of experience, expertise, and dedication, ensuring that we deliver exceptional HR consulting services tailored to your unique organizational needs.
              </p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`overflow-hidden group relative rounded-main p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer backdrop-blur-sm
    ${
      index === 0
        ? "bg-gradient-to-br from-white to-gray-50/50 border border-secondaryLight/50 hover:shadow-main-1/20 dark:bg-[#131313] dark:border-[#119bd3]/20 dark:hover:shadow-[#119bd3]/30"
        : "bg-gradient-to-br from-white to-gray-50/50 border border-secondaryLight/50 hover:shadow-main-3/20 dark:bg-[#131313] dark:border-[#8dbb3f]/20 dark:hover:shadow-[#8dbb3f]/30"
    }`}
                onClick={() => openModal(member)}
                style={{
                  background: index === 0 ? "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(99, 102, 241, 0.05) 100%)" : "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(16, 185, 129, 0.05) 100%)",
                }}
              >
                {/* Dark mode gradient overlay */}
                <div
                  className={`absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300 rounded-main ${
                    index === 0 ? "bg-gradient-to-br from-[#131313] via-[#131313] to-[#1a2332]" : "bg-gradient-to-br from-[#131313] via-[#131313] to-[#1a2a1a]"
                  }`}
                ></div>

                {/* Decorative Element */}
                <div
                  className={`absolute top-0 left-0 w-32 h-32 blur-xl rounded-full opacity-10 dark:opacity-20 -translate-x-16 -translate-y-16 transition-all duration-500 group-hover:scale-110 ${index === 0 ? "bg-main-1" : "bg-main-3"}`}
                ></div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Top Section */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Profile Photo */}
                    <div className="relative">
                      <div
                        className={`w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 ring-4 transition-all duration-300 group-hover:ring-8 ${
                          index === 0
                            ? "ring-main-1/20 group-hover:ring-main-1/30 dark:ring-[#119bd3]/30 dark:group-hover:ring-[#119bd3]/50"
                            : "ring-main-3/20 group-hover:ring-main-3/30 dark:ring-[#8dbb3f]/30 dark:group-hover:ring-[#8dbb3f]/50"
                        }`}
                      >
                        <img src={member.photo} alt={member.alt} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                    {/* Basic Info */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-darkColor dark:text-white leading-tight mb-1 group-hover:text-main-2 dark:group-hover:text-[#119bd3] transition-colors duration-300">{member.name}</h3>
                        <p className={`font-semibold text-lg mb-2 ${index === 0 ? "text-main-1 dark:text-[#119bd3]" : "text-main-3 dark:text-[#8dbb3f]"}`}>{member.position}</p>
                        <p className="text-sm text-darkColor/60 dark:text-white/60 font-medium">{member.specialty}</p>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-6">
                    <p className="text-darkColor/80 dark:text-white/80 leading-relaxed text-sm">{member.summary}</p>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-end">
                    <div className="opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                      <div
                        className={`flex items-center gap-2 font-semibold text-sm group/btn px-4 py-2.5 rounded-xl transition-all duration-300 ${
                          index === 0
                            ? "bg-main-1/10 text-main-1 hover:bg-main-1/20 hover:shadow-lg hover:shadow-main-1/25 dark:bg-[#119bd3]/15 dark:text-[#119bd3] dark:hover:bg-[#119bd3]/25 dark:hover:shadow-[#119bd3]/30"
                            : "bg-main-3/10 text-main-3 hover:bg-main-3/20 hover:shadow-lg hover:shadow-main-3/25 dark:bg-[#8dbb3f]/15 dark:text-[#8dbb3f] dark:hover:bg-[#8dbb3f]/25 dark:hover:shadow-[#8dbb3f]/30"
                        }`}
                      >
                        View Full Profile
                        <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" style={{ backdropFilter: "blur(8px)" }} onClick={closeModal}>
          <div className="bg-white dark:bg-secondaryDark rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-y-auto no-scrollbar shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/50 dark:bg-black/50 backdrop-blur-xl border-b border-secondaryLight/50 dark:border-darkColor/50 py-4 px-8 flex items-center justify-between rounded-t-3xl">
              <div className="flex md:flex-row flex-col md:items-center gap-1 md:gap-2">
                <h3 className="text-2xl font-bold text-darkColor dark:text-lightColor">{selectedMember.name}</h3>
                <p className="px-2 py-1 rounded-full bg-main-3/50 w-fit font-semibold text-sm">{selectedMember.position}</p>
              </div>
              <button
                onClick={closeModal}
                className="w-12 h-12 rounded-2xl bg-lightColor/80 dark:bg-darkColor/80 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-darkColor transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FiX className="w-6 h-6 text-darkColor dark:text-lightColor" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-10">
                {/* Left Column - Photo & Contact */}
                <div className="lg:col-span-1">
                  <div className="aspect-square rounded-3xl overflow-hidden mb-8 shadow-2xl">
                    <img src={selectedMember.photo} alt={selectedMember.alt} className="w-full h-full object-cover object-top" />
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-darkColor dark:text-lightColor mb-4">Get in Touch</h4>
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-main-3/10 to-main-3/5 dark:from-main-3/20 dark:to-main-3/10 rounded-2xl hover:from-main-3/20 hover:to-main-3/10 dark:hover:from-main-3/30 dark:hover:to-main-3/20 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-main-3 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FiLinkedin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-darkColor dark:text-lightColor">LinkedIn</p>
                        <p className="text-xs text-darkColor/60 dark:text-lightColor/60">Connect professionally</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Bio */}
                  <div className="bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-main-2 dark:text-main-1 mb-6 flex items-center gap-2">
                      <div className="w-6 h-6 bg-main-2 dark:bg-main-1 rounded-lg"></div>
                      Professional Background
                    </h4>
                    <div className="prose prose-lg max-w-none text-justify">{formatBio(selectedMember.bio)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
