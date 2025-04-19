import { Button, Card } from "flowbite-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Category_Card({ title, p, icon, link }) {
  let navigate = useNavigate();
  return (
    <Card
      className="max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 flex flex-col items-center justify-center text-center m-5 card">
      <FontAwesomeIcon icon={["fas", icon]} className={"text-4xl mb-3"} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {p}
      </p>
      <Button onClick={() => navigate(`/category/${link}`)} className="mt-4">
        Consulter
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
}

Category_Card.defaultProps = {
  title: "Title",
  p: "Paragraph",
  icon: "",
  link: "/"
};

Category_Card.propTypes = {
  title: PropTypes.string,
  p: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string
};
