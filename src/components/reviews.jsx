"use client"
import { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from './ui/button';

const clientReviews = [
    {
        name: "Sarah Wibowo",
        company: "PT Astra Graphia",
        rating: 5,
        review: "People Impact helped us unlock the full potential of our leadership team. Their approach was practical, insightful, and transformative.",
    },
    {
        name: "Budi Santoso",
        company: "Bank Mandiri",
        rating: 4,
        review: "Their tailored strategies fit perfectly with our organizational goals. Very professional and responsive team.",
    },
    {
        name: "Intan Prameswari",
        company: "Gojek Indonesia",
        rating: 5,
        review: "We saw real, measurable results after partnering with People Impact. Highly recommended for companies going through change.",
    },
    {
        name: "Ahmad Rizal",
        company: "Telkom Indonesia",
        rating: 5,
        review: "They truly understand how to optimize human capital. Great insights and impactful delivery.",
    },
    {
        name: "Cynthia Halim",
        company: "Shopee Indonesia",
        rating: 4,
        review: "Our experience with People Impact was seamless. Their team brought clarity and structure to our leadership journey.",
    },
    {
        name: "James Tanuwijaya",
        company: "Traveloka",
        rating: 5,
        review: "A partner that listens and delivers. Their custom approach made a huge difference in our transformation efforts.",
    },
    {
        name: "Devi Rahmadani",
        company: "Bank BCA",
        rating: 4,
        review: "Professional team with a deep understanding of organizational dynamics. Great experience overall.",
    },
    {
        name: "Hendro Wijaya",
        company: "Bukalapak",
        rating: 5,
        review: "We appreciated their attention to detail and strong facilitation during our leadership development program.",
    },
    {
        name: "Maria Kristanti",
        company: "Pertamina",
        rating: 5,
        review: "Exceptional service and results. People Impact brought energy and innovation to our HR initiatives.",
    },
    {
        name: "Yusuf Kurniawan",
        company: "Indofood",
        rating: 4,
        review: "Their training was engaging, relevant, and impactful. Our team benefited greatly.",
    },
    {
        name: "Rina Agustina",
        company: "Danone Indonesia",
        rating: 5,
        review: "People Impact is a valuable partner in building future-ready leaders. Their approach is grounded and effective.",
    },
    {
        name: "Kevin Wijaya",
        company: "Unilever Indonesia",
        rating: 4,
        review: "Strong content and excellent facilitation. Would definitely work with them again.",
    },
    {
        name: "Dewi Kartika",
        company: "CIMB Niaga",
        rating: 5,
        review: "They go beyond surface-level training—what we got was a real shift in mindset and behavior.",
    },
    {
        name: "Agus Rahmat",
        company: "PLN",
        rating: 5,
        review: "Professional, adaptive, and effective. They helped us through an important transition period with clarity and confidence.",
    },
    {
        name: "Sinta Marlina",
        company: "Grab Indonesia",
        rating: 4,
        review: "Collaborative, client-focused, and always prepared. The People Impact team exceeded our expectations.",
    },
];



export const Reviews = () => {
    const [carouselRef, setCarouselRef] = useState(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const updateCarouselPosition = () => {
        if (carouselRef) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef;
            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
        }
    };
    
    return (
        <main className="spacing space-y-5">
            <div className="margin flex justify-between items-center">
                <h1 className="text-4xl tracking-tight">
                    What Our Clients Say
                </h1>
                <div className="flex items-center gap-2">
                    <Button
                        size={"icon"}
                        variant={"glassColor"}
                        onClick={() => carouselRef?.scrollBy({ left: -320, behavior: "smooth" })}
                        disabled={isAtStart}
                        className={`${isAtStart ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'} rounded-full`}
                    >
                        <IoIosArrowBack />
                    </Button>
                    <Button
                        size={"icon"}
                        variant={"glassColor"}
                        className={`rotate-180 ${isAtEnd ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'} rounded-full`}
                        onClick={() => carouselRef?.scrollBy({ left: 320, behavior: "smooth" })}
                        disabled={isAtEnd}
                    >
                        <IoIosArrowBack />
                    </Button>
                </div>
            </div>
            <section 
                ref={ref => setCarouselRef(ref)}
                onScroll={updateCarouselPosition}
                className="carousel w-full gap-3"
            >
                {clientReviews.map((el, idx) => (
                    <div
                        key={idx}
                        className={`
                        ${idx == 0 && "ml-5 md:ml-15"} ${clientReviews.length - 1 == idx && "mr-5 md:mr-15"}
                        min-w-[30vh] p-4 rounded-main bg-lightColor dark:bg-darkColor flex flex-col
                        `}>
                        <div className="flex items-start mb-20">
                            {[...Array(el.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-500">
                                    <FaStar />
                                </span>
                            ))}
                            {[...Array(5 - el.rating)].map((_, i) => (
                                <span key={i} className="text-baseColorDark/30 dark:text-baseColorLight/40">
                                    <FaStar />
                                </span>
                            ))}
                        </div>
                        <div className="text-main-2 dark:text-main-1 flex items-center gap-2 mb-2">
                            <h2 className="text-xl font-semibold">{el.name}</h2>
                        </div>
                        <p className="text-[15px] leading-5.5">{el.review}</p>
                    </div>
                ))}
            </section>
        </main>
    );
};