import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyEasybank from "@/components/WhyEasybank";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <Hero />
      <WhyEasybank />
    </div>
  );
}
