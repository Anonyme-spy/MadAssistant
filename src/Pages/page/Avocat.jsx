import Avocats from "../../json/Avocat.json";
import { Medical_card } from "../../composer/Medical_card.jsx";

export default function Avocat() {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center">
      <h2 className="text-4xl font-bold mt-5 mb-5">Liste des avocats</h2>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center content-center">
        {Object.keys(Avocats).map((key) => (
          <Medical_card
            key={key}
            nom={Avocats[key].nom}
            localisation={Avocats[key].localisation}
            telephone={Avocats[key].telephone}
            instructions={Avocats[key].instructions}
            specialisation={Avocats[key].specialisation}
          />
        ))
        }
      </div>
    </section>
  );
}