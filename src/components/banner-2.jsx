import { Button } from "./ui/button"
import { MdArrowDownward, MdArrowOutward } from "react-icons/md";

export const BannerTwo = () => {
    return (
        <>
            <main className="mx-2 my-4 h-[90vh] relative overflow-hidden flex flex-col">
                <img
                    className="w-full h-[90vh] object-cover rounded-main"
                    src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <div className="absolute bottom-0 right-0 left-0 rounded-b-main w-full h-[100%] bg-gradient-to-t from-main-5/80 via-main-2/40 to-transparent" />
                <div className="absolute bottom-2 left-2">
                    <div className="m-5 text-white space-y-5">
                        <h1 className=" text-4xl md:text-5xl font-medium tracking-tighter drop-shadow-2xl">
                            Empowering People
                            <br />
                            Transforming Organizations.
                        </h1>
                        <p className="max-w-2xl text-sm leading-4.5 opacity-80">
                           At People Impact, we recognized that every organization is distinct, which is why we adopt a tailored approach for each engagement. By gaining a thorough understanding of your goals, challenges, and opportunities, we create customized solutions that align perfectly with your vision for success. Our comprehensive methodology integrates business strategy, leadership development, and process optimization, empowering our clients to flourish in a competitive environment.
                        </p>
                        <div className="space-x-2">
                            <Button
                            className={"bg-lightColor dark:bg-darkColor"}
                            >
                                Enquire Now
                                <MdArrowOutward />
                            </Button>
                            <Button
                                variant={"glass"}
                            >
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute bottom-3 right-3">
                    <div className="max-w-[280px] font-medium bg-white/40 rounded-secondary p-3 backdrop-blur-sm">
                        <img
                            className="object-cover h-[30vh] w-full rounded-third"
                            src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                        <p className="text-[16px] mt-2 leading-5 opacity-80">
                            Tailored strategies, leadership growth, and process excellence—empowering your organization to thrive.
                        </p>
                    </div>
                </div> */}
            </main>
        </>
    )
}