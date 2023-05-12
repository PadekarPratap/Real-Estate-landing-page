import CountUp from "react-countup";
import HeroImage from "../assets/images/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

const framerTransition = {
  duration: 3,
  type: "spring",
};

const Hero = () => {
  return (
    <section className="bg-realBlack min-h-[90vh] text-white py-[3rem] relative" id="home">
      <div className="r-container">
        <div className="grid md:grid-cols-2 gap-[3rem]">
          {/* left section  */}
          <div className="w-auto mx-auto self-center">
            {/* Hero Title  */}
            <div className="mb-8 relative">
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={framerTransition}
                className="z-[10] relative text-5xl lg:text-6xl font-bold"
              >
                Discover <br /> Most Suitable <br /> Property
              </motion.h1>
              {/* sun  */}
              <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full bg-gradient-to-tr from-gradientOrange to-gradientSkin absolute top-[-13px]  lg:top-[-13px] lg:right-[37%] right-[45%]"></div>
            </div>

            {/* hero desc  */}
            <div className="mb-8">
              <span className="block tracking-wider md:text-base lg:text-lg text-secondary">
                Find a variety of properties that suit you very easilty
              </span>
              <span className="block tracking-wider md:text-base lg:text-lg text-secondary">
                Forget all difficulties in finding a residence for you
              </span>
            </div>

            {/* hero search  */}
            <div className="bg-white flex items-center p-2 gap-4 rounded-md border-[3px] border-[rgba(120,120,120,0.374)]">
              <HiLocationMarker
                className="text-blue hover:scale-105 cursor-pointer"
                size={30}
              />
              <input
                type="text"
                placeholder="Search for Homes"
                className="flex-grow focus-visible:oultine-none focus:outline-none text-xl text-black w-full"
              />
              <button className="bg-gradient-to-r from-blue to-gradientDarkBlue px-4 py-2 rounded-md font-semibold active:scale-95 hover:brightness-110 text-white hover:scale-105 transition duration-200">
                Search
              </button>
            </div>

            {/* numbers and count up  */}
            <div className="mt-8 flex gap-4 justify-between flex-wrap items-center">
              {/* premium product  */}
              <div className="flex flex-col items-center">
                <div>
                  <span className="text-3xl lg:text-4xl">
                    <CountUp end={9000} start={1000} duration={1.5} />
                  </span>
                  <span className="text-3xl lg:text-4xl text-gradientOrange">
                    +
                  </span>
                </div>
                <span className="block mt-1 text-secondary text-center">
                  Premium
                  <br className="lg:hidden inline" /> Products
                </span>
              </div>

              {/* Happy Customers */}
              <div className="flex flex-col items-center">
                <div>
                  <span className="text-3xl lg:text-4xl">
                    <CountUp end={2000} start={100} duration={1.5} />
                  </span>
                  <span className="text-3xl lg:text-4xl text-gradientOrange">
                    +
                  </span>
                </div>
                <span className="block mt-1 text-secondary text-center">
                  Happy
                  <br className="lg:hidden inline" /> Customers
                </span>
              </div>

              {/* Awards */}
              <div className="flex flex-col items-center">
                <div>
                  <span className="text-3xl lg:text-4xl">
                    <CountUp end={35} start={3} duration={1.5} />
                  </span>
                  <span className="text-3xl lg:text-4xl text-gradientOrange">
                    +
                  </span>
                </div>
                <span className="block mt-1 text-secondary text-center">
                  Awards
                  <br className="lg:hidden inline" /> Won
                </span>
              </div>
            </div>
          </div>

          {/* right section  */}
          <div>
            {/* image container  */}
            <motion.div
              initial={{ x: "2.5rem", opacity: 0 }}
              animate={{x: 0, opacity: 1}}
              transition={framerTransition}
              className="mx-auto max-w-[30rem] max-h-[35rem] rounded-tr-full rounded-tl-full overflow-hidden border-[8px] border-[rgba(255,255,255,0.13)]"
            >
              <img className="w-full h-full" src={HeroImage} alt="hero" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute w-[12rem] bg-[rgba(255,255,255,0.522)] z-50 h-[12rem] top-0 left-[4rem] blur-[100px]"></div>
    </section>
  );
};
export default Hero;
