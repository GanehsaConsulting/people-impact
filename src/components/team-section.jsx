"use client"

import { useEffect, useState } from 'react';
import { FiArrowRight, FiX, FiLinkedin, FiMail } from 'react-icons/fi';
import { Title } from './ui/title';

export const TeamSection = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = [
        {
            id: 1,
            name: "Lady Meiske",
            position: "Managing Partner",
            photo: "https://cms-ganesha.ganeshaconsulting.co.id/uploads/Meiske_cc2fb34123.webp",
            alt: "Lady Meiske Photo",
            bio: "Lady is a seasoned HR professional with 12+ years of experience in talent acquisition, employee engagement, and HR technology implementation. She has extensive experience in scaling HR operations for rapidly growing companies and implementing innovative HR solutions.",
            expertise: ["Talent Acquisition", "Employee Engagement", "HR Technology", "Performance Management"],
            education: "Bachelor's in Psychology, Master's in Business Administration",
            certifications: ["PHR Certified", "Certified Talent Management Professional", "Agile HR Practitioner"],
            email: "lady@example.com",
            linkedin: "https://linkedin.com/in/lady-meiske"
        },
        {
            id: 2,
            name: "Siska Rajagukguk",
            position: "Managing Partner",
            photo: "https://cms-ganesha.ganeshaconsulting.co.id/uploads/Siska_bb0f49beb9.webp",
            alt: "Siska Rajagukguk Photo",
            bio: "Siska brings over 15 years of comprehensive HR experience, specializing in organizational development, talent management, and strategic HR consulting. She has successfully led HR transformations for Fortune 500 companies and has a proven track record in building high-performance teams.",
            expertise: ["Strategic HR Planning", "Organizational Development", "Leadership Development", "Change Management"],
            education: "Master's in Human Resources Management, University of Indonesia",
            certifications: ["SHRM-SCP", "Certified Executive Coach", "Six Sigma Black Belt"],
            email: "siska@example.com",
            linkedin: "https://linkedin.com/in/siska-rajagukguk"
        },

    ];

    const openModal = (member) => {
        setSelectedMember(member);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedMember(null);
        document.body.style.overflow = 'unset';
    };

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (selectedMember) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [selectedMember]);

    return (
        <>
            <section className="margin spacing">
                <div >


                    {/* Team Grid */}
                    <div className="grid md:grid-cols-3 gap-3">
                        {/* Header */}
                        <div className="mb-12 space-y-3 p-6 bg-sec-1/30 rounded-main h-full flex flex-col justify-between">
                            <Title>
                                Our Team
                            </Title>
                            <p className="text-darkColor/70 dark:text-lightColor/70 leading-relaxed">
                                Our team is spearheaded by two accomplished HR professionals, Siska Rajagukguk and Lady Meiske,
                                along with our diverse and highly skilled team of HR professionals. Each member brings a wealth of
                                experience, expertise, and dedication, ensuring that we deliver exceptional HR consulting services
                                tailored to your needs.
                            </p>
                        </div>
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="h-150 group relative overflow-hidden rounded-main bg-white dark:bg-gray-800 transition-transform transform hover:-translate-y-3 cursor-pointer duration-300"
                                onClick={() => openModal(member)}
                            >
                                <img
                                    src={member.photo}
                                    alt={member.alt}
                                    className="w-full h-full object-cover rounded-main"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 linear-blur-to-t w-full h-80"></div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-main-2 dark:from-sec-2 to-transparent w-full h-80"></div>

                                {/* Read More Button */}
                                <div className="text-sm absolute bottom-3 left-5 translate-y-[150%] group-hover:-translate-y-3 duration-500 ease-in-out px-3 py-2 bg-lightColor/20 dark:bg-darkColor/30 rounded-full backdrop-blur-md inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium group/btn">
                                    Read more
                                    <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                </div>

                                {/* Content */}
                                <div className="group-hover:-translate-y-10 duration-300 ease-in-out min-h-20 absolute bottom-0 left-0 right-0 p-6 rounded-b-main text-white drop-shadow">
                                    <h3 className="text-2xl font-semibold leading-tight">{member.name}</h3>
                                    <p className="text-lg opacity-80">{member.position}</p>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedMember && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    style={{ backdropFilter: 'blur(2px)' }}
                    onClick={closeModal}
                >
                    <div
                        className="bg-white dark:bg-secondaryDark rounded-main max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        style={{ boxShadow: 'var(--shadow-black)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-white dark:bg-secondaryDark border-b border-secondaryLight dark:border-darkColor p-6 flex items-center justify-between rounded-t-main">
                            <h3 className="text-2xl font-bold text-darkColor dark:text-lightColor">
                                {selectedMember.name}
                            </h3>
                            <button
                                onClick={closeModal}
                                className="w-10 h-10 rounded-secondary bg-secondaryGray dark:bg-darkColor flex items-center justify-center hover:bg-secondaryLight dark:hover:bg-main-5 transition-colors duration-200"
                            >
                                <FiX className="w-5 h-5 text-darkColor dark:text-lightColor" />
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Photo */}
                                <div className="md:col-span-1">
                                    <div className="aspect-square rounded-main overflow-hidden" style={{ boxShadow: 'var(--shadow-secondaryShadow)' }}>
                                        <img
                                            src={selectedMember.photo}
                                            alt={selectedMember.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Contact Info */}
                                    <div className="mt-6 space-y-3">
                                        <a
                                            href={`mailto:${selectedMember.email}`}
                                            className="flex items-center gap-3 p-3 bg-secondaryGray dark:bg-darkColor rounded-secondary hover:bg-main-1/10 dark:hover:bg-main-1/20 transition-colors duration-200"
                                        >
                                            <FiMail className="w-5 h-5 text-main-3" />
                                            <span className="text-sm text-darkColor dark:text-lightColor">Email</span>
                                        </a>
                                        <a
                                            href={selectedMember.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-3 bg-secondaryGray dark:bg-darkColor rounded-secondary hover:bg-main-3/10 dark:hover:bg-main-3/20 transition-colors duration-200"
                                        >
                                            <FiLinkedin className="w-5 h-5 text-main-3" />
                                            <span className="text-sm text-darkColor dark:text-lightColor">LinkedIn</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="md:col-span-2 space-y-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-main-2 dark:text-main-1 mb-2">
                                            {selectedMember.position}
                                        </h4>
                                        <p className="text-darkColor/80 dark:text-lightColor/80 leading-relaxed">
                                            {selectedMember.bio}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-main-2 dark:text-main-1 mb-3">
                                            Areas of Expertise
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {selectedMember.expertise.map((skill, index) => (
                                                <div
                                                    key={index}
                                                    className="px-3 py-2 bg-main-1/10 dark:bg-main-1/20 rounded-third text-sm text-darkColor dark:text-lightColor"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-main-2 dark:text-main-1 mb-2">
                                            Education
                                        </h4>
                                        <p className="text-darkColor/80 dark:text-lightColor/80">
                                            {selectedMember.education}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-main-2 dark:text-main-1 mb-3">
                                            Certifications
                                        </h4>
                                        <div className="space-y-2">
                                            {selectedMember.certifications.map((cert, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2 text-darkColor/80 dark:text-lightColor/80"
                                                >
                                                    <div className="w-2 h-2 bg-main-3 rounded-full flex-shrink-0"></div>
                                                    <span className="text-sm">{cert}</span>
                                                </div>
                                            ))}
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