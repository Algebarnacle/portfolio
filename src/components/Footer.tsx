import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    const FULL_NAME:string = "Gordon Joseph Hutchinson";

    const DATE_STRING:string = "December, 2024"

    return (
        <div className="bg-primary w-full flex flex-row items-center justify-between py-8 px-12 text-secondary">
            <div className="text-xl flex flex-row gap-4">
                <FontAwesomeIcon icon={faLinkedin} className="fa-fw cursor-pointer" size="2x" />
                <FontAwesomeIcon icon={faGithub} className="fa-fw cursor-pointer" size="2x" />
            </div>
            <div className="text-xl flex flex-col items-end">
                <div>{FULL_NAME}</div>
                <div>{DATE_STRING}</div>
            </div>
        </div>
    );
}