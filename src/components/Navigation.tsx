import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Navigation({page}:{page:string}) {

    return (
        <div
        className="bg-gray-800 text-white text-lg flex flex-col border-2 border-accent rounded-lg justify-start size-auto mr-8 items-center h-fit"
        >
            <NavItem name="Home" selected={page == "Home"} classes="rounded-t-lg" />
            <NavDropdown name="Projects" selected={page == "Projects"} classes="" />
            <NavItem name="Background" selected={page == "Background"} classes="" />
            <NavItem name="Resume" selected={page == "Resume"} classes="rounded-b-lg border-b-0" />
        </div>
    );
}


function NavItem({name, selected, classes}:{name:string, selected:boolean, classes:string}) {

    return (
        <div className={`${selected ? "bg-primary text-secondary cursor-default" : "text-white hover:bg-primary cursor-pointer"} border-b-2 border-accent p-2 w-full text-center ${classes}`}>
            {name}
        </div>
    );
}

function NavDropdown({name, selected, classes}:{name:string, selected:boolean, classes:string}) {

    return (
        <div className={`${selected ? "bg-primary text-secondary cursor-default" : "text-white hover:bg-primary cursor-pointer"} border-b-2 border-accent p-2 w-full text-center flex flex-row justify-between items-center ${classes}`}>
            <div>{name}</div>
            <FontAwesomeIcon icon={selected ? faChevronUp : faChevronDown} className="fa-fw" size="1x"/>
        </div>
    );
}