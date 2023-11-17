import { RefObject, useEffect, useState } from 'react'

type Props = {
    cursorPointRef: RefObject<HTMLDivElement>;
};

const Home = ({ cursorPointRef }: Props) => {
    const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);
    const [mouseCoordinateMove, setMouseCoordinateMove] = useState<boolean>(false);
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


    useEffect(() => {
        const handleMouseMove = () => {
            setMouseCoordinateMove(true);
            const timeout = setTimeout(() => {
                setMouseCoordinateMove(false);
            }, 500);

            return () => clearTimeout(timeout);
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    return (
        <div
            style={{ transform: 'translate(0, -100%)' }}
            className="section active absolute top-full left-0 w-full h-full pt-14 sm:pt-24 bg-white">
            <div
                style={{ transform: 'translate(0, 0px)' }}
                className="section__inner relative w-full">
                <div className="main py-20 md:py-44 bg-white min-h-screen !pb-0" id="home">
                    <div className="main__content px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative flex flex-col sm:flex-row justify-between w-full">
                        <div className="texts font-semibold md:font-medium font-serif w-full flex sm:flex-col justify-center">
                            <div className="title__mobile w-fit flex flex-col justify-center items-start sm:hidden text-xl">
                                <span className={`transfrom duration-500 delay-0 ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>Global design agency that</span>
                                <span className={`transfrom  duration-500 delay-[50ms] ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>creates holistic, well-balanced</span>
                                <span className={`transfrom duration-500 delay-100 ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>design solutions for inspiring</span>
                                <span className={`transfrom duration-500 delay-150 ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>brands</span>
                            </div>
                            <h1 className="title__desktop w-full hidden sm:flex flex-col justify-start items-start text-4xl">
                                <span className={`transfrom duration-500 delay-0 ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>Global design agency that creates</span>
                                <span className={`transfrom duration-500 delay-[50ms] ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>holistic, well-balanced design</span>
                                <span className={`transfrom duration-500 delay-100 ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>solutions for inspiring brands</span>
                            </h1>
                            <div className="main__row hidden sm:flex items-center pt-7">
                                <div className="main__clutch pr-16">
                                    <div className="clutch flex items-center">
                                        <img src="./next-3d-portfolio/images/clutch.svg" alt="clutch" className="clutch__icon w-9" />
                                        <div className="clutch__block pl-2.5">
                                            <div className="clutch__stars flex">
                                                <img src="./next-3d-portfolio/images/star.svg" alt="star" className="overflow-clip over" />
                                                <img src="./next-3d-portfolio/images/star.svg" alt="star" className="overflow-clip over" />
                                                <img src="./next-3d-portfolio/images/star.svg" alt="star" className="overflow-clip over" />
                                                <img src="./next-3d-portfolio/images/star.svg" alt="star" className="overflow-clip over" />
                                                <img src="./next-3d-portfolio/images/star.svg" alt="star" className="overflow-clip over" />
                                            </div>
                                            <p className="clutch__text text-black block font-medium mt-1">Rating 5, 24 reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <span className="subtitle w-96 text-gray-400 text-sm xl:text-base font-medium flex flex-col">
                                    <span className="animate-[home-subtitle-animation_.5s_ease_.6s_both]">WEB DEVELOPMENT / BRANDING / UX / UI /</span>
                                    <span className="animate-[home-subtitle-animation_.5s_ease_.7s_both] ">3D&nbsp;MODELING /ILLUSTRATION / STRATEGY</span>
                                </span>
                            </div>
                        </div>

                        <div className="points hidden md:flex flex-col items-center">
                            <div className="eye animate-eye-animation">
                                <svg width="133" height="130" viewBox="0 0 133 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="-not-active">
                                    <rect className="eye-text animate-spin-slow duration-500 origin-center" x="0.355469" width="131.646" height="130" fill="url(#pattern-/images/text.webp)"></rect>
                                    <path d="M71.9811 43.6721C72.1605 43.3833 72.3275 43.0836 72.4433 42.8104C73.1008 41.2592 72.8811 38.7379 72.7701 37.8114C72.7455 37.6059 72.8696 37.4102 73.0674 37.3496C73.2887 37.2818 73.5215 37.4064 73.5811 37.63C73.8422 38.6092 74.4634 41.1623 74.3671 42.9563C74.3377 43.5029 74.2311 44.1785 74.1219 44.7593C73.9907 45.4568 73.2647 45.8505 72.5959 45.6132C71.8186 45.3373 71.5456 44.3726 71.9811 43.6721Z" fill="#212123"></path>
                                    <path d="M71.9811 43.6721C72.1605 43.3833 72.3275 43.0836 72.4433 42.8104C73.1008 41.2592 72.8811 38.7379 72.7701 37.8114C72.7455 37.6059 72.8696 37.4102 73.0674 37.3496C73.2887 37.2818 73.5215 37.4064 73.5811 37.63C73.8422 38.6092 74.4634 41.1623 74.3671 42.9563C74.3377 43.5029 74.2311 44.1785 74.1219 44.7593C73.9907 45.4568 73.2647 45.8505 72.5959 45.6132C71.8186 45.3373 71.5456 44.3726 71.9811 43.6721Z" fill="#212123"></path>
                                    <path d="M71.9811 43.6721C72.1605 43.3833 72.3275 43.0836 72.4433 42.8104C73.1008 41.2592 72.8811 38.7379 72.7701 37.8114C72.7455 37.6059 72.8696 37.4102 73.0674 37.3496C73.2887 37.2818 73.5215 37.4064 73.5811 37.63C73.8422 38.6092 74.4634 41.1623 74.3671 42.9563C74.3377 43.5029 74.2311 44.1785 74.1219 44.7593C73.9907 45.4568 73.2647 45.8505 72.5959 45.6132C71.8186 45.3373 71.5456 44.3726 71.9811 43.6721Z" fill="#212123"></path>
                                    <path d="M71.9811 43.6721C72.1605 43.3833 72.3275 43.0836 72.4433 42.8104C73.1008 41.2592 72.8811 38.7379 72.7701 37.8114C72.7455 37.6059 72.8696 37.4102 73.0674 37.3496C73.2887 37.2818 73.5215 37.4064 73.5811 37.63C73.8422 38.6092 74.4634 41.1623 74.3671 42.9563C74.3377 43.5029 74.2311 44.1785 74.1219 44.7593C73.9907 45.4568 73.2647 45.8505 72.5959 45.6132C71.8186 45.3373 71.5456 44.3726 71.9811 43.6721Z" fill="#212123"></path>
                                    <path d="M95.9168 53.0736C96.2306 52.9425 96.5405 52.7953 96.7933 52.64C98.2288 51.7582 99.5129 49.5773 99.9602 48.7583C100.059 48.5767 100.274 48.4893 100.47 48.5547C100.69 48.6279 100.807 48.8644 100.726 49.0811C100.37 50.0301 99.3948 52.4699 98.2754 53.8751C97.9343 54.3033 97.4555 54.7916 97.0295 55.2013C96.518 55.6932 95.6982 55.5926 95.2913 55.0112C94.8183 54.3355 95.1557 53.3915 95.9168 53.0736Z" fill="#212123"></path>
                                    <path d="M95.9168 53.0736C96.2306 52.9425 96.5405 52.7953 96.7933 52.64C98.2288 51.7582 99.5129 49.5773 99.9602 48.7583C100.059 48.5767 100.274 48.4893 100.47 48.5547C100.69 48.6279 100.807 48.8644 100.726 49.0811C100.37 50.0301 99.3948 52.4699 98.2754 53.8751C97.9343 54.3033 97.4555 54.7916 97.0295 55.2013C96.518 55.6932 95.6982 55.5926 95.2913 55.0112C94.8183 54.3355 95.1557 53.3915 95.9168 53.0736Z" fill="#212123"></path>
                                    <path d="M95.9168 53.0736C96.2306 52.9425 96.5405 52.7953 96.7933 52.64C98.2288 51.7582 99.5129 49.5773 99.9602 48.7583C100.059 48.5767 100.274 48.4893 100.47 48.5547C100.69 48.6279 100.807 48.8644 100.726 49.0811C100.37 50.0301 99.3948 52.4699 98.2754 53.8751C97.9343 54.3033 97.4555 54.7916 97.0295 55.2013C96.518 55.6932 95.6982 55.5926 95.2913 55.0112C94.8183 54.3355 95.1557 53.3915 95.9168 53.0736Z" fill="#212123"></path>
                                    <path d="M95.9168 53.0736C96.2306 52.9425 96.5405 52.7953 96.7933 52.64C98.2288 51.7582 99.5129 49.5773 99.9602 48.7583C100.059 48.5767 100.274 48.4893 100.47 48.5547C100.69 48.6279 100.807 48.8644 100.726 49.0811C100.37 50.0301 99.3948 52.4699 98.2754 53.8751C97.9343 54.3033 97.4555 54.7916 97.0295 55.2013C96.518 55.6932 95.6982 55.5926 95.2913 55.0112C94.8183 54.3355 95.1557 53.3915 95.9168 53.0736Z" fill="#212123"></path>
                                    <path d="M58.8332 44.3817C58.6928 44.1559 58.5622 43.9215 58.4717 43.7078C57.9575 42.4948 58.1293 40.523 58.2161 39.7985C58.2353 39.6378 58.1383 39.4848 57.9836 39.4374C57.8105 39.3844 57.6285 39.4817 57.5819 39.6566C57.3777 40.4224 56.8919 42.419 56.9672 43.8219C56.9902 44.2494 57.0736 44.7777 57.159 45.2319C57.2615 45.7774 57.8293 46.0853 58.3523 45.8997C58.9602 45.6839 59.1737 44.9295 58.8332 44.3817Z" fill="#212123"></path>
                                    <path d="M58.8332 44.3817C58.6928 44.1559 58.5622 43.9215 58.4717 43.7078C57.9575 42.4948 58.1293 40.523 58.2161 39.7985C58.2353 39.6378 58.1383 39.4848 57.9836 39.4374C57.8105 39.3844 57.6285 39.4817 57.5819 39.6566C57.3777 40.4224 56.8919 42.419 56.9672 43.8219C56.9902 44.2494 57.0736 44.7777 57.159 45.2319C57.2615 45.7774 57.8293 46.0853 58.3523 45.8997C58.9602 45.6839 59.1737 44.9295 58.8332 44.3817Z" fill="#212123"></path>
                                    <path d="M58.8332 44.3817C58.6928 44.1559 58.5622 43.9215 58.4717 43.7078C57.9575 42.4948 58.1293 40.523 58.2161 39.7985C58.2353 39.6378 58.1383 39.4848 57.9836 39.4374C57.8105 39.3844 57.6285 39.4817 57.5819 39.6566C57.3777 40.4224 56.8919 42.419 56.9672 43.8219C56.9902 44.2494 57.0736 44.7777 57.159 45.2319C57.2615 45.7774 57.8293 46.0853 58.3523 45.8997C58.9602 45.6839 59.1737 44.9295 58.8332 44.3817Z" fill="#212123"></path>
                                    <path d="M58.8332 44.3817C58.6928 44.1559 58.5622 43.9215 58.4717 43.7078C57.9575 42.4948 58.1293 40.523 58.2161 39.7985C58.2353 39.6378 58.1383 39.4848 57.9836 39.4374C57.8105 39.3844 57.6285 39.4817 57.5819 39.6566C57.3777 40.4224 56.8919 42.419 56.9672 43.8219C56.9902 44.2494 57.0736 44.7777 57.159 45.2319C57.2615 45.7774 57.8293 46.0853 58.3523 45.8997C58.9602 45.6839 59.1737 44.9295 58.8332 44.3817Z" fill="#212123"></path>
                                    <path d="M84.8531 47.7005C85.0636 47.538 85.2679 47.3641 85.4274 47.1956C86.3333 46.2389 86.8619 44.3315 87.0339 43.6224C87.0721 43.4651 87.2165 43.3557 87.378 43.3654C87.5587 43.3762 87.6951 43.5311 87.6777 43.7113C87.6012 44.5001 87.3581 46.5405 86.797 47.8285C86.626 48.221 86.3631 48.6868 86.1242 49.0825C85.8374 49.5576 85.1978 49.6475 84.7728 49.2907C84.2787 48.876 84.3425 48.0946 84.8531 47.7005Z" fill="#212123"></path>
                                    <path d="M84.8531 47.7005C85.0636 47.538 85.2679 47.3641 85.4274 47.1956C86.3333 46.2389 86.8619 44.3315 87.0339 43.6224C87.0721 43.4651 87.2165 43.3557 87.378 43.3654C87.5587 43.3762 87.6951 43.5311 87.6777 43.7113C87.6012 44.5001 87.3581 46.5405 86.797 47.8285C86.626 48.221 86.3631 48.6868 86.1242 49.0825C85.8374 49.5576 85.1978 49.6475 84.7728 49.2907C84.2787 48.876 84.3425 48.0946 84.8531 47.7005Z" fill="#212123"></path>
                                    <path d="M84.8531 47.7005C85.0636 47.538 85.2679 47.3641 85.4274 47.1956C86.3333 46.2389 86.8619 44.3315 87.0339 43.6224C87.0721 43.4651 87.2165 43.3557 87.378 43.3654C87.5587 43.3762 87.6951 43.5311 87.6777 43.7113C87.6012 44.5001 87.3581 46.5405 86.797 47.8285C86.626 48.221 86.3631 48.6868 86.1242 49.0825C85.8374 49.5576 85.1978 49.6475 84.7728 49.2907C84.2787 48.876 84.3425 48.0946 84.8531 47.7005Z" fill="#212123"></path>
                                    <path d="M84.8531 47.7005C85.0636 47.538 85.2679 47.3641 85.4274 47.1956C86.3333 46.2389 86.8619 44.3315 87.0339 43.6224C87.0721 43.4651 87.2165 43.3557 87.378 43.3654C87.5587 43.3762 87.6951 43.5311 87.6777 43.7113C87.6012 44.5001 87.3581 46.5405 86.797 47.8285C86.626 48.221 86.3631 48.6868 86.1242 49.0825C85.8374 49.5576 85.1978 49.6475 84.7728 49.2907C84.2787 48.876 84.3425 48.0946 84.8531 47.7005Z" fill="#212123"></path>
                                    <path d="M45.2232 49.6423C45.0043 49.3553 44.7974 49.0554 44.6474 48.7783C43.7956 47.2053 43.7726 44.5181 43.7961 43.5276C43.8014 43.3079 43.6504 43.1136 43.4352 43.0696C43.1944 43.0203 42.961 43.1755 42.9206 43.4179C42.7438 44.4793 42.3455 47.2408 42.6288 49.1272C42.7151 49.702 42.8962 50.4053 43.0704 51.0081C43.2796 51.7321 44.0868 52.0748 44.7697 51.7562C45.5634 51.386 45.7543 50.3388 45.2232 49.6423Z" fill="#212123"></path>
                                    <path d="M45.2232 49.6423C45.0043 49.3553 44.7974 49.0554 44.6474 48.7783C43.7956 47.2053 43.7726 44.5181 43.7961 43.5276C43.8014 43.3079 43.6504 43.1136 43.4352 43.0696C43.1944 43.0203 42.961 43.1755 42.9206 43.4179C42.7438 44.4793 42.3455 47.2408 42.6288 49.1272C42.7151 49.702 42.8962 50.4053 43.0704 51.0081C43.2796 51.7321 44.0868 52.0748 44.7697 51.7562C45.5634 51.386 45.7543 50.3388 45.2232 49.6423Z" fill="#212123"></path>
                                    <path d="M45.2232 49.6423C45.0043 49.3553 44.7974 49.0554 44.6474 48.7783C43.7956 47.2053 43.7726 44.5181 43.7961 43.5276C43.8014 43.3079 43.6504 43.1136 43.4352 43.0696C43.1944 43.0203 42.961 43.1755 42.9206 43.4179C42.7438 44.4793 42.3455 47.2408 42.6288 49.1272C42.7151 49.702 42.8962 50.4053 43.0704 51.0081C43.2796 51.7321 44.0868 52.0748 44.7697 51.7562C45.5634 51.386 45.7543 50.3388 45.2232 49.6423Z" fill="#212123"></path>
                                    <path d="M45.2232 49.6423C45.0043 49.3553 44.7974 49.0554 44.6474 48.7783C43.7956 47.2053 43.7726 44.5181 43.7961 43.5276C43.8014 43.3079 43.6504 43.1136 43.4352 43.0696C43.1944 43.0203 42.961 43.1755 42.9206 43.4179C42.7438 44.4793 42.3455 47.2408 42.6288 49.1272C42.7151 49.702 42.8962 50.4053 43.0704 51.0081C43.2796 51.7321 44.0868 52.0748 44.7697 51.7562C45.5634 51.386 45.7543 50.3388 45.2232 49.6423Z" fill="#212123"></path>
                                    <path d="M35.4839 56.502C35.2401 56.4015 34.9995 56.2886 34.8031 56.1696C33.6823 55.4905 32.6798 53.8109 32.3307 53.1804C32.2531 53.0403 32.0872 52.9729 31.9351 53.0229C31.7627 53.0796 31.6707 53.2654 31.7352 53.435C32.0146 54.17 32.7744 56.0415 33.646 57.1206C33.9155 57.4544 34.2953 57.8356 34.6309 58.1534C35.0258 58.5275 35.6529 58.4503 35.9677 58.0067C36.3392 57.4832 36.0773 56.7468 35.4839 56.502Z" fill="#212123"></path>
                                    <path d="M35.4839 56.502C35.2401 56.4015 34.9995 56.2886 34.8031 56.1696C33.6823 55.4905 32.6798 53.8109 32.3307 53.1804C32.2531 53.0403 32.0872 52.9729 31.9351 53.0229C31.7627 53.0796 31.6707 53.2654 31.7352 53.435C32.0146 54.17 32.7744 56.0415 33.646 57.1206C33.9155 57.4544 34.2953 57.8356 34.6309 58.1534C35.0258 58.5275 35.6529 58.4503 35.9677 58.0067C36.3392 57.4832 36.0773 56.7468 35.4839 56.502Z" fill="#212123"></path>
                                    <path d="M35.4839 56.502C35.2401 56.4015 34.9995 56.2886 34.8031 56.1696C33.6823 55.4905 32.6798 53.8109 32.3307 53.1804C32.2531 53.0403 32.0872 52.9729 31.9351 53.0229C31.7627 53.0796 31.6707 53.2654 31.7352 53.435C32.0146 54.17 32.7744 56.0415 33.646 57.1206C33.9155 57.4544 34.2953 57.8356 34.6309 58.1534C35.0258 58.5275 35.6529 58.4503 35.9677 58.0067C36.3392 57.4832 36.0773 56.7468 35.4839 56.502Z" fill="#212123"></path>
                                    <path d="M35.4839 56.502C35.2401 56.4015 34.9995 56.2886 34.8031 56.1696C33.6823 55.4905 32.6798 53.8109 32.3307 53.1804C32.2531 53.0403 32.0872 52.9729 31.9351 53.0229C31.7627 53.0796 31.6707 53.2654 31.7352 53.435C32.0146 54.17 32.7744 56.0415 33.646 57.1206C33.9155 57.4544 34.2953 57.8356 34.6309 58.1534C35.0258 58.5275 35.6529 58.4503 35.9677 58.0067C36.3392 57.4832 36.0773 56.7468 35.4839 56.502Z" fill="#212123"></path>
                                    <path d="M66.7888 49.0268C52.8776 49.3513 36.5274 62.6537 36.5273 67.838C36.5273 73.0223 53.2557 84.4417 66.7888 84.7408C80.883 85.0523 98.6861 73.0222 98.6861 67.838C98.6861 62.6537 81.2464 48.6895 66.7888 49.0268Z" fill="#DAD2F4"></path>
                                    <circle cx="67.3339" cy="66.7414" r="11.1777" fill="black" style={{ transform: "translate3d(1.90696px, 0.0405908px, 0px)" }}></circle>
                                    <circle cx="62.8858" cy="62.5316" r="1.64557" fill="white" style={{ transform: "translate3d(1.90696px, 0.0405908px, 0px)" }}></circle>
                                    <path className={`eye-top custom-eye-transform-transition ${mouseCoordinateMove ? "translate-y-[20px] scale-y-50 opacity-0" : "transform-none opacity-100"}`} d="M66.4336 49.027C52.5224 49.3515 36.1721 62.6539 36.1721 67.8382C36.1721 73.0225 39.867 61.5001 66.4336 61.5001C93.0002 61.5001 98.3309 73.0224 98.3309 67.8382C98.3309 62.654 80.8912 48.6898 66.4336 49.027Z" fill="#FFEEEE"></path>
                                    <path className={`eye-bottom custom-eye-transform-transition ${mouseCoordinateMove ? "translate-y-[45px] scale-y-50 opacity-0" : "transform-none opacity-100"}`} d="M66.4336 76.0002C42.367 76.0002 36.1721 62.654 36.1721 67.8383C36.1721 73.0226 52.9005 84.442 66.4336 84.7411C80.5277 85.0526 98.3309 73.0225 98.3309 67.8383C98.3309 62.654 90.5002 76.0002 66.4336 76.0002Z" fill="#FFEEEE"></path>
                                    <defs>
                                        <pattern id="pattern-/images/text.webp" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use href="#/images/text.webp" transform="translate(0 -0.00132421) scale(0.000823723 0.00083415)"></use>
                                        </pattern>
                                        <image id="/images/text.webp" width="1214" height="1202" href="./next-3d-portfolio/images/text.webp"></image>
                                    </defs>
                                </svg>
                            </div>
                            <div className={`presentation mt-24 opacity-100 hover:opacity-80 transfrom duration-500 delay-200 ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>
                                <a
                                    href="https://qclay.design/QClayCapabilitiesDeck.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-[#e8e8e8] text-black text-lg font-normal rounded-3xl whitespace-nowrap px-2 py-1"
                                    onMouseEnter={() => cursorPointRef.current?.classList.add('hover-btn')}
                                    onMouseLeave={() => cursorPointRef.current?.classList.remove('hover-btn')}
                                >Our Capabilities Deck</a>
                            </div>
                        </div>
                    </div>

                    <div className="main__image relative mt-20">
                        {/* <div className="image flex items-start w-screen h-full md:h-screen"> */}
                        {/* <div className={`image-clip ${isPageLoaded ? "max-h-screen" : "h-screen"} w-screen overflow-hidden`}> */}
                        <div className={`image-sub w-screen min-h-[35vh] md:h-screen relative overflow-hidden scale-100 md:scale-[1]   `}>
                            {/* <div className="vimeo-main w-full h-1/5 md:h-full relative"> */}
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

                            {/* </div> */}
                            {/* </div> */}
                            {/* </div> */}
                        </div>
                    </div>

                    <div className={`presentation text-center mt-5 sm:mt-20 w-full block sm:hidden opacity-100 hover:opacity-80 transfrom duration-500 delay-200 ${isPageLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-1/2 rotate-3"}`}>
                        <a href="https://qclay.design/QClayCapabilitiesDeck.pdf" target="_blank" rel="noreferrer" className="bg-[#e8e8e8] text-black text-sm sm:text-xs font-normal rounded-3xl whitespace-nowrap px-20 sm:px-2 py-2 sm:py-1">Our Capabilities Deck</a>
                    </div>

                </div>




            </div>
        </div>
    )
}

export default Home