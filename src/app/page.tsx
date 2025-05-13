import About from "@/components/hompage/About";
import Achivement from "@/components/hompage/Achivement";
import Hero from "@/components/hompage/Hero";
import NextStep from "@/components/hompage/nextStep";
import Services from "@/components/hompage/Services";

export default function Home() {
  return (
    <div className="size-full flex flex-col">
      <Hero />
      <Services />
      <About />
      <Achivement />
      <NextStep />
    </div>
  );
}
