import { Button } from "./ui/button"
import { MdArrowDownward, MdArrowOutward } from "react-icons/md";

export const Banner = () => {
    return (
        <>
            <main className="">
                <setion className="flex flex-col justify-between h-screen gap-10 mx-5 pt-20 pb-5">
                    <div className="grow flex flex-col items-center justify-center gap-5 text-center">
                        <h1 className="text-main-2 text-4xl md:text-5xl font-medium tracking-tighter">
                            Empowering People
                            <br />
                            Transforming Organizations.
                        </h1>
                        <p className="max-w-4xl">
                            People Impact delivers tailored solutions that align with your unique goals—combining business strategy, leadership development, and process optimization to drive success.
                        </p>
                        <div className="space-x-2">
                            <Button
                            >
                                Enquire Now
                                <MdArrowOutward />
                            </Button>
                            <Button
                                variant={"outline"}
                            >
                                Explore
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            className="h-[50vh] w-full object-cover rounded-main mt-auto"
                            src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <div className="absolute bottom-3 left-3">
                            <p className="max-w-sm font-medium bg-white/60 rounded-secondary px-3 py-2 backdrop-blur-md">
                                Tailored strategies, leadership growth, and process excellence—empowering your organization to thrive.
                            </p>
                        </div>
                    </div>

                </setion>
            </main>
        </>
    )
}