import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";


function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorPointRef = useRef<HTMLDivElement>(null);

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
    <>
      <Header cursorPointRef={cursorPointRef} />

      <div className="controller__sections absolute top-0 left-0 w-full h-full">
        <Home cursorPointRef={cursorPointRef} />
      </div>


      <div ref={cursorRef} className="cursor hidden md:block pointer-events-none absolute top-0 left-0 mix-blend-difference select-none z-[1000] transform duration-300 -translate-x-full -translate-y-full">
        <div
          ref={cursorPointRef}
          className={`cursor__pointer p-1 lg:p-[0.275rem] xl:p-[0.3rem] bg-white rounded-[50%] absolute top-1/2 left-1/2 transform transition-all duration-300 -translate-x-1/2 -translate-y-1/2`}
        />
      </div>
    </>
  );
}

export default App;