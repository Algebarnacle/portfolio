export default function HomeContent() {
    return (
        <div className="flex flex-col w-full">
            <div
            className="bg-gray-800 text-white text-base border-2 border-accent rounded-lg w-full mb-8 p-4"
            >
                <div className="text-5xl text-accent align-middle text-center">Welcome to My Portfolio!</div>
            </div>


            <div
            className="bg-gray-800 text-white text-base flex flex-row border-2 border-accent rounded-lg justify-between w-full mb-8"
            >
                <div className="flex flex-col">
                    <div className="text-2xl text-accent ml-4 mt-4">About Me</div>
                    <div className="mx-4 mb-4 mt-2 max-w-96">
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    </div>
                </div>
                <div className="m-2"></div>
            </div>
        </div>
    );
}

export function ProjectsContent() {

}