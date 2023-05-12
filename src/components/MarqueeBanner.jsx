import Marquee from "react-fast-marquee";
import User1 from '../assets/images/equinix.png'
import User2 from '../assets/images/prologis.png'
import User3 from '../assets/images/realty.png'
import User4 from '../assets/images/tower.png'
import MarqueeImage from "./MarqueeImage";

const MarqueeBanner = () => {
  return (
    <section className="r-container my-[4rem]">
        <Marquee speed={40} gradient={true} autoFill={true} >
           <MarqueeImage  img={User1} alt={'equinix'} />
           <MarqueeImage  img={User2} alt={'prologis'} />
           <MarqueeImage  img={User3} alt={'realty'} />
           <MarqueeImage  img={User4} alt={'tower'} />
        </Marquee>
    </section>
  )
}
export default MarqueeBanner