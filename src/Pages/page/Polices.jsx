import polices from "../../json/Polices.json";
import Police_Card from "../../composer/Police_Card.jsx";

export function Polices() {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center">
      <h2 className="text-4xl font-bold mt-5 mb-5">Polices</h2>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center content-center">
        {Object.keys(polices).map((key) => (
          <Police_Card
            key={key}
            nom={polices[key].nom}
            localisation={polices[key].localisation}
            telephone={polices[key].telephone}
            icon="fa-scale-balanced"
          />
        ))
        }
      </div>
    </section>
  );
}