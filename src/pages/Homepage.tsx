import { FC } from "react";
import Projects from "../components/Projects";
import SocialLinks from "../components/SocialLinks";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

interface HomepageProps {}

const Homepage: FC<HomepageProps> = () => {
  return (
    <main>
      <Header />
      <AboutMe />
      <Projects />
      <SocialLinks />
      <Footer />
    </main>
  );
};

export default Homepage;
