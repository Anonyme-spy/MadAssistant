import '/src/css/home.css';
import Card from "../composer/Card.jsx";
import {faHeartbeat, faShieldAlt, faFireExtinguisher} from "@fortawesome/free-solid-svg-icons";
import card from "../json/card.json"
import {NavLink} from "react-router-dom";
import Button from "../composer/Button.jsx";

export default function Home() {
    const sante = card.sante
    const securite = card.securite
    const incendie = card.incendie

    return (<>
            <section
                id="home"
                className="banner text-center text-white py-5"
                style={{background: "linear-gradient(to bottom right, #007bff, #003c8f)"}}
            >
                <div className="container mx-auto">
                    <h2 className="lg:text-5xl font-bold md:text-4xl text-2xl">
                        Accédez facilement aux services d&#39;urgence à Madagascar
                    </h2>
                    <p className="text-[1rem] lg:text-xl md:text-xl">Votre guide rapide pour contacter les numéros
                        d&#39;urgence.</p>
                </div>
            </section>
            <div className={"container mx-auto flex flex-col items-center justify-center"}>
                <h1 className={"text-2xl text-center mt-4 mb-5"}>Catégories d&#39;Urgence</h1>
                <div className="flex lg:flex-row justify-center  gap-3 mt-5 card-container md:flex-row flex-col">
                    <Card icon={faHeartbeat} p={sante.description} title={sante.title}/>
                    <Card icon={faShieldAlt} p={securite.description} title={securite.title}/>
                    <Card icon={faFireExtinguisher} p={incendie.description} title={incendie.title}/>
                </div>
                <NavLink to={"/Category"}><Button/></NavLink>
            </div>
        </>
    );
}