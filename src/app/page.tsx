import HomeContent from "@/components/Content";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { NextFont } from "@next/font";
import { Sofia_Sans } from "@next/font/google";

const portfolio_font:NextFont = Sofia_Sans({ weight: "400", subsets: ["latin"] });

export default function Home() {

  const PAGE_TITLE:string = "Home";

  return (
    <div className={`flex flex-col ${portfolio_font.className}`}>
      <Header title={PAGE_TITLE} />
      <div className="flex flex-row bg-gray-900 p-8">
        <Navigation page={PAGE_TITLE} />
        <HomeContent />
      </div>
    </div>
  );
  
}