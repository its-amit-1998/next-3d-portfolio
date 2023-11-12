import { RefObject } from "react";

const socialName = [
  {
    name: "Dribbble",
    link: "https://dribbble.com/"
  },
  {
    name: "Behance",
    link: "https://www.behance.net/"
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/"
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/"
  }
];

const menuText = [
  {
    name: "About Us",
    link: "/"
  },
  {
    name: "What We Do",
    link: "/"
  },
  {
    name: "Our Works",
    link: "/"
  },
  {
    name: "Contact Us",
    link: "/"
  }
];

type Props = {
  toggle: boolean;
  cursorPointRef: RefObject<HTMLDivElement>;
}

const Menu = ({ toggle, cursorPointRef }: Props) => {
  return (
    <section className={`bg-gray-200 w-full min-h-screen pt-14 sm:pt-24 pb-4 absolute top-0 left-0 right-0 px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 transform duration-700 ease-in-out ${toggle ? "visible opacity-100 translate-y-0 rotate-0 skew-x-0" : "invisible opacity-0 -translate-y-full rotate-12 skew-x-12"}`}>
      <div className="menu__view flex flex-row flex-1 items-center sm:gap-16 w-full min-h-[calc(100vh-132px)] sm:min-h-[calc(100vh-182px)]">

        <div className="social__view w-1/2 sm:w-1/3 flex flex-col justify-center">
          <h1 className="text-gray-500 mb-2.5 md:text-lg">Social</h1>
          <ul className="space-y-2 md:space-y-4">
            {socialName.map((item, index) => (
              <li key={index}
                onMouseEnter={() => cursorPointRef.current?.classList.add('hover-nav')}
                onMouseLeave={() => cursorPointRef.current?.classList.remove('hover-nav')}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="relative flex flex-col cursor-pointer overflow-hidden">
                  <span className="opacity-0 invisible">
                    {item.name}
                  </span>
                  <span className="animate__link group absolute top-0 left-0 flex flex-col text-black w-full h-full">
                    <span className="transform-none duration-500 group-hover:-translate-y-14 group-hover:-rotate-[10deg]">{item.name}</span>
                    <span className="transform duration-500 translate-y-1/2 group-hover:-translate-y-full -rotate-[10deg] group-hover:rotate-[0deg]">{item.name}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="image__view hidden sm:block w-1/3">
          <video className="video-component object-cover h-[20vh] md:h-[25vh] lg:h-[30vh] xl:h-[40vh] 2xl:h-[60vh] " autoPlay={true} poster="./images/poster_1.webp" loop={true} playsInline={false} width="338" height="476">
            <source src="/video/menu/1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="menu__view w-1/2 sm:w-1/3 flex flex-col justify-center">
          <h1 className="text-gray-500 mb-4 md:text-lg">Menu</h1>
          <ul className="space-y-1 sm:space-y-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            {menuText.map((item, index) => (
              <li key={index} className="py-1 md:py-2"
                onMouseEnter={() => cursorPointRef.current?.classList.add('hover-nav')}
                onMouseLeave={() => cursorPointRef.current?.classList.remove('hover-nav')}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="relative flex flex-col cursor-pointer overflow-hidden hover-this">
                  <span className="opacity-0 invisible">
                    {item.name}
                  </span>
                  <span className="animate__link group absolute top-0 left-0 flex flex-col text-black w-full h-full">
                    <span className="transform-none duration-500 group-hover:-translate-y-[150%] group-hover:-rotate-[10deg]">{item.name}</span>
                    <span className="transform duration-500 translate-y-1/2 group-hover:-translate-y-full -rotate-[10deg] group-hover:rotate-[0deg]">{item.name}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__container flex justify-between w-full text-sm sm:text-base md:text-lg">
        <div className="email__container">
          <h1 className="text-gray-500">Get in touch</h1>
          <a href={"/"} target="_blank" rel="noopener noreferrer" className="
          relative 
          before:content-[''] before:absolute before:top-[calc(100%+4px)] before:left-1/2 before:-translate-x-1/2 before:w-full before:h-0.5 before:bg-black before:opacity-30
          after:content-[''] after:absolute after:top-[calc(100%+4px)] after:left-1/2 after:transfrom after:duration-500 after:-translate-x-1/2 after:w-0 after:hover:w-full after:h-0.5 after:bg-black after:opacity-30"
          >info@gmail.com </a>
        </div>

        <div className="email__container">
          <h1>Privacy Policy & Cookies</h1>
          <a href={"/"} target="_blank" rel="noopener noreferrer" className="text-gray-500">@ NeXtTech {new Date().getFullYear()}</a>
        </div>
      </div>

    </section>
  )
}

export default Menu;