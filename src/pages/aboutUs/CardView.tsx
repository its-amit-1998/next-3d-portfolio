type Props = {
  backgroundColor: string;
  image: string;
  video: string;
  title: string;
  des: string;
  number: string;
  isActive: boolean;
}

const CardView = ({ backgroundColor, image, video, title, des, number, isActive }: Props) => {

  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className="w-full h-fit md:h-full bg-pink-300 rounded-xl flex flex-col justify-between relative px-2 py-2.5 md:py-4">
      <div className="image__container flex justify-start">
        <div className="circle__crop w-full h-full absolute top-0 left-0 overflow-hidden">
          <div className="circle__container absolute top-[4rem] md:top-[-7.5rem] lg:top-[12.5rem] left-[-7.5rem] md:left-[-12rem] lg:left-[-30rem] transform -rotate-45">
            <div className="circle absolute left-[6.25rem] md:left-[11.25rem] lg:left-[22.5rem] w-[11.85rem] md:w-[18.75rem] lg:w-[36.45rem] h-[11.85rem] md:h-[18.75rem] lg:h-[36.45rem] rounded-[50%] border border-gray-400" />
            <div className="circle absolute w-[11.85rem] md:w-[18.75rem] lg:w-[36.45rem] h-[11.85rem] md:h-[18.75rem] lg:h-[36.45rem] rounded-[50%] border border-gray-400" />
          </div>
        </div>

        <div className={`card__img flex justify-center items-center relative z-[1] overflow-hidden w-32 md:w-[64vh] h-32 md:h-[32vh] md:left-16 rounded-full transform duration-700 ${isActive ? number === "03" ? "translate-x-[80%]" : "translate-x-[90%]" : "translate-x-0"}`}>
          <div className="video-wrap w-full h-full rounded-full">
            <div className="video-clip w-full h-full">
              <video className="video-component scale-110 object-cover w-full h-full" autoPlay poster={image} loop={true} playsInline={true} width="340" height="640">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

      </div>
      <div className="card__content-bottom flex flex-col justify-end items-start gap-2 md:gap-4 pt-8">
        <h3 className="font-medium text-xl md:text-7xl pl-8 md:pl-16 pr-4 md:pr-8">{title}</h3>
        <div className="text__container flex justify-between items-start h-full scale-100 pl-8 md:pl-16 pr-4 md:pr-8">
          <p className="text-gray-500 font-light md:font-normal md:mr-[15rem] text-sm md:text-sm">{des}</p>
          <span className="card__index font-medium text-4xl md:text-6xl text-gray-300">{number}</span>
        </div>
      </div>
    </section>
  )
}

export default CardView