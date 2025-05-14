import About from "@/components/hompage/About";
import Achivement from "@/components/hompage/Achivement";
import Certificates from "@/components/hompage/Certificates";
import Hero from "@/components/hompage/Hero";
import NextStep from "@/components/hompage/NextStep";
import Services from "@/components/hompage/Services";

export default function Home() {
  return (
    <div className="size-full flex flex-col">
      <Hero />
      <Services />
      <About />
      <Achivement />
      <NextStep />
      <div className="my-[144px]">
        <img src="/Collaborations.png" />
      </div>
      <Certificates />
      <div className="w-full mt-[144px] relative">
        <img src="/videoContainer.png" className="size-full " />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[36px] text-black-1 custom-text-shadow">
          <span className="text-orange-1 ">مدیریت</span> با داده{" "}
          <span className="text-orange-1">جابجایی</span> با هوش
        </span>
      </div>
      <div
        className="h-[620px] w-full"
        style={{ backgroundImage: 'url("/footer.png")' }}
      >
        <div></div>
      </div>
    </div>
  );
}
