import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import { useState } from "react";
import { SiGooglemaps } from "react-icons/si";

const Contact = () => {
  const [fullName, setfullName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  async function handleformsubmission(e) {
    e.preventDefault();
    setfullName("");
    setphone("");
    setemail("");
    setsubject("");
    setmessage("");
    const formData = {
      fullName,
      phone,
      email,
      subject,
      message,
    };
    try {
      const response = await fetch("http://localhost:3000/api/formsubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="container w-full px-4  mt-28" id="Contact">
      <h1 className="ClashGrotesk font-bold text-5xl sm:text-8xl xl:text-8xl tracking-wide text-center yellow_gradient">
        Contact Us
      </h1>
      <div className="mainContainer pt-14 flex flex-col lg:flex-row gap-12 justify-between 2xl:px-44">
        <div className="left">
          <h1 className="ClashGrotesk font-semibold text-5xl sm:text-6xl">
            Get in touch
          </h1>
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
              <h2 className="text-xl">0191 743 7013</h2>
            </div>
            <div className="FirstContact flex  items-center gap-5">
              <CiMail className="text-yellow-500 text-3xl" />
              <h2 className="text-xl">zahid@ironcladsecurity.ltd</h2>
            </div>
            <div className="FirstContact flex  items-center gap-5">
              <CiMail className="text-yellow-500 text-3xl" />
              <h2 className="text-xl">admin@ironcladsecurity.org.uk</h2>
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
          <a href="#">
            <div className="GoogleMapDirection bg-rose-700 w-80 h-32 rounded-lg mt-10 flex items-center justify-center gap-2">
              <SiGooglemaps className="text-5xl" />
              <h1>Get Directions on Google Map</h1>
            </div>
          </a>
        </div>

        <div className="right sm:w-[600px] xl:w-[520px] ">
          <h1 className="ClashGrotesk font-semibold text-6xl">
            Leave your details
          </h1>
          <h2 className="ClashGrotesk italic text-2xl">
            and we will call you back
          </h2>
          <div className="card mt-4">
            <div className="card2">
              <form className="form" onSubmit={handleformsubmission}>
                <p id="heading" className="ClashGrotesk font-semibold">
                  Enter Details
                </p>
                <div className="flex flex-col gap-8">
                  <div className="field">
                    <input
                      type="text"
                      className="input-field px-4"
                      placeholder="Full Name"
                      autoComplete="off"
                      value={fullName}
                      onChange={(e) => setfullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="email"
                      className="input-field px-4"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      className="input-field px-4"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      className="input-field px-4"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setsubject(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <textarea
                      type="text"
                      className="input-field px-4"
                      placeholder="Message"
                      rows={`5`}
                      cols={`5`}
                      value={message}
                      onChange={(e) => setmessage(e.target.value)}
                    />
                  </div>
                  <div className="radio-input flex items-center gap-3 mt-0">
                    <input type="checkbox" required />
                    <h1>
                      I consent to having Iron Clad Security collect my name,
                      phone number and e-mail
                    </h1>
                  </div>
                </div>
                <div className="SUBMIT pb-2">
                  <button className="Home_Btn mt-6 ClashGrotesk text-base font-medium tracking-wider">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
