type Props = {
    isActive: boolean;
};

const About = ({ isActive }: Props) => {

    return (
        <div className="section__inner relative w-full h-full text-center">
            <div className="main__content px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative flex flex-col sm:flex-row justify-between w-full h-full">
                <div className="texts font-medium md:font-semibold w-full h-full flex sm:flex-col justify-center md:items-center">
                    <h1 className="title w-full flex flex-col justify-end md:justify-start items-start md:items-center text-4xl md:text-7xl">
                        <span
                            style={{ transition: "transform 500ms 100ms, opacity 600ms 100ms" }}
                            className={`${isActive ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>What About</span>
                        <span
                            style={{ transition: "transform 500ms 150ms, opacity 600ms 150ms" }}
                            className={`${isActive ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>Next tech?</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default About