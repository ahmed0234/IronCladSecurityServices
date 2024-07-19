import { useState } from "react";
import { IoMenu } from "react-icons/io5";
const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center relative justify-between container py-6 px-6 ClashGrotesk">
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
      <div
        className={`lg:hidden ${open && `relative z-10`}`}
        onClick={() => setOpen(!open)}
      >
        <IoMenu size={`2rem`} color="#ffc800" />
      </div>
      {open && (
        <div className="Mobile_menu_preview bg-zinc-900 w-full flex  absolute left-0 top-full items-center justify-center rounded-lg">
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
              <button className="Nav_Btn tracking-wide">Contact Us</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default NavigationBar;
