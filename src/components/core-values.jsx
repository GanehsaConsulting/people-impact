import React from 'react';
import { FiZap, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { Title } from './ui/title';

export const CoreValues = () => {
    const coreValues = [
        {
            id: 1,
            title: "Innovation & Sustainability",
            description: "We embrace forward-thinking strategies that challenge the status quo while creating solutions that address immediate challenges and foster long-term growth.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Innovation & Sustainability",
            icon: FiZap,
            color: "text-main-1"
        },
        {
            id: 2,
            title: "Integrity & Collaboration",
            description: "We build meaningful partnerships with our clients based on transparency, honesty, and trust, working closely together to achieve shared success.",
            image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Integrity & Collaboration",
            icon: FiUsers,
            color: "text-main-3"
        },
        {
            id: 3,
            title: "Empowerment",
            description: "We empower individuals and teams to take ownership of their growth, enabling them to actively contribute to the organization's success.",
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Empowerment",
            icon: FiTrendingUp,
            color: "text-sec-3"
        }
    ];

    return (
        <section className="margin spacing">
            <div className="">
                {/* Header */}
                <div className="text-center mb-12 space-y-3">

                    <Title>
                        Our Core Values
                    </Title>
                    <p className="text-darkColor/70 dark:text-lightColor/70 max-w-2xl mx-auto">
                        The principles that guide our work and define our commitment to excellence
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {coreValues.map((value) => {
                        const IconComponent = value.icon;
                        return (
                            <div className='bg-lightColor dark:bg-darkColor transition-colors duration-300 p-6 rounded-main flex flex-col items-center text-center' key={value.id}  >
                                <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-black ${value.color} mb-4`}>
                                    <IconComponent className="w-5.5 h-5.5" />
                                </div>
                                <h3 className="text-xl font-semibold text-darkColor dark:text-lightColor mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};