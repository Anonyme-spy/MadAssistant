import Vetos from "../../json/veto.json";
import Police_Card from "../../composer/Police_Card.jsx";

export default function Veto() {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center">
      <h2 className="text-4xl font-bold mt-5 mb-5">Vétérinaires</h2>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center content-center">
        {Object.keys(Vetos).map((key) => (
          <Police_Card
            key={key}
            nom={Vetos[key].nom}
            localisation={Vetos[key].localisation}
            telephone={Vetos[key].telephone}
            icon="shield-dog"
          />
        ))
        }
      </div>
    </section>
  );
}