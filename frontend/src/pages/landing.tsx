import About from "../components/About";
import Hero from "../components/hero";
import PublicLayout from "../layouts/public";

function LandingPageComponents() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
export default function LandingPage() {
  return <PublicLayout children={LandingPageComponents()} />;
}
