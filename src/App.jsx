
import AboutUs from "./Components/AboutUs";
import Advertise from "./Components/Advertise";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavigationBar from "./Components/NavigationBar";
import ServicesSection from "./Components/ServicesSection";

const App = () => {

  return (
    <>
    <div className="p-14">
      <h1 className="text-3xl">Service Worker Error 303.......: </h1>
    </div>
    <div className="hidden">
      <NavigationBar />
      <Home />
      <AboutUs />
      <ServicesSection />
      <Advertise />
      <Contact />
      <Footer />
    </div>
    </>
  );
};
export default App;
