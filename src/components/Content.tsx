import Image from "next/image";

export default function HomeContent() {
    return (
        <div className="flex flex-col w-full">
            <div
            className="bg-gray-800 text-white text-base border-2 border-accent rounded-lg w-full mb-8 p-4"
            >
                <div className="text-5xl text-accent align-middle text-center">Welcome to My Portfolio!</div>
            </div>
            <div
            className="bg-gray-800 text-white text-base flex flex-row border-2 border-accent rounded-lg justify-between w-full mb-8 items-center"
            >
                <div className="flex flex-col ml-8 my-8">
                    <div className="text-2xl text-accent">About Me</div>
                    <div className="mt-2 max-w-lg">
                        Hello! My name is Gordon Hutchinson, I am 19 years old, and I am (currently) a year two IT Web Programming student at 
                        the Nova Scotia Community College Truro Campus. <br /><br />
                        I started coding on Scratch when I was nine and I loved it. I moved on to TI-Basic and Python in my 
                        high school Computer Programming class and I have since learned many other programming languages, 
                        including Java, Javascript, C#, and others. <br /><br />
                        I look forward to pursuing a career in programming and I cannot wait to learn more!
                    </div>
                </div>
                <div className="mr-8 flex flex-col gap-2">
                    <Image className="rounded-md" src={"/images/carter-and-i.jpg"} width={210} height={280} alt="Myself holding my friend and classmate Carter" />
                    <div className="text-gray-500 text-sm font-normal text-wrap max-w-52">Me, carrying my friend Carter after we won a local coding competition</div>
                </div>
            </div>
        </div>
    );
}

export function ProjectsContent() {
    return (
        <div className="flex flex-col w-full">
            <div
            className="bg-gray-800 text-white text-base border-2 border-accent rounded-lg w-full mb-8 p-4"
            >
                <div className="text-5xl text-accent align-middle text-center">Behold, My Projects!</div>
            </div>
            <Project
                description={`My friend/peer Carter and I developed this simple mod for the game "Minecraft" that 
                            adds a new food item to the game, as well as a new ore block with corresponding tools 
                            and armour. We also incorporated some worldgen to procedurally place our ore and a new 
                            structure in the overworld.`}
                
                title="Minecraft Mod"
                imageSrc="minecraft-mod.png"
                width={573}
                height={475}
                alt="Image of the items in our Minecraft Mod"
            />
        </div>
    );
}

function Project({imageSrc, description, title, height, width, alt}:{imageSrc:string, description:string, title:string, height:number, width:number, alt:string}) {
    return (
        <div
            className="bg-gray-800 text-white text-base flex flex-row border-2 border-accent rounded-lg justify-between w-full mb-8 items-center"
            >
                <div className="flex flex-col ml-8 my-8">
                    <div className="text-2xl text-accent">{title}</div>
                    <div className="mt-2 max-w-lg">
                        {description}
                    </div>
                </div>
                <div className="mr-8">
                    <Image src={`/images/` + imageSrc} width={200} height={200 * height / width} alt={alt} className="rounded-md" />
                </div>
            </div>
    );
}