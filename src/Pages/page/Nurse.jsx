import Nurses from "../../json/nurse.json";
import Police_Card from "../../composer/Police_Card.jsx";

export default function Nurse() {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center">
      <h2 className="text-4xl font-bold mt-5 mb-5">Sage femmes</h2>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center content-center">
        {Object.keys(Nurses).map((key) => (
          <Police_Card
            key={key}
            nom={Nurses[key].nom}
            localisation={Nurses[key].localisation}
            telephone={Nurses[key].telephone}
            icon="user-nurse"
          />
        ))
        }
      </div>
    </section>
  );
}