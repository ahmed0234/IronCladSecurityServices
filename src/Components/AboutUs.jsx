import { GoPeople } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";



const AboutUs = () => {
  return (
    <div className="container px-4  mt-32  w-full" id="About">
        <h1 className="ClashGrotesk font-bold text-6xl sm:text-8xl xl:text-8xl tracking-wide text-center yellow_gradient">About Us</h1>
        <div className="pt-2  xl:pt-28 MainContainer flex flex-col lg:flex-row lg:items-center gap-16">

            {/* LEFT */}
            <div className="left flex flex-col gap-10 xl:gap-4 basis-[50%]">
                <div className="Child_1 flex-col lg:flex-row flex items-center gap-6">
                   <GoPeople className="self-start text-5xl lg:text-[250px]"/>
                    <div>
                        <h1 className="ClashGrotesk font-semibold text-3xl uppercase">Who We are</h1>
                        <p className="pl-2 ClashGrotesk">Iron Clad Security Services is a dynamic and emerging security provider dedicated to delivering comprehensive and reliable protection solutions. As a new company in the industry, we are fueled by a passion for excellence and an unwavering commitment to our work. Our team comprises highly trained professionals who bring a wealth of experience and expertise, ensuring that we meet and exceed the highest standards of safety for our clients.
                        </p>
                    </div>
                </div>

                <div className="Child_2 flex-col lg:flex-row flex items-center gap-6">
                    <MdOutlineSecurity  className="self-start text-5xl lg:text-[250px]"/>
                    <div>
                        <h1 className="ClashGrotesk font-semibold text-3xl">WHAT WE DO</h1>
                        <p className="pl-2 ClashGrotesk">At Iron Clad Security Services, we provide an extensive array of security solutions, each meticulously tailored to meet your specific needs and requirements. Our primary goal is to ensure the utmost safety and security of your venue, assets, and clients. Whether you require corporate security, residential protection, event security, personal bodyguards, or 24/7 monitoring, our services are designed to deliver comprehensive and reliable protection.
                        </p>
                    </div>
                </div>

                <div className="Child_3 flex-col lg:flex-row flex items-center gap-6">
                   <FaRegQuestionCircle  className="self-start text-5xl lg:text-[250px]"/>
                    <div>
                        <h1 className="ClashGrotesk font-semibold text-3xl uppercase">why chose us</h1>
                        <p className="pl-2 ClashGrotesk">We understand that each client and situation is unique, which is why we take a personalized approach to security. Our highly trained and experienced team works closely with you to develop a customized security plan that addresses your individual concerns and objectives. Utilizing state-of-the-art technology and innovative security strategies, we strive to provide the highest level of safety and peace of mind.
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="right AboutUsGuardPic basis-[50%] xl:basis-[65%] relative">
                <div className="w-full">
                    <img src="/AboutSecurityGuardPic.jpg" alt="Guard Pic" className="grayscale brightness-105  object-cover object-center rounded-md"/>
                </div>
            </div>
            
        </div>
    </div>
  )
}
export default AboutUs