import { IoMenu } from "react-icons/io5";
const NavigationBar = () => {
  return (
    <nav className="flex items-center  justify-between container py-6 px-6 ClashGrotesk">
      <div className="logo w-56">
        <img
          className="w-full h-full"
          src="/Companylogo1.png"
          alt="Company Logo"
        />
      </div>
      <div className="links lg:flex gap-10 text-lg hidden">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="CTA hidden lg:block">
        <button className="Nav_Btn tracking-wide">Contact Us</button>
      </div>
      <div className="lg:hidden ">
        <IoMenu size={`2rem`} color="#ffc800"/>
      </div>
    </nav>
  );
};
export default NavigationBar;
