import Ambulances from "../../json/Ambulance.json";
import { Medical_card } from "../../composer/Medical_card.jsx";

export default function Ambulance() {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center">
      <h2 className="text-4xl font-bold mt-5 mb-5">Liste des ambulances</h2>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center content-center">
        {Object.keys(Ambulances).map((key) => (
          <Medical_card
            key={key}
            nom={Ambulances[key].nom}
            localisation={Ambulances[key].localisation}
            telephone={Ambulances[key].instructions}
            disponibilite={Ambulances[key].disponibilite}
            instructions={Ambulances[key].instructions}
          />
        ))
        }
      </div>
    </section>
  );
}