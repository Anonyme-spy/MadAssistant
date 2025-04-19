import { Card } from "flowbite-react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Police_Card({ nom, localisation, telephone, icon }) {
  return (
    <Card href="#" className="max-w-sm min-w-96">
      <FontAwesomeIcon icon={["fas", icon]} className={"text-4xl mb-3"} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {nom}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 ">
        {localisation}
      </p>
      <p className={"text-[1rem]"}><strong>Téléphone:</strong>{telephone}</p>
    </Card>
  );
}

Police_Card.propTypes = {
  nom: PropTypes.string,
  localisation: PropTypes.string,
  telephone: PropTypes.string,
  icon: PropTypes.string
};
