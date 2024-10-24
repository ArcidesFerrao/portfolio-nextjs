import Blog from "../_components/Blog";
import Projects from "../_components/Projects";
import Skills from "../_components/Skills";
import Welcome from "../_components/Welcome";

export default function page() {
  return (
    <>
      <Welcome />
      <Skills />
      <Projects />
      <Blog />
    </>
  );
}
