import FisrtSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <main className="bg-gradient-to-r from-gray-800 to-gray-950 ">
        <article>
          <FisrtSection />
        </article>
      </main>
      <Footer />
    </div>
  );
}
