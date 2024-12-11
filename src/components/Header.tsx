
import { NextFont } from "@next/font";

export default function Header({title, font}:{title:string, font:NextFont}) {

    const FULL_NAME:string = "Gordon Hutchinson";

    return (
        <div className={`bg-primary w-full flex flex-row items-center justify-between p-4 ${font.className}`}>
            <div className="text-xl text-white">{FULL_NAME}</div>
            <div className="text-lg text-secondary">{title}</div>
        </div>
    );
}