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
            className="bg-gray-800 text-white text-base flex flex-row border-2 border-accent rounded-lg justify-center large:justify-between w-full mb-8 items-center"
            >
                <div className="flex flex-col m-4 large:m-0 large:ml-8 large:my-8">
                    <div className="text-2xl text-accent">About Me</div>
                    <div className="mt-2 max-w-sm large:max-w-lg">
                        Hello! My name is Gordon Hutchinson, I am 19 years old, and I am (currently) a year two IT Web Programming student at 
                        the Nova Scotia Community College Truro Campus. <br /><br />
                        I started coding on Scratch when I was nine and I loved it. I moved on to TI-Basic and Python in my 
                        high school Computer Programming class and I have since learned many other programming languages, 
                        including Java, Javascript, C#, and others. <br /><br />
                        I look forward to pursuing a career in programming and I cannot wait to learn more!
                    </div>
                </div>
                <div className="mr-8 flex-col gap-2 hidden large:flex">
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
            <Project
                description={`I created this portfolio website you are currently seeing to display all of the projects 
                    I have worked on by myself and during my time in college. The site was built with NextJS using MongoDB 
                    to store the data on all of the projects. Icons were provided by FontAwesome and styling is done with 
                    the Tailwind CSS library.`}
                title="My Portfolio Website"
                imageSrc="portfolio-image.png"
                width={985}
                height={1888}
                alt="Image of my portfolio website"
            />
            <Project
                description={`For this NextJS project in my Full Stack Programming course, I had used a pre-existing MongoDB 
                    database populated with a collection of technologies used throughout our college program. I added to 
                    this a collection of all of the courses referenced by these technologies and the functionality to 
                    add, remove, and edit the technologies and courses.`}
                title="Technology Roster: Admin"
                imageSrc="nextjs-proj.png"
                width={894}
                height={1540}
                alt="Image of the final project for my Full Stack Programming course"
            />
            <Project
                description={`In my Web Application Programming course, we learned about and worked with ASP.NET. For the 
                    final project of that course, we were tasked with developing an app that could store many links 
                    divided into four different categories. Links could be pinned to the top of the category or unpinned. 
                    The application also has an administration side with a validated login page. On the administration 
                    end, one can add, edit, or remove the links and edit the category names.`}
                title="Link Collection App"
                imageSrc="asp-proj.png"
                width={990}
                height={1829}
                alt="Image of the final project for my Web Application Programming course"
            />
        </div>
    );
}

function Project({imageSrc, description, title, height, width, alt}:{imageSrc:string, description:string, title:string, height:number, width:number, alt:string}) {
    return (
        <div
            className="bg-gray-800 text-white text-base medium:text-sm large:text-base flex flex-row border-2 border-accent rounded-lg justify-center medium:justify-between w-full mb-8 items-center"
            >
                <div className="flex flex-col m-4 small:m-0 small:ml-8 small:my-8">
                    <div className="text-2xl text-accent">{title}</div>
                    <div className="mt-2 max-w-sm medium:max-w-xs large:max-w-lg">
                        {description}
                    </div>
                </div>
                <div className="mr-8 my-8 hidden medium:block">
                    <Image src={`/images/` + imageSrc} width={250} height={250 * height / width} alt={alt} className="rounded-md" />
                </div>
            </div>
    );
}