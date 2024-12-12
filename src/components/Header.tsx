
export default function Header({title}:{title:string}) {

    const FULL_NAME:string = "Gordon Hutchinson";

    return (
        <div className="bg-primary w-full flex flex-row items-center justify-center small:justify-between py-8 px-12">
            <div className="text-4xl text-white hidden small:block">{FULL_NAME}</div>
            <div className="text-4xl text-secondary">{title}</div>
        </div>
    );
}