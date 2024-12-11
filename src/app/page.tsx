import Header from "@/components/Header";
import { NextFont } from "@next/font";
import { Sofia_Sans } from "@next/font/google";

export default function Home() {

  const portfolio_font:NextFont = Sofia_Sans({ weight: "400", subsets: ["latin"] });
  const PAGE_TITLE:string = "Home";

  return (
    <div className="flex flex-col">
      <Header title={PAGE_TITLE} font={portfolio_font} />
    </div>
  );
  
}