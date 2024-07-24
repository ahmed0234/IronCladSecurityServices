import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
const Footer = () => {
  return (
    <div className="container px-4 lg:px-10 py-14 pt-16 bg-zinc-900  mt-10">
      <div className="secondMainContainer h-full w-full grid gap-10 lg:grid-cols-2 lg:gap-x-32 2xl:grid-cols-3">
        <div className="w-80 lg:w-[500px] lg:h-[280px] 2xl:w-[400px] 2xl:h-[200px]">
          <img
            src="/Companylogo1.png"
            alt="Companylogo1.png"
            className="h-full w-full"
          />
        </div>

        <div className="child2">
          <h1 className="ClashGrotesk font-semibold text-5xl">Get in touch</h1>
          <h2 className="ClashGrotesk italic text-xl">
            With Iron Clad Security Services
          </h2>
          <p className="w-full lg:w-[40ch] mt-3 ClashGrotesk text-lg">
            Getting in touch with us couldn’t be easier! Our friendly, helpful
            team are here to help.
          </p>
          <div className="Details mt-8 flex flex-col gap-6">
            <div className="FirstContact flex  items-center gap-5">
              <FiPhone className="text-yellow-500 text-3xl" />
              <h2 className="text-xl">0191 073 7413</h2>
            </div>
            <div className="FirstContact flex  items-center gap-5">
              <CiMail className="text-yellow-500 text-3xl" />
              <h2 className="text-lg ClashGrotesk font-medium tracking-normal">zahid@ironcladsecurity.ltd</h2>
            </div>
            <div className="Socials flex gap-6">
              <a href="https://www.facebook.com/profile.php?id=61563022947408" target="_blank">
                <div className="bg-zinc-800 p-4 rounded-full inline-block hover:scale-125 transition-all duration-300 ease-in-out">
                  <FaFacebookF className="text-yellow-500 text-xl" />
                </div>
              </a>
              <a href="#">
                <div className="bg-zinc-800 p-4 rounded-full inline-block hover:scale-125 transition-all duration-300 ease-in-out">
                  <FaInstagram className="text-yellow-500 text-xl" />
                </div>
              </a>
              <a href="#">
                <div className="bg-zinc-800 p-4 rounded-full inline-block hover:scale-125 transition-all duration-300 ease-in-out">
                  <BsTwitterX className="text-yellow-500 text-xl" />
                </div>
              </a>
              <a href="#">
                <div className="bg-zinc-800 p-4 rounded-full inline-block hover:scale-125 transition-all duration-300 ease-in-out">
                  <LiaTelegram className="text-yellow-500 text-xl" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="child3">
          <h1 className="ClashGrotesk font-semibold text-5xl">Quick Links</h1>
          <div className="flex flex-col mt-6 gap-6">
            <a
              href="#Home"
              className="hover:text-yellow-400 transition-colors duration-300 ease-in-out text-xl"
            >
              Home
            </a>
            <a
              href="#About"
              className="hover:text-yellow-400 transition-colors duration-300 ease-in-out text-xl"
            >
              About
            </a>
            <a
              href="#Services"
              className="hover:text-yellow-400 transition-colors duration-300 ease-in-out text-xl"
            >
              Services
            </a>
            <a
              href="#Contact"
              className="hover:text-yellow-400 transition-colors duration-300 ease-in-out text-xl"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
