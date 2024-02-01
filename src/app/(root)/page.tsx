import About from "@/components/About";
import Awards from "@/components/Awwards";
import Clients from "@/components/Clients";
import Culture from "@/components/Culture";
import Demo from "@/components/Demo";
import PageSlideUp from "@/components/Effects/PageSlideUp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <PageSlideUp>
        <div className="slide">
          <Hero />
        </div>
        <div className="relative z-[150]">
          <Demo />
        </div>
      </PageSlideUp>
      <div className="mt-[100vh] "></div>
      <About />
      <Project />
      <Culture />
      <Clients />
      <Awards />
      <Footer />
    </div>
  );
};

export default HomePage;