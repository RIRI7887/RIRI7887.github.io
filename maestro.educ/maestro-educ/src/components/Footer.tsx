import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Maestro-Educ',
      links: [
        { name: 'Accueil', path: '/' },
        { name: 'À propos', path: '/about' },
        { name: 'Fonctionnalités', path: '/features' },
        { name: 'Pourquoi nous choisir', path: '/why-choose' },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { name: 'Tarifs', path: '/pricing' },
        { name: 'Témoignages', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Blog', path: '/blog' },
      ],
    },
    {
      title: 'Nous contacter',
      links: [
        { name: 'Contact & Démo', path: '/contact' },
        { name: 'Support client', path: '/contact#support' },
        { name: 'Politique de confidentialité', path: '/privacy' },
        { name: 'Conditions d\'utilisation', path: '/terms' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-md bg-blue-600 text-center text-xl font-bold text-white flex items-center justify-center">M</div>
              <span className="ml-2 font-bold text-xl text-white">Maestro-Educ</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Transformez la gestion de votre établissement scolaire avec notre solution complète et innovante.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-lg">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Maestro-Solution. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                Conçu avec passion par Maestro-Solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
