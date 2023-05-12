import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import {data} from "../../slider";
import "swiper/css";
import { breakPoints } from "../shared/swiperSettings";
import { useRef } from "react";

const Residencies = () => {
  const swiperRef = useRef();

  return (
    <section className="r-container mb-12" id="residency" >
      {/* Title and Buttons  */}
      <div className="flex sm:justify-between sm:items-center flex-col sm:flex-row gap-8 sm:gap-0">
        {/* title  */}
        <div>
          <span className="text-3xl font-medium text-gradientOrange">
            Best choices
          </span>
          <h2 className="text-4xl font-bold text-[#1f3e72]">
            Popular Residencies
          </h2>
        </div>

        {/* buttons  */}
        <div className="space-x-3 flex self-end sm:self-stretch">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="w-[40px] h-[40px] bg-[#eeeeff] rounded-lg text-[#1f3e72] grid place-items-center"
          >
            <GrFormPrevious />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="w-[40px] h-[40px]  text-[#1f3e72] shadow-md rounded-lg grid place-items-center"
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>

      {/* swiper  */}
      <div className="my-8 overflow-hidden px-4 pb-8">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={50}
          breakpoints={{ ...breakPoints }}
        >
          {data.map((card, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="space-y-3 cursor-pointer hover:blue-gradient hover:scale-105 transition duration-200 p-5 rounded-lg hover:blue-shadow ">
                {/* image  */}
                <div className="sm:w-[220px] sm:h-[180px] h-[300px] mx-auto">
                  <img
                    className="w-full h-full"
                    src={card.image}
                    alt={card.name}
                  />
                </div>
                {/* price  */}
                <div>
                  <span className="text-gradientOrange text-lg font-bold mr-2">
                    &#36;
                  </span>
                  <span className="text-xl text-gray-500 font-semibold">
                    {card.price}
                  </span>
                </div>

                {/* name  */}
                <div>
                  <p className="text-2xl font-bold text-[#1f3e72]">
                    {card.name}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-3">
                    {card.detail}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Residencies;
