import { About } from "@/components/about-us";
import { OurStory } from "@/components/our-story";
import { ReBanner } from "@/components/re-banner";

export default function AboutUs() {
    return (
        <>
            <ReBanner
                title="Get To Know Us"
                imageSrc="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt="Office workspace"
            />
            <About />
            <OurStory />
        </>
    )
}