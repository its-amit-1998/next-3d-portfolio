import { useEffect, useState } from 'react'

type Props = {
    isActive: boolean
};

const HomeVideo = ({ isActive }: Props) => {
    const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);
    const [playVideo, setPlayVidieo] = useState<boolean>(false);
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        setIsPageLoaded(true);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`main bg-white ${isActive ? "md:mt-0" : "md:-mt-40"}`}>
            <div className="main__image relative">
                <div className={`image-sub w-screen min-h-[35vh] md:h-screen relative overflow-hidden scale-100 transform duration-500 ease-out ${isActive ? "md:scale-100" : "md:scale-75"}`}>
                    <iframe title="nexTech3D" className="vimeo-main-video z-[2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://player.vimeo.com/video/821037821?h=5b0c8dac09?autoplay=1&amp;loop=1&amp;muted=1&amp;autopause=0&amp;background=1&amp;color=ffffff&amp;controls=2&amp;portrait=0" width={screenSize.width} height={screenSize.width >= 770 ? window.innerWidth : screenSize.height} allowFullScreen frameBorder={0} allow="autoplay; allowFullScreen; picture-in-picture; encrypted-media" style={{ display: playVideo ? "none" : "block" }} data-ready="true" >
                    </iframe>
                    <div className="vimeo-main-wrap cursor-pointer absolute top-0 left-0 w-full md:h-[calc(100%-150px)] z-[4]"
                        onClick={() => setPlayVidieo(true)} />
                    <iframe className={`vimeo-main-wrap-video ${playVideo ? "z-[6] opacity-100" : "z-[1] opacity-0"} !w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} title="nexTech3D reel" src={`https://player.vimeo.com/video/821037821?controls=true&autoplay=${playVideo ? "true" : "false"}&loop=true&transparent=true&autopause=false&muted=false&playsinline=true&muted=1&quality=720p`} width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen scrolling="no" data-ready="true">
                    </iframe>
                    <div className="vimeo-play-btn flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] bg-white border-[0.5px] border-black rounded-[50%] w-[70px] h-[70px]"
                        onClick={() => setPlayVidieo(true)} >
                        <div className="triangle border-y-[0.375rem] border-y-transparent border-l-[0.75rem] border-l-black transform translate-x-0.5 translate-y-0.5 opacity-50" />
                    </div>
                </div>
            </div>

            <div className={`presentation text-center mt-5 sm:mt-20 w-full block sm:hidden opacity-100 hover:opacity-80 transfrom duration-500 delay-200 ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>
                <a href="https://qclay.design/QClayCapabilitiesDeck.pdf" target="_blank" rel="noreferrer" className="bg-[#e8e8e8] text-black text-sm sm:text-xs font-normal rounded-3xl whitespace-nowrap px-20 sm:px-2 py-2 sm:py-1">Our Capabilities Deck</a>
            </div>
        </div>
    )
}

export default HomeVideo