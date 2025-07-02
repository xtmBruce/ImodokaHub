import About from "../components/About";
import Featured from "../components/featured";
import Hero from "../components/hero";
import HowItWorks from "../components/HowItWorks";
import PublicLayout from "../layouts/public";

function LandingPageComponents() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <HowItWorks />
    </>
  );
}
export default function LandingPage() {
  return <PublicLayout children={LandingPageComponents()} />;
}
