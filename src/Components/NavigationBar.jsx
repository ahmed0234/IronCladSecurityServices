import { useState } from "react";
import { IoMenu } from "react-icons/io5";
const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center relative justify-between container py-6 px-6 ClashGrotesk ">
      <div className="logo w-56">
        <img
          className="w-full h-full"
          src="/Companylogo1.png"
          alt="Company Logo"
        />
      </div>
      <div className="links lg:flex gap-10 text-lg hidden">
        <a
          href="#Home"
          className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
        >
          Home
        </a>
        <a
          href="#About"
          className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
        >
          About
        </a>
        <a
          href="#Services"
          className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
        >
          Services
        </a>
        <a
          href="#Contact"
          className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
        >
          Contact
        </a>
      </div>
      <div className="CTA hidden lg:block">
        <a href="#Contact">
          <button className="Nav_Btn tracking-wide">Contact Us</button>
        </a>
      </div>
      <div
        className={`lg:hidden ${open && `relative z-10`}`}
        onClick={() => setOpen(!open)}
      >
        <IoMenu size={`2rem`} color="#ffc800" />
      </div>
      {open && (
        <div className="z-50 Mobile_menu_preview bg-zinc-900 w-full flex  absolute left-0 top-full items-center justify-center rounded-lg">
          <div className="p-8">
            <div className="links flex flex-col gap-8 text-lg text-center">
              <a onClick={() => setOpen(!open)} href="#Home">
                Home
              </a>
              <a onClick={() => setOpen(!open)} href="#About">
                About
              </a>
              <a onClick={() => setOpen(!open)} href="#Services">
                Services
              </a>
              <a onClick={() => setOpen(!open)} href="#Contact">
                Contact
              </a>
            </div>
            <div className="CTA mt-12 " onClick={() => setOpen(!open)}>
              <a href="#Contact">
                <button className="Nav_Btn tracking-wide">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default NavigationBar;
