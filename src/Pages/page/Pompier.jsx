import Pompiers from "../../json/Pompier.json";
import Police_Card from "../../composer/Police_Card.jsx";

export default function Pompier() {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center">
      <h2 className="text-4xl font-bold mt-5 mb-5">Pompier</h2>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center content-center">
        {Object.keys(Pompiers).map((key) => (
          <Police_Card
            key={key}
            nom={Pompiers[key].nom}
            localisation={Pompiers[key].localisation}
            telephone={Pompiers[key].telephone}
            icon="fa-fire-extinguisher"
          />
        ))
        }
      </div>
    </section>
  );
}