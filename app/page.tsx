import FirstSection from "@/components/home/firstSection";
import SecondSection from "@/components/home/secondSection";
import ThirdSection from "@/components/home/thirdSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 text-darkLiver">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}
