import PropTypes from "prop-types";

const Language = ({img, lg}) => {
    return (
        <a href="#"
           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
           role="menuitem">
            <div className="inline-flex items-center">
                <img src={img} className="h-3.5 w-3.5 rounded-full me-2"
                     alt={"French flag"}/>
                {lg}
            </div>
        </a>
    )
}

Language.propTypes = {
    img: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired
}

export default Language;