"use client";

import { useEffect, useState } from "react";
import { FiArrowRight, FiX, FiLinkedin, FiMail, FiAward, FiBookOpen } from "react-icons/fi";
import { Title } from "./ui/title";

export const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Lady Meiske",
      position: "Managing Partner",
      photo: "https://cms-ganesha.ganeshaconsulting.co.id/uploads/Meiske_cc2fb34123.webp",
      alt: "Lady Meiske Photo",
      bio: "Lady is a seasoned HR professional with 12+ years of experience in talent acquisition, employee engagement, and HR technology implementation. She has extensive experience in scaling HR operations for rapidly growing companies and implementing innovative HR solutions that drive organizational success.",
      expertise: ["Talent Acquisition", "Employee Engagement", "HR Technology", "Performance Management"],
      education: "Bachelor's in Psychology, Master's in Business Administration",
      certifications: ["PHR Certified", "Certified Talent Management Professional", "Agile HR Practitioner"],
      email: "lady@example.com",
      linkedin: "https://linkedin.com/in/lady-meiske",
      summary: "Seasoned HR professional with 12+ years of expertise in talent acquisition and HR technology implementation",
      experience: "12+ Years",
      specialty: "HR Technology & Talent Management",
    },
    {
      id: 2,
      name: "Siska Rajagukguk",
      position: "Managing Partner",
      photo: "https://cms-ganesha.ganeshaconsulting.co.id/uploads/Siska_bb0f49beb9.webp",
      alt: "Siska Rajagukguk Photo",
      bio: "Siska brings over 15 years of comprehensive HR experience, specializing in organizational development, talent management, and strategic HR consulting. She has successfully led HR transformations for Fortune 500 companies and has a proven track record in building high-performance teams that exceed organizational goals.",
      expertise: ["Strategic HR Planning", "Organizational Development", "Leadership Development", "Change Management"],
      education: "Master's in Human Resources Management, University of Indonesia",
      certifications: ["SHRM-SCP", "Certified Executive Coach", "Six Sigma Black Belt"],
      email: "siska@example.com",
      linkedin: "https://linkedin.com/in/siska-rajagukguk",
      summary: "Strategic HR leader with 15+ years of experience in organizational development and Fortune 500 transformations",
      experience: "15+ Years",
      specialty: "Strategic Planning & Organizational Development",
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
                className={`group relative bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 rounded-main p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-secondaryLight/50 dark:border-darkColor/50 backdrop-blur-sm ${
                  index === 0 ? "hover:shadow-main-1/20" : "hover:shadow-main-3/20"
                }`}
                onClick={() => openModal(member)}
                style={{
                  background: index === 0 ? "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(99, 102, 241, 0.05) 100%)" : "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(16, 185, 129, 0.05) 100%)",
                }}
              >
                {/* Decorative Element */}
                <div className={`absolute top-0 left-0 w-32 h-32 blur-xl rounded-full opacity-10 -translate-x-16 -translate-y-16 transition-all duration-500 group-hover:scale-110 ${index === 0 ? "bg-main-1" : "bg-main-3"}`}></div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Top Section */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Profile Photo */}
                    <div className="relative">
                      <div
                        className={`w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 ring-4 transition-all duration-300 group-hover:ring-8 ${
                          index === 0 ? "ring-main-1/20 group-hover:ring-main-1/30" : "ring-main-3/20 group-hover:ring-main-3/30"
                        }`}
                      >
                        <img src={member.photo} alt={member.alt} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      {/* Experience Badge */}
                      <div className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg ${index === 0 ? "bg-main-1" : "bg-main-3"}`}>{member.experience}</div>
                    </div>

                    {/* Basic Info */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-darkColor dark:text-lightColor leading-tight mb-1 group-hover:text-main-2 dark:group-hover:text-main-1 transition-colors duration-300">{member.name}</h3>
                        <p className={`font-semibold text-lg mb-2 ${index === 0 ? "text-main-1" : "text-main-3"}`}>{member.position}</p>
                        <p className="text-sm text-darkColor/60 dark:text-lightColor/60 font-medium">{member.specialty}</p>
                      </div>

                      {/* Quick Stats */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-darkColor/70 dark:text-lightColor/70">
                          <FiAward className="w-4 h-4" />
                          <span>{member.certifications.length} Certs</span>
                        </div>
                        <div className="w-1 h-1 bg-darkColor/30 dark:bg-lightColor/30 rounded-full"></div>
                        <div className="flex items-center gap-2 text-sm text-darkColor/70 dark:text-lightColor/70">
                          <FiBookOpen className="w-4 h-4" />
                          <span>Advanced Degree</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-6">
                    <p className="text-darkColor/80 dark:text-lightColor/80 leading-relaxed text-sm">{member.summary}</p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 ${
                            index === 0 ? "bg-main-1/10 text-main-1 group-hover:bg-main-1/20" : "bg-main-3/10 text-main-3 group-hover:bg-main-3/20"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 2 && (
                        <span className="px-3 py-1.5 bg-secondaryGray/50 dark:bg-darkColor/50 rounded-full text-xs text-darkColor/60 dark:text-lightColor/60 font-medium">+{member.expertise.length - 2} more</span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-end">
                    <div className="opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                      <div
                        className={`flex items-center gap-2 font-semibold text-sm group/btn px-4 py-2.5 rounded-xl transition-all duration-300 ${
                          index === 0 ? "bg-main-1/10 text-main-1 hover:bg-main-1/20 hover:shadow-lg hover:shadow-main-1/25" : "bg-main-3/10 text-main-3 hover:bg-main-3/20 hover:shadow-lg hover:shadow-main-3/25"
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
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-main-1/10 to-main-1/5 dark:from-main-1/20 dark:to-main-1/10 rounded-2xl hover:from-main-1/20 hover:to-main-1/10 dark:hover:from-main-1/30 dark:hover:to-main-1/20 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-main-1 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FiMail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-darkColor dark:text-lightColor">Email</p>
                        <p className="text-xs text-darkColor/60 dark:text-lightColor/60">Send a message</p>
                      </div>
                    </a>
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
                    <h4 className="text-xl font-bold text-main-2 dark:text-main-1 mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 bg-main-2 dark:bg-main-1 rounded-lg"></div>
                      Professional Background
                    </h4>
                    <p className="text-darkColor/80 dark:text-lightColor/80 leading-relaxed text-lg">{selectedMember.bio}</p>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="text-xl font-bold text-main-2 dark:text-main-1 mb-6 flex items-center gap-2">
                      <div className="w-6 h-6 bg-main-3 rounded-lg"></div>
                      Areas of Expertise
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedMember.expertise.map((skill, index) => (
                        <div
                          key={index}
                          className="group flex items-center gap-3 p-4 bg-gradient-to-r from-main-1/5 to-main-3/5 dark:from-main-1/10 dark:to-main-3/10 rounded-xl hover:from-main-1/10 hover:to-main-3/10 dark:hover:from-main-1/20 dark:hover:to-main-3/20 transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-main-3 rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                          <span className="text-darkColor dark:text-lightColor font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education & Certifications */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-main-2 dark:text-main-1 mb-4 flex items-center gap-2">
                        <FiBookOpen className="w-5 h-5" />
                        Education
                      </h4>
                      <div className="p-4 bg-gradient-to-br from-main-1/5 to-transparent dark:from-main-1/10 rounded-xl">
                        <p className="text-darkColor/80 dark:text-lightColor/80 leading-relaxed">{selectedMember.education}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-main-2 dark:text-main-1 mb-4 flex items-center gap-2">
                        <FiAward className="w-5 h-5" />
                        Certifications
                      </h4>
                      <div className="space-y-3">
                        {selectedMember.certifications.map((cert, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-gradient-to-r from-main-3/5 to-transparent dark:from-main-3/10 rounded-xl group hover:from-main-3/10 dark:hover:from-main-3/20 transition-all duration-300"
                          >
                            <div className="w-3 h-3 bg-main-3 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="text-sm text-darkColor dark:text-lightColor font-medium">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
