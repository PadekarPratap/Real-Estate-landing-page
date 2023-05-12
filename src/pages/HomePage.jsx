import CallToAction from "../components/CallToAction"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MarqueeBanner from "../components/MarqueeBanner"
import Residencies from "../components/Residencies"
import Value from "../components/Value"


const HomePage = () => {
  
  return (
    <>
        <Hero />
        <MarqueeBanner />
        <Residencies />
        <Value />
        <ContactUs />
        <CallToAction />
        <Footer />
    </>
  )
}
export default HomePage