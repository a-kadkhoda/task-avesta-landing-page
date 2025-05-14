import About from "@/components/hompage/About";
import Achivement from "@/components/hompage/Achivement";
import Certificates from "@/components/hompage/Certificates";
import Footer from "@/components/hompage/Footer";
import Hero from "@/components/hompage/Hero";
import NextStep from "@/components/hompage/NextStep";
import Services from "@/components/hompage/Services";

export default function Home() {
  return (
    <div className="size-full flex flex-col gap-y-[144px]">
      <div>
        <Hero />
        <Services />
      </div>
      <About />
      <Achivement />
      <NextStep />
      <div>
        <img src="/Collaborations.png" />
      </div>
      <Certificates />
      <Footer />
    </div>
  );
}
