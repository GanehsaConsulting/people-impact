import { FaStarOfLife } from "react-icons/fa6";
import { IoLogoPolymer } from "react-icons/io";
import { IoLogoTableau } from "react-icons/io5";
import { PiCodaLogoFill } from "react-icons/pi";
import { BiLogoPatreon } from "react-icons/bi";
import { BiLogoOpera } from "react-icons/bi";
import { Title } from "./ui/title";

const partners = [
    { name: "Star Inc", logo: <FaStarOfLife /> },
    { name: "Polymer", logo: <IoLogoPolymer /> },
    { name: "Tabiz", logo: <IoLogoTableau /> },
    { name: "Coda", logo: <PiCodaLogoFill /> },
    { name: "Patrom", logo: <BiLogoPatreon /> },
    { name: "Ortsz", logo: <BiLogoOpera /> },
];

export const Partners = () => {
    return (
        <>
            <section className="margin space-y-5 spacing">
                <div className="mb-10">
                    <Title>
                        Our Trusted Partner
                    </Title>
                </div>
                <div className="w-full md:h-full h-fit dark:bg-darkColor bg-lightColor py-4 md:py-8 space-y-6 rounded-lg">
                    <div className="flex flex-wrap md:flex-nowrap p-3 md:p-0 items-center justify-evenly gap-6 h-fit">
                        {partners.map((el, idx) => (
                            <div key={idx} className="flex flex-col items-center text-5xl md:text-7xl space-y-2 duration-300 ease-in-out hover:scale-105">
                                {el.logo}
                                <h1 className="text-sm md:text-xl font-black text-center text-balance tracking-tighter opacity-95">
                                    {el.name}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}