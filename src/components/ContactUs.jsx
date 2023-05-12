import Contact from "../assets/images/contact.jpg";
import ContactCard from "./ContactCard";
import { BsTelephoneFill, BsFillChatDotsFill } from "react-icons/bs";
import { MdVideoChat } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";

const ContactUs = () => {
  return (
    <div className="r-container my-16" id="contact">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* title and cards */}
        <div>
          {/* title and desc  */}
          <div>
            <span className="text-3xl text-gradientOrange font-semibold">
              Contact Us
            </span>
            <h2 className="text-4xl text-[#1f3e72] font-bold">
              Easy to contact us
            </h2>
          </div>

          {/* desc  */}
          <div className="mt-6">
            <p className="text-gray-500 text-lg tracking-wider">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better.
            </p>
          </div>

          <div className="mt-8">
            <div className="flex gap-6 mb-6 flex-col sm:flex-row">
              <ContactCard
                icon={<BsTelephoneFill size={20} className="text-blue" />}
                title={"Call"}
                number={"021 123 145 14"}
                button={"Call Now"}
              />
              <ContactCard
                icon={<BsFillChatDotsFill size={20} className="text-blue" />}
                title={"Chat"}
                number={"021 123 145 14"}
                button={"Chat Now"}
              />
            </div>
            <div className="flex gap-6 flex-col sm:flex-row">
              <ContactCard
                icon={<MdVideoChat size={20} className="text-blue" />}
                title={"Video Call"}
                number={"021 123 145 14"}
                button={"Video Call Now"}
              />
              <ContactCard
                icon={<SiGooglemessages size={20} className="text-blue" />}
                title={"Message"}
                number={"021 123 145 14"}
                button={"Message Now"}
              />
            </div>
          </div>
        </div>

        {/* right section  */}
        <div>
          {/* image container  */}
          <div className="max-w-[30rem] h-[35rem] rounded-tr-full rounded-tl-full overflow-hidden border-[8px] mx-auto">
            <img src={Contact} alt="contact_us" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
