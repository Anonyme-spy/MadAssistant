import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-12 px-4 mt-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h6 className="text-white text-base uppercase font-semibold mb-4 tracking-wider">Petit intro</h6>
            <p className="text-justify">
              MadAssistant est une plateforme de mise en relation entre les professionnels de la santé et les clients.
              Nous mettons à votre disposition une liste de professionnels de la santé, tels que des médecins,
              des infirmiers,etc... au bout de votre doigt. Notre objectif est de vous aider à trouver le professionnel
              de la santé
              dont vous avez besoin, où que vous soyez. MadAssistant est la solution idéale pour tous vos besoins en
              matière de santé.
            </p>
          </div>

          <div className="col-span-1 flex flex-col items-center text-center">
            <h6 className="text-white text-base uppercase font-semibold mb-4 tracking-wider">Catégories</h6>
            <ul className="flex flex-col gap-1 items-center">
              <li><p className="hover:text-blue-400 transition-colors duration-300">Santé</p></li>
              <li><p className="hover:text-blue-400 transition-colors duration-300">Sécurité</p></li>
              <li><p className="hover:text-blue-400 transition-colors duration-300">Aide</p></li>
              <li><p className="hover:text-blue-400 transition-colors duration-300">Santé mentale</p></li>
            </ul>
          </div>

          <div className="col-span-1 flex flex-col items-center text-center">
            <h6 className="text-white text-base uppercase font-semibold mb-4 tracking-wider">Liens rapides</h6>
            <ul className="flex flex-col gap-1 items-center">
              <li><Link to="/category/medical" className="hover:text-blue-400 transition-colors duration-300">Prof
                Médicale</Link></li>
              <li><a href="/category/police" className="hover:text-blue-400 transition-colors duration-300">Polices</a>
              </li>
              <li><a href="category/nurse" className="hover:text-blue-400 transition-colors duration-300">Sage
                femmes</a></li>
              <li><a href="category/pompier" className="hover:text-blue-400 transition-colors duration-300">Pompier</a>
              </li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Contactez-nous</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-700 opacity-50" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            Copyright &copy; {new Date().getFullYear()} Tous droits réservés par la team MadAssistant et
            <a href="https://github.com/Anonyme-spy" className="ml-1 text-blue-400 hover:underline">Anonyme-spy</a> .
          </p>


          <div className="flex space-x-3">
            <a href="#"
               className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="#"
               className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-blue-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#"
               className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#"
               className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}