import { RefObject, useState } from "react";
import Menu from "../Menu";

const headerLink = [
    { name: "Home", linkTo: "/" },
    { name: "About", linkTo: "/" },
    { name: "Works", linkTo: "/" },
    { name: "Contact us", linkTo: "/" },
];

type Props = {
    cursorPointRef: RefObject<HTMLDivElement>;
};

const Header = ({ cursorPointRef }: Props) => {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <header className="header fixed top-0 left-0 z-50 bg-transparent w-full">
            <main className="header__container animate-header-animation-loading absolute top-0 left-0 flex flex-row w-full h-16 justify-between items-center gap-16 pt-4 sm:pt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <div className="header__logo__container flex justify-start w-1/2 sm:w-1/6 md:w-3/12 lg:w-2/6 z-20">
                    <svg className="header__logo w-[100px] md:w-32 cursor-pointer fill-black hover-this" viewBox="0 0 117 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3715 27.5703C22.2637 26.7915 23.1524 25.6228 23.1524 25.6228L26.2676 29.1916C26.2676 29.1916 25.3789 30.3603 24.4867 31.1392C23.7088 31.8182 22.3282 32.6541 22.3282 32.6541L19.2129 29.0853C19.2129 29.0853 20.5936 28.2494 21.3715 27.5703Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M22.9329 25.345C24.5755 23.1343 25.5006 20.3679 25.3799 17.4017C25.0997 10.5163 19.2908 5.16162 12.4054 5.44179C5.51992 5.72196 0.165281 11.5308 0.445449 18.4163C0.725617 25.3017 6.5345 30.6564 13.4199 30.3762C15.445 30.2938 17.3377 29.7332 18.9935 28.8076L15.6915 25.0247C14.9234 25.3246 14.0932 25.5042 13.2231 25.5397C9.00886 25.7111 5.45349 22.4338 5.28201 18.2195C5.11053 14.0052 8.38787 10.4498 12.6022 10.2783C16.8165 10.1069 20.3718 13.3842 20.5433 17.5985C20.6015 19.0287 20.2625 20.383 19.6245 21.5549L22.9329 25.345Z" fill="currentColor"></path><path d="M40.374 5.63957C42.8587 5.63957 45.1067 6.25483 47.1182 7.48535C49.1296 8.6922 50.6441 10.3368 51.6616 12.4193L46.7632 14.2295C46.1243 13.07 45.2487 12.159 44.1365 11.4964C43.0243 10.8338 41.7701 10.5025 40.374 10.5025C38.2679 10.5025 36.5286 11.2242 35.1561 12.6677C33.7836 14.1112 33.0973 15.8978 33.0973 18.0276C33.0973 20.181 33.7836 21.9794 35.1561 23.4229C36.5286 24.8664 38.2679 25.5882 40.374 25.5882C41.7701 25.5882 43.0243 25.2569 44.1365 24.5943C45.2487 23.9317 46.1243 23.0207 46.7632 21.8611L51.6616 23.6714C50.6441 25.7538 49.1296 27.4103 47.1182 28.6408C45.1067 29.8477 42.8587 30.4511 40.374 30.4511C36.7771 30.4511 33.7836 29.2679 31.3935 26.9015C29.0035 24.5115 27.8085 21.5653 27.8085 18.0631C27.8085 14.5608 29.0035 11.6147 31.3935 9.22464C33.8309 6.83459 36.8244 5.63957 40.374 5.63957ZM54.4436 6.06552H59.5195V25.3752H71.3041V30.0251H54.4436V6.06552ZM77.6534 30.0251H72.3645L82.5163 6.06552H86.6693L96.8211 30.0251H91.5322L89.7929 25.8012H79.3927L77.6534 30.0251ZM87.9116 21.2222L84.6105 13.2712L81.3094 21.2222H87.9116ZM102.629 20.1928L93.6134 6.06552H99.3992L105.114 15.4719L111.006 6.06552H116.792L107.67 20.0508V30.0251H102.629V20.1928Z" fill="currentColor"></path><path d="M47.1182 7.48535L47.0985 7.51753L47.0987 7.5177L47.1182 7.48535ZM51.6616 12.4193L51.6747 12.4546L51.7138 12.4402L51.6955 12.4027L51.6616 12.4193ZM46.7632 14.2295L46.7302 14.2477L46.7458 14.2762L46.7763 14.2649L46.7632 14.2295ZM35.1561 12.6677L35.1287 12.6417L35.1561 12.6677ZM35.1561 23.4229L35.1287 23.4489L35.1561 23.4229ZM44.1365 24.5943L44.1172 24.5619L44.1365 24.5943ZM46.7632 21.8611L46.7763 21.8257L46.7458 21.8145L46.7302 21.8429L46.7632 21.8611ZM51.6616 23.6714L51.6955 23.688L51.7138 23.6505L51.6747 23.636L51.6616 23.6714ZM47.1182 28.6408L47.1376 28.6732L47.1378 28.673L47.1182 28.6408ZM31.3935 26.9015L31.3669 26.9282L31.367 26.9283L31.3935 26.9015ZM31.3935 9.22464L31.3671 9.1977L31.3669 9.19796L31.3935 9.22464ZM40.374 5.6773C42.8521 5.6773 45.0933 6.29084 47.0985 7.51753L47.1378 7.45316C45.1202 6.21882 42.8652 5.60184 40.374 5.60184V5.6773ZM47.0987 7.5177C49.104 8.72085 50.6134 10.36 51.6277 12.4358L51.6955 12.4027C50.6747 10.3136 49.1552 8.66355 47.1376 7.45299L47.0987 7.5177ZM51.6485 12.3839L46.7501 14.1941L46.7763 14.2649L51.6747 12.4546L51.6485 12.3839ZM46.7962 14.2113C46.1542 13.0461 45.2739 12.1301 44.1558 11.464L44.1172 11.5288C45.2235 12.1879 46.0944 13.094 46.7302 14.2477L46.7962 14.2113ZM44.1558 11.464C43.0373 10.7976 41.7764 10.4648 40.374 10.4648V10.5402C41.7639 10.5402 43.0113 10.8699 44.1172 11.5288L44.1558 11.464ZM40.374 10.4648C38.2582 10.4648 36.5088 11.1903 35.1287 12.6417L35.1834 12.6937C36.5484 11.2582 38.2776 10.5402 40.374 10.5402V10.4648ZM35.1287 12.6417C33.7491 14.0928 33.0596 15.8889 33.0596 18.0276H33.1351C33.1351 15.9068 33.8181 14.1297 35.1834 12.6937L35.1287 12.6417ZM33.0596 18.0276C33.0596 20.1898 33.749 21.9978 35.1287 23.4489L35.1834 23.3969C33.8182 21.9611 33.1351 20.1722 33.1351 18.0276H33.0596ZM35.1287 23.4489C36.5088 24.9004 38.2582 25.6259 40.374 25.6259V25.5504C38.2776 25.5504 36.5484 24.8325 35.1834 23.3969L35.1287 23.4489ZM40.374 25.6259C41.7764 25.6259 43.0373 25.2931 44.1558 24.6267L44.1172 24.5619C43.0113 25.2207 41.7639 25.5504 40.374 25.5504V25.6259ZM44.1558 24.6267C45.2739 23.9606 46.1542 23.0446 46.7962 21.8793L46.7302 21.8429C46.0944 22.9967 45.2235 23.9028 44.1172 24.5619L44.1558 24.6267ZM46.7501 21.8965L51.6485 23.7068L51.6747 23.636L46.7763 21.8257L46.7501 21.8965ZM51.6277 23.6548C50.6134 25.7307 49.1039 27.3818 47.0985 28.6086L47.1378 28.673C49.1553 27.4388 50.6748 25.777 51.6955 23.688L51.6277 23.6548ZM47.0987 28.6085C45.0935 29.8116 42.8523 30.4134 40.374 30.4134V30.4888C42.8651 30.4888 45.1199 29.8838 47.1376 28.6732L47.0987 28.6085ZM40.374 30.4134C36.7862 30.4134 33.8025 29.2336 31.4201 26.8747L31.367 26.9283C33.7646 29.3022 36.7679 30.4888 40.374 30.4888V30.4134ZM31.4202 26.8748C29.0375 24.4922 27.8462 21.5557 27.8462 18.0631H27.7707C27.7707 21.5749 28.9695 24.5308 31.3669 26.9282L31.4202 26.8748ZM27.8462 18.0631C27.8462 14.5704 29.0375 11.634 31.4202 9.25132L31.3669 9.19796C28.9695 11.5954 27.7707 14.5512 27.7707 18.0631H27.8462ZM31.42 9.25158C33.85 6.86875 36.8338 5.6773 40.374 5.6773V5.60184C36.8149 5.60184 33.8119 6.80044 31.3671 9.1977L31.42 9.25158ZM54.4436 6.06552V6.02779H54.4059V6.06552H54.4436ZM59.5195 6.06552H59.5572V6.02779H59.5195V6.06552ZM59.5195 25.3752H59.4818V25.4129H59.5195V25.3752ZM71.3041 25.3752H71.3418V25.3375H71.3041V25.3752ZM71.3041 30.0251V30.0629H71.3418V30.0251H71.3041ZM54.4436 30.0251H54.4059V30.0629H54.4436V30.0251ZM54.4436 6.10325H59.5195V6.02779H54.4436V6.10325ZM59.4818 6.06552V25.3752H59.5572V6.06552H59.4818ZM59.5195 25.4129H71.3041V25.3375H59.5195V25.4129ZM71.2663 25.3752V30.0251H71.3418V25.3752H71.2663ZM71.3041 29.9874H54.4436V30.0629H71.3041V29.9874ZM54.4813 30.0251V6.06552H54.4059V30.0251H54.4813ZM77.6534 30.0251V30.0629H77.6786L77.6883 30.0395L77.6534 30.0251ZM72.3645 30.0251L72.3298 30.0104L72.3075 30.0629H72.3645V30.0251ZM82.5163 6.06552V6.02779H82.4913L82.4815 6.0508L82.5163 6.06552ZM86.6693 6.06552L86.704 6.0508L86.6943 6.02779H86.6693V6.06552ZM96.8211 30.0251V30.0629H96.878L96.8558 30.0104L96.8211 30.0251ZM91.5322 30.0251L91.4973 30.0395L91.5069 30.0629H91.5322V30.0251ZM89.7929 25.8012L89.8278 25.7868L89.8182 25.7634H89.7929V25.8012ZM79.3927 25.8012V25.7634H79.3674L79.3578 25.7868L79.3927 25.8012ZM87.9116 21.2222V21.2599H87.9682L87.9465 21.2077L87.9116 21.2222ZM84.6105 13.2712L84.6454 13.2567L84.6105 13.1728L84.5757 13.2567L84.6105 13.2712ZM81.3094 21.2222L81.2746 21.2077L81.2529 21.2599H81.3094V21.2222ZM77.6534 29.9874H72.3645V30.0629H77.6534V29.9874ZM72.3992 30.0399L82.551 6.08024L82.4815 6.0508L72.3298 30.0104L72.3992 30.0399ZM82.5163 6.10325H86.6693V6.02779H82.5163V6.10325ZM86.6345 6.08024L96.7863 30.0399L96.8558 30.0104L86.704 6.0508L86.6345 6.08024ZM96.8211 29.9874H91.5322V30.0629H96.8211V29.9874ZM91.5671 30.0108L89.8278 25.7868L89.758 25.8155L91.4973 30.0395L91.5671 30.0108ZM89.7929 25.7634H79.3927V25.8389H89.7929V25.7634ZM79.3578 25.7868L77.6185 30.0108L77.6883 30.0395L79.4275 25.8155L79.3578 25.7868ZM87.9465 21.2077L84.6454 13.2567L84.5757 13.2856L87.8768 21.2367L87.9465 21.2077ZM84.5757 13.2567L81.2746 21.2077L81.3443 21.2367L84.6454 13.2856L84.5757 13.2567ZM81.3094 21.2599H87.9116V21.1845H81.3094V21.2599ZM102.629 20.1928H102.667V20.1818L102.661 20.1725L102.629 20.1928ZM93.6134 6.06552V6.02779H93.5446L93.5816 6.08582L93.6134 6.06552ZM99.3992 6.06552L99.4315 6.04593L99.4204 6.02779H99.3992V6.06552ZM105.114 15.4719L105.082 15.4915L105.114 15.5437L105.146 15.4919L105.114 15.4719ZM111.006 6.06552V6.02779H110.985L110.974 6.04549L111.006 6.06552ZM116.792 6.06552L116.824 6.08613L116.862 6.02779H116.792V6.06552ZM107.67 20.0508L107.638 20.0302L107.632 20.0396V20.0508H107.67ZM107.67 30.0251V30.0629H107.707V30.0251H107.67ZM102.629 30.0251H102.592V30.0629H102.629V30.0251ZM102.661 20.1725L93.6452 6.04522L93.5816 6.08582L102.598 20.2131L102.661 20.1725ZM93.6134 6.10325H99.3992V6.02779H93.6134V6.10325ZM99.367 6.08511L105.082 15.4915L105.146 15.4523L99.4315 6.04593L99.367 6.08511ZM105.146 15.4919L111.038 6.08555L110.974 6.04549L105.082 15.4519L105.146 15.4919ZM111.006 6.10325H116.792V6.02779H111.006V6.10325ZM116.761 6.04491L107.638 20.0302L107.701 20.0715L116.824 6.08613L116.761 6.04491ZM107.632 20.0508V30.0251H107.707V20.0508H107.632ZM107.67 29.9874H102.629V30.0629H107.67V29.9874ZM102.667 30.0251V20.1928H102.592V30.0251H102.667Z" fill="currentColor"></path></svg>
                </div>

                <section className="mobile__view flex sm:hidden flex-row flex-1 justify-end gap-2 z-20">
                    <div className="talk__btn relative flex flex-row gap-2 bg-[#F4EDED] rounded-full w-20 h-10 px-2  items-center">
                        <p className="header__talk__text text-black my-0 text-sm font-semibold">Hey!</p>
                        <div className="avatar flex items-center rounded-full w-8 h-8">
                            <video className="video__component rounded-full" autoPlay={true} poster="../images/user.png" loop={true} playsInline={false} width="50" height="50">
                                <source src="/video/contact/ch.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <span className="absolute top-0 right-0 inline-flex items-center h-2.5 w-2.5 rounded-full text-xs font-medium bg-blue-500 text-white">
                            <span className="sr-only">Badge value</span>
                        </span>
                    </div>

                    <button className="menu__icon__btn w-12 h-12 relative focus:outline-none"
                        onClick={() => { setToggle(!toggle) }}>
                        <div className="block w-5 absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span
                                className={`block absolute h-0.5 w-7 text-white bg-black transform transition duration-300 ease-in-out ${toggle ? "rotate-45" : "-translate-y-1.5"
                                    }  
                `}
                            ></span>
                            <span
                                className={`block absolute h-0.5 w-7 text-white bg-black transform transition duration-300 ease-in-out ${toggle ? "-rotate-45" : "translate-y-0.5"
                                    }`}
                            ></span>
                        </div>
                    </button>
                </section>

                <section className="table__and__desktop__view hidden sm:flex flex-1 justify-between items-center w-full">
                    <nav className="nav__container flex gap-4 md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal">
                        {headerLink.map((item, index) => (
                            <div key={index} className="nav__link__container relative flex flex-col cursor-pointer overflow-hidden hover-this"
                                onMouseEnter={() => cursorPointRef.current?.classList.add('hover-nav')}
                                onMouseLeave={() => cursorPointRef.current?.classList.remove('hover-nav')}
                            >
                                <span className="opacity-0 invisible">
                                    {item.name}
                                </span>
                                <span className="animate__link group absolute top-0 left-0 flex flex-col text-black w-full h-full">
                                    <span className="transform-none duration-500 group-hover:-translate-y-[150%] group-hover:-rotate-[10deg]">{item.name}</span>
                                    <span className="transform duration-500 translate-y-1/2 group-hover:-translate-y-full -rotate-[10deg] group-hover:rotate-[0deg]">{item.name}</span>
                                </span>
                            </div>
                        ))}
                    </nav>

                    <section className="btn__container flex gap-8 xl:text-lg z-20">
                        <div className="flex justify-center items-center w-fit h-fit gap-2 border-2 border-black rounded-full mt-2.5 px-2 lg:px-4 py-1 lg:py-2 cursor-pointer"
                            onMouseEnter={() => cursorPointRef.current?.classList.add('hover-btn')}
                            onMouseLeave={() => cursorPointRef.current?.classList.remove('hover-btn')}
                        >
                            <span className="inline-flex items-center h-1 md:h-1.5 w-1 md:w-1.5 rounded-full text-xs font-medium bg-green-300 text-white">
                                <span className="sr-only">Badge value</span>
                            </span>
                            <span className="text-xs md:text-sm lg:text-base font-semibold text-black">Let's Talk!</span>
                        </div>

                        <div className="flex flex-row justify-center items-center gap-2 text-lg font-semibold"
                            onClick={() => setToggle(!toggle)}>
                            <span className="flex flex-col text-black overflow-hidden">
                                <span className={`text-xs md:text-sm lg:text-base xl:text-lg transform duration-500 ${toggle ? "-translate-y-full" : "translate-y-1/2"}`}>menu</span>
                                <span className={`text-xs md:text-sm lg:text-base xl:text-lg transform duration-500 ${toggle ? "-translate-y-1/2" : "translate-y-full"}`}>Close</span>
                            </span>

                            <button className="menu__icon__btn w-12 h-12 relative focus:outline-none"
                                onClick={() => { setToggle(!toggle) }}
                                onMouseEnter={() => cursorPointRef.current?.classList.add('hover-menu-btn')}
                                onMouseLeave={() => cursorPointRef.current?.classList.remove('hover-menu-btn')}
                            >
                                <div className="block w-5 absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span
                                        className={`block absolute h-[1.5px]  w-7 text-white bg-black transform transition duration-500 ease-in-out ${toggle ? "rotate-45" : "-translate-y-1.5"
                                            }  
                `}
                                    ></span>
                                    <span
                                        className={`block absolute h-[1.5px] w-7 text-white bg-black transform transition duration-500 ease-in-out ${toggle ? "-rotate-45" : "translate-y-0.5"
                                            }`}
                                    ></span>
                                </div>
                            </button>
                        </div>
                    </section>
                </section>
            </main>

            <Menu
                toggle={toggle}
                cursorPointRef={cursorPointRef}
            />

        </header>
    )
}

export default Header