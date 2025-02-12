import MainLayout from "../layout/MainLayout";
import AboutUs from "./sections/AboutUs";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const Layout = () => {
  return (
    <MainLayout>
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </MainLayout>
  );
};

export default Layout;