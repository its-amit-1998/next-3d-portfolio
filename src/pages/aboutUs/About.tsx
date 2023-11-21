import { RefObject, useEffect, useState } from 'react'

type Props = {
    cursorPointRef: RefObject<HTMLDivElement>;
};

const About = ({ cursorPointRef }: Props) => {
    const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);
  

    useEffect(() => {
        setIsPageLoaded(true);
    }, []);

    return (
        <div className="section active absolute top-0 left-0 w-full h-full pt-14 sm:pt-24 bg-white"
            >
            <div className="section__inner relative w-fit h-screen">
                <div className="main min-h-screen ">
                    <div className="main__content px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative flex flex-col sm:flex-row justify-between w-full h-screen">
                        {/* <div className="texts font-semibold md:font-medium font-serif w-full flex sm:flex-col justify-center"> */}
                          
                            <h1 className="title font-serif w-full hidden sm:flex flex-col justify-start items-start text-4xl">
                                <span className={`transfrom duration-500 delay-0 ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>What About</span>
                                <span className={`transfrom duration-500 delay-[50ms] ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>Next tech?</span>
                            </h1>
                        {/* </div> */}
                        
                    </div>

                    <div className="main__image relative mt-20">
                       </div>

                </div>




            </div>
        </div>
    )
}

export default About