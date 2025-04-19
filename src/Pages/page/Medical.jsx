import { Medical_card } from "../../composer/Medical_card.jsx";
import medecin from "../../json/medecin.json";

export default function Medical() {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center">
      <h2 className="text-4xl font-bold mt-5 mb-5">Professeur Medical</h2>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center content-center">
        {Object.keys(medecin).map((key) => (
          <Medical_card
            key={key}
            nom={medecin[key].nom}
            localisation={medecin[key].localisation}
            telephone={medecin[key].telephone}
            clinique={medecin[key].clinique}
            retraite={medecin[key].retraite}
            instructions={medecin[key].instructions}
          />
        ))
        }
      </div>
    </section>
  );
}