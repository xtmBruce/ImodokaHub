import About from "../components/About";
import Featured from "../components/featured";
import Hero from "../components/hero";
import PublicLayout from "../layouts/public";

function LandingPageComponents() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
    </>
  );
}
export default function LandingPage() {
  return <PublicLayout children={LandingPageComponents()} />;
}
