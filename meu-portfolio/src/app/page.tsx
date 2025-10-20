import FisrtSection from "@/components/home-section";
import Footer from "@/components/footer";
import Header from "@/components/header"
import AboutSection from "@/components/about-section";
import PortfolioShowcase from "@/components/portfolio-showcase";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-r from-gray-800 to-gray-950 ">
      <Header />
      <main className="">
        <article>
          <FisrtSection />
          <AboutSection />
          <PortfolioShowcase />
          <ContactSection />
        </article>
      </main>
      <Footer />
    </div>
  );
}
