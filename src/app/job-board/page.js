import { JobBoard } from "@/components/job-board";
import { ReBanner } from "@/components/re-banner";

export default function JobBoardPage() {
    return (
        <>
            <ReBanner
                imageClassName="object-center"
                title="Job Board"
                imageSrc="https://images.unsplash.com/photo-1653038417332-6db0ff9d4bfb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt="Job Board"
            />
            <JobBoard />
        </>
    )
}