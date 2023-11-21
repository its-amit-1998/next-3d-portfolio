import { useEffect, useRef } from "react";
import Header from "./components/Header";
import HomeContent from "./pages/home/HomeContent";
import HomeVideo from "./pages/home/HomeVideo";
import Work from "./pages/Work";
import ContactUs from "./pages/ContactUs";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'tailwindcss/tailwind.css';

// import required modules
import { Mousewheel } from 'swiper/modules';
import About from "./pages/aboutUs/About";
import CardView from "./pages/aboutUs/CardView";



function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorPointRef = useRef<HTMLDivElement>(null);
  // const controllerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const link = document.querySelectorAll(' .hover-this');

    // const animateit = function (e: MouseEvent) {
    //   const span = (e.target);
    //   const { offsetX: x, offsetY: y } = e,
    //     { offsetWidth: width, offsetHeight: height } = (e.target),

    //     move = 25,
    //     xMove = x / width * (move * 2) - move,
    //     yMove = y / height * (move * 2) - move;

    //   span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    //   if (e.type === 'mouseleave') span.style.transform = '';
    // };

    const cursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 100px)`;
      }
    };

    // link.forEach(b => b.addEventListener('mousemove', animateit));
    // link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', cursor);
  }, [])


  return (
    <div className="controller__main fixed overflow-hidden w-screen h-screen top-0 left-0 isolate">
      <Header cursorPointRef={cursorPointRef} />
      <Swiper
        className="section w-full h-full no-scrollbar overflow-y-scroll"
        direction={'vertical'}
        slidesPerView={1}
        // spaceBetween={30}
        onSlideChange={(swiperCore: any) => {
          const {
            activeIndex,
            snapIndex,
            previousIndex,
            realIndex,
          } = swiperCore;
          console.log({ activeIndex, snapIndex, previousIndex, realIndex });
        }}
        // centeredSlides={true}
        mousewheel={true}

        modules={[Mousewheel]}
      >
        <SwiperSlide>
          <Swiper
            className={`section__inner w-full h-full`}
            direction={'vertical'}
            slidesPerView={2} // Display two slide per view
            slidesPerGroup={2} // Group two slides together
            breakpoints={{
              // Responsive breakpoints
              648: {
                // For tablets
                slidesPerView: 1,
                slidesPerGroup: 1
              },
            }}
            // spaceBetween={90} 
            onSlideChange={(swiperCore: any) => {
              const {
                activeIndex,
                snapIndex,
                previousIndex,
                realIndex,
              } = swiperCore;
              console.log({ activeIndex, snapIndex, previousIndex, realIndex });
            }}
            centeredSlides={true}
            mousewheel={true}

            modules={[Mousewheel]}
            nested
          >
            <SwiperSlide className="">
              <HomeContent cursorPointRef={cursorPointRef} />
            </SwiperSlide>
            <SwiperSlide className="-mt-64 sm:mt-60  md:mt-0">
              {({ isActive }) => (
                <HomeVideo isActive={isActive} />
              )}
            </SwiperSlide>

          </Swiper>
        </SwiperSlide>
        <SwiperSlide>

          <Swiper
            className="w-full h-screen"
            direction={'horizontal'}
            slidesPerView={1}
            spaceBetween={50}
            mousewheel={{
              invert: false,

            }}
            modules={[Mousewheel]}
            nested
          >
            <SwiperSlide>
              <About cursorPointRef={cursorPointRef} />
            </SwiperSlide>
            <SwiperSlide className="bg-red-500"><CardView /></SwiperSlide>
            <SwiperSlide className="bg-green-500"><CardView /></SwiperSlide>
            <SwiperSlide className="bg-blue-500"><CardView /></SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide> <Work /></SwiperSlide>

        <SwiperSlide> <ContactUs /> </SwiperSlide>
      </Swiper>

      <div ref={cursorRef} className="cursor hidden md:block pointer-events-none absolute top-0 left-0 mix-blend-difference select-none z-[1000] transform duration-300 -translate-x-full -translate-y-full">
        <div
          ref={cursorPointRef}
          className={`cursor__pointer p-1 lg:p-[0.275rem] xl:p-[0.3rem] bg-white rounded-[50%] absolute top-1/2 left-1/2 transform transition-all duration-300 -translate-x-1/2 -translate-y-1/2`}
        />
      </div>
    </div>
  );
}

export default App;