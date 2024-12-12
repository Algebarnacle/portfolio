import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Navigation({page}:{page:string}) {

    return (
        <div
        className="bg-gray-800 text-white text-lg flex flex-col border-2 border-accent rounded-lg justify-start size-auto mb-8 small:mr-8 small:mb-0 small:justify-evenly items-center h-fit"
        >
            <NavItem name="Home" selected={page == "Home"} classes="rounded-t-lg" />
            <NavDropdown name="Projects" selected={page == "Projects"} classes="" />
            <NavItem name="Background" selected={page == "Background"} classes="" />
            <NavItem name="Resume" selected={page == "Resume"} classes="rounded-b-lg border-hidden" />
        </div>
    );
}


function NavItem({name, selected, classes}:{name:string, selected:boolean, classes:string}) {

    return (
        <div className={`${selected ? "bg-primary text-secondary cursor-default" : "text-white hover:bg-primary cursor-pointer"} border-b-2 border-accent p-1 small:p-2 w-full text-center ${classes}`}>
            {name}
        </div>
    );
}

function NavDropdown({name, selected, classes}:{name:string, selected:boolean, classes:string}) {

    return (
        <div className="w-full">
            <div className={`${selected ? "bg-primary text-secondary cursor-default" : "text-white hover:bg-primary cursor-pointer"} border-b-2 border-accent p-1 small:p-2 w-full text-center flex flex-row gap-2 small:gap-0 justify-center small:justify-between items-center ${classes}`}>
                <div>{name}</div>
                <FontAwesomeIcon icon={selected ? faChevronUp : faChevronDown} className="fa-fw" size="1x"/>
            </div>
            <div className="flex flex-col justify-center items-center small:justify-start m-0">
                <NavItem name="Minecraft Mod" selected={false} classes="text-xs small:p-1 small:pl-4 small:text-start" />
                <NavItem name="Portfolio" selected={false} classes="text-xs small:p-1 small:pl-4 small:text-start" />
                <NavItem name="Tech Roster" selected={false} classes="text-xs small:p-1 small:pl-4 small:text-start" />
                <NavItem name="Link Collection" selected={false} classes="text-xs small:p-1 small:pl-4 small:text-start" />
            </div>
        </div>
    );
}