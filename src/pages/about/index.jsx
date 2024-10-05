import About from "../../components/about/About";
import Clients from "../../components/about/Clients";
import Services from "../../components/about/Services";
import Footers from "../../components/footers/Footers";
import Headers from "../../components/headers/Headers";

export default function AboutPage() {
  return (
    <>
      
      <Headers />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <About />
        <Services />
        <Clients />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footers />
    </>
  );
}