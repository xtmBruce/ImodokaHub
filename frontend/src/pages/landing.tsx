import About from "../components/About";
import Featured from "../components/featured";
import Hero from "../components/hero";
import HowItWorks from "../components/HowItWorks";
import SellInfo from "../components/sellInfo";
import PublicLayout from "../layouts/public";

function LandingPageComponents() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <HowItWorks />
      <SellInfo />
    </>
  );
}
export default function LandingPage() {
  return <PublicLayout children={LandingPageComponents()} />;
}
