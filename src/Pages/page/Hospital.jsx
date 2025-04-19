import Hospitals from "../../json/Hospital.json";
import Police_Card from "../../composer/Police_Card.jsx";

export default function Hospital() {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center">
      <h2 className="text-4xl font-bold mt-5 mb-5">Hospital</h2>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center content-center">
        {Object.keys(Hospitals).map((key) => (
          <Police_Card
            key={key}
            nom={Hospitals[key].nom}
            localisation={Hospitals[key].localisation}
            telephone={Hospitals[key].telephone}
            icon="fa-hospital"
          />
        ))
        }
      </div>
    </section>
  );
}