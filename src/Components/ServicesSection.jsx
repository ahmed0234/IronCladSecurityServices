import { RiDoorOpenLine } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { RiBuilding2Line } from "react-icons/ri";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { FaMandalorian } from "react-icons/fa6";
import { BiCctv } from "react-icons/bi";







const ServicesSection = () => {
  return (
    <div className="container w-full  mt-32 px-4" id="Services">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl xl:text-6xl font-semibold ClashGrotesk yellow_gradient text-center">
        What Services We Offer
      </h1>
      <div className="MainContainer pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 xl:gap-20">
          <div className="Child1 flex flex-col items-center gap-6">
              <div className="Logo bg-zinc-800 p-4 flex items-center justify-center rounded-full self-start">
                 <RiDoorOpenLine className="text-4xl text-yellow-500" />
              </div>

              <div className="flex flex-col gap-4">
                  <h1 className="uppercase ClashGrotesk font-semibold text-2xl">Door Supervision</h1>
                    <p className="text-sm xl:text-base">Iron Clad Security Services offers professional door supervision to ensure the safety and security of your venue. Our trained supervisors manage entry points, verify credentials, and maintain a secure and welcoming environment for your guests. Trust us for vigilant and courteous door supervision tailored to your needs.
                    </p>
              </div>
          </div>

          <div className="Child2 flex flex-col items-center gap-6">
              <div className="Logo bg-zinc-800 p-4 flex items-center justify-center rounded-full self-start">
                 <FaOpencart className="text-4xl text-yellow-500" />
              </div>

              <div className="flex flex-col gap-4">
                  <h1 className="uppercase ClashGrotesk font-semibold text-2xl">RETAIL SECURITY</h1>
                    <p className="text-sm xl:text-base">Iron Clad Security Services provides expert retail security solutions to safeguard your store and prevent theft. Our trained professionals ensure a secure shopping environment by monitoring for suspicious activity and maintaining a visible presence. Trust us to protect your assets and enhance the safety of your retail space.
                    </p>
              </div>
          </div>

          <div className="Child3 flex flex-col items-center gap-6">
              <div className="Logo bg-zinc-800 p-4 flex items-center justify-center rounded-full self-start">
                 <RiBuilding2Line className="text-4xl text-yellow-500" />
              </div>

              <div className="flex flex-col gap-4">
                  <h1 className="uppercase ClashGrotesk font-semibold text-2xl">EVENT SUPERVISION</h1>
                    <p className="text-sm xl:text-base">Iron Clad Security Services offers top-tier event supervision to ensure the safety and smooth operation of your event. Our experienced team manages crowd control, monitors entry points, and handles any security concerns with professionalism. Trust us to create a secure and enjoyable environment for all your attendees.
                    </p>
              </div>
          </div>

          <div className="Child4 flex flex-col items-center gap-6">
              <div className="Logo bg-zinc-800 p-4 flex items-center justify-center rounded-full self-start">
                 <FaAcquisitionsIncorporated className="text-4xl text-yellow-500" />
              </div>

              <div className="flex flex-col gap-4">
                  <h1 className="uppercase ClashGrotesk font-semibold text-2xl">CORPORATE SECURITY</h1>
                    <p className="text-sm xl:text-base">Iron Clad Security Services provides comprehensive corporate security solutions to protect your business and its assets. Our skilled professionals offer round-the-clock surveillance, access control, and threat response to ensure a safe and secure workplace. Trust us to safeguard your corporate environment with unmatched dedication and expertise
                    </p>
              </div>
          </div>

          <div className="Child5 flex flex-col items-center gap-6">
              <div className="Logo bg-zinc-800 p-4 flex items-center justify-center rounded-full self-start">
                 <FaMandalorian className="text-4xl text-yellow-500" />
              </div>

              <div className="flex flex-col gap-4">
                  <h1 className="uppercase ClashGrotesk font-semibold text-2xl">SPECIALIST SECURITY</h1>
                    <p className="text-sm xl:text-base">Iron Clad Security Services offers specialist security solutions tailored to unique and high-risk situations. Our expert team provides customized protection strategies, including personal bodyguards and high-value asset protection. Trust us to deliver specialized security with precision and professionalism.
                    </p>
              </div>
          </div>

          <div className="Child6 flex flex-col items-center gap-6">
              <div className="Logo bg-zinc-800 p-4 flex items-center justify-center rounded-full self-start">
                 <BiCctv className="text-4xl text-yellow-500" />
              </div>

              <div className="flex flex-col gap-4">
                  <h1 className="uppercase ClashGrotesk font-semibold text-2xl">CCTV SECURITY</h1>
                    <p  className="text-sm xl:text-base">Iron Clad Security Services provides advanced CCTV security solutions to monitor and protect your premises. Our state-of-the-art surveillance systems offer 24/7 monitoring and real-time alerts, ensuring continuous safety and peace of mind. Trust us to enhance your security with our cutting-edge CCTV technology
                    </p>
              </div>
          </div>

      </div>
      <div className=" flex items-center justify-center pt-16">
        <a href="#Contact">
          <button className="Nav_Btn tracking-wide">Contact Us</button>
        </a>
      </div>
    </div>
  );
};
export default ServicesSection;
