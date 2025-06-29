import Hero from "../components/hero";
import PublicLayout from "../layouts/public";

function LandingPageComponents() {
  return <Hero />;
}
export default function LandingPage() {
  return <PublicLayout children={LandingPageComponents()} />;
}
