import FisrtSection from "@/components/home-section";
import Footer from "@/components/footer";
import Header from "@/components/header"
import AboutSection from "@/components/about-section";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="bg-gradient-to-r from-gray-800 to-gray-950 ">
        <article>
          <FisrtSection />
          <AboutSection />
        </article>
      </main>
      <Footer />
    </div>
  );
}
