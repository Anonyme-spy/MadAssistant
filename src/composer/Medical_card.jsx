import { Button, Card, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";

export const Medical_card = ({
                               nom,
                               localisation,
                               clinique = null,
                               retraite = null,
                               telephone,
                               instructions,
                               specialisation = null,
                               disponibilite = null
                             }) => {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef < HTMLInputElement > (null);
  let ret = true;
  let spe = true;
  let cli = true;
  let dispo = true;
  if (retraite === null) {
    ret = false;
  }
  if (specialisation === null) {
    spe = false;
  }
  if (clinique === null) {
    cli = false;
  }
  if (disponibilite === null) {
    dispo = false;
  }

  return (
    <>
      <Card
        className="max-w-sm min-w-96 p-6 hover: bg-white rounded-lg shadow-lg dark:bg-gray-800 flex flex-col items-center justify-center text-center m-5">
        <FontAwesomeIcon icon={faUserDoctor} className={"text-4xl mb-3"} />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          {nom}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {localisation}
        </p>
        <Button onClick={() => setOpenModal(true)} className="mt-4">
          voir plus
          <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Card>
      <Modal show={openModal} size="lg" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}
             className="transform transition-all duration-300 ease-in-out"
             theme={{
               content: {
                 base: "relative h-full md:h-auto animate-slideDown"
               }
             }}
      >
        <Modal.Header className="bg-blue-500">Détails</Modal.Header>
        <Modal.Body className="flex flex-col gap-2">
          <p className="mt-3"><strong>Nom:</strong> {nom}</p>
          <p><strong>Localisation:</strong> {localisation}</p>
          {spe === true && <p><strong>Spécialisation:</strong> {specialisation}</p>}
          {cli === true && <p><strong>Clinique:</strong> {clinique}</p>}
          {ret === true && <p><strong>Retraite:</strong> {retraite ? "Oui" : "Non"}</p>}
          <p><strong>Téléphone:</strong> {telephone}</p>
          {dispo === true && <p><strong>Disponibilité:</strong> {disponibilite}</p>}
          <p><strong>Instructions:</strong> {instructions}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

Medical_card.protoTypes = {
  nom: PropTypes.string,
  localisation: PropTypes.string,
  clinique: PropTypes.string,
  retraite: PropTypes.bool,
  telephone: PropTypes.string,
  instructions: PropTypes.string,
  specialisation: PropTypes.string,
  disponibilite: PropTypes.string
};