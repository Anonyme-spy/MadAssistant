import Gendarmeries from "../../json/gendarmerie.json";
import Police_Card from "../../composer/Police_Card.jsx";

export default function Gendarmerie() {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center">
      <h2 className="text-4xl font-bold mt-5 mb-5">Gendarmeries</h2>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center content-center">
        {Object.keys(Gendarmeries).map((key) => (
          <Police_Card
            key={key}
            nom={Gendarmeries[key].nom}
            localisation={Gendarmeries[key].localisation}
            telephone={Gendarmeries[key].telephone}
            icon="fa-scale-balanced"
          />
        ))
        }
      </div>
    </section>
  );
}