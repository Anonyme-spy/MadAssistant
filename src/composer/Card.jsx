import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Card = ({icon, p, title}) => {
    return (
        <div className="lg:w-[50%] :w-[50%] mb-4 card sm:w-full">
            <div className="bg-white  text-center">
                <div className="p-4 gap-7">
                    <FontAwesomeIcon icon={icon} className={"text-4xl mb-3 sm:text-[1rem]"}/>
                    <h3 id="sante" className="text-xl font-semibold mb-5">{title}</h3>
                    <p id="sante-desc" className="text-gray-700 mb-5">{p}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    icon: PropTypes.any,
    p: PropTypes.string,
    title: PropTypes.string
}


export default Card;