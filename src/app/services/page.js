import AllServicesPage from "@/components/all-services-page";
import { ReBanner } from "@/components/re-banner";

export const metadata = {
    title: 'Our Services - People Impact',
    description: 'Comprehensive HR consulting solutions designed to transform your organization and drive sustainable business growth.',
};

export default function ServicesPage() {
    return (
        <>
            <ReBanner
                title="Explore Our Services"
                imageSrc="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt="Office workspace"
                subtitle={"Comprehensive HR consulting solutions designed to transform your organization, enhance employee engagement, and drive sustainable business growth."}
            />
            <AllServicesPage />
        </>
    )
}