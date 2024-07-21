
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
      <NavigationBar />
      <Home />
      <AboutUs />
      <ServicesSection />
      {/* <Advertise />
      <Contact />
      <Footer /> */}
    </>
  );
};
export default App;
