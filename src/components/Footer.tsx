import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faF } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

    const FULL_NAME:string = "Gordon Joseph Hutchinson";

    const DATE_STRING:string = "December, 2024"

    return (
        <div className="bg-primary w-full flex flex-row items-center justify-between py-8 px-12 text-secondary">
            <div className="text-xl">
                <FontAwesomeIcon icon={faF} className="fa-fw" size="2x" />
            </div>
            <div className="text-xl flex flex-col items-end">
                <div>{FULL_NAME}</div>
                <div>{DATE_STRING}</div>
            </div>
        </div>
    );
}