import FisrtSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <article>
          <FisrtSection />
        </article>
      </main>
      <Footer />
    </div>
  );
}
