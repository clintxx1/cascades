import FirstSection from "@/app/_components/firstSection";
import SecondSection from "@/app/_components/secondSection";
import ThirdSection from "@/app/_components/thirdSection";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 text-darkLiver">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}
