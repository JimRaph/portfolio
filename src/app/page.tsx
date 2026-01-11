import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills"; 
import Notebooks from "./components/Notebooks";
import LatestPosts from "./components/LatestPosts";
import HomeWrapper from "./components/HomeWrapper";

export default function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <Skills />
      <Projects />
      <Notebooks />
      <LatestPosts />
      <Contact />
    </HomeWrapper>
  );
}