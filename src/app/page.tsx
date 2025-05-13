import About from "@/components/hompage/About";
import Hero from "@/components/hompage/Hero";
import Services from "@/components/hompage/Services";

export default function Home() {
  return (
    <div className="size-full flex flex-col">
      <Hero />
      <Services />
      <About />
    </div>
  );
}
