import Logo2 from "../assets/images/logo2.png";

const Footer = () => {
  return (
    <div className="r-container mb-12">
      <div className="flex flex-col gap-8 sm:gap-0 sm:items-center sm:justify-between sm:flex-row">
        {/* left section  */}
        <div className="self-center sm:self-start">
          {/* image container  */}
          <div className="w-[120px]">
            <img src={Logo2} alt="footer_Logo" className="h-full w-full" />
          </div>
          <p className="text-gray-600 mt-5">
            Our vision is to make all people <br />
            the best place to live for them.
          </p>
        </div>

        {/* right section  */}
        <div>
            <div>
                <h3 className="text-3xl font-bold text-[#1f3e72]">Information</h3>
                <span className="text-gray-400">145 New York, FL 5467, USA</span>
                <ul className="flex gap-4 items-center mt-5 font-medium text-lg flex-wrap">
                    <li><a href="#">Property</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
