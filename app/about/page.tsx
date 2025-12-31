import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-white">
      <AboutSection />
      <Footer />
    </main>
  );
}
