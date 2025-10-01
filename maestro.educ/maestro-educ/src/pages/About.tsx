import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaShieldAlt, FaGlobe } from 'react-icons/fa';
import Button from '../components/ui/Button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <FaUsers className="h-10 w-10 text-blue-600" />,
      title: 'Communauté',
      description: 'Nous croyons que l\'éducation est une affaire de communauté. Notre plateforme connecte tous les acteurs de l\'écosystème éducatif.',
    },
    {
      icon: <FaLightbulb className="h-10 w-10 text-blue-600" />,
      title: 'Innovation',
      description: 'Nous repoussons constamment les limites technologiques pour offrir des solutions qui répondent aux défis éducatifs d\'aujourd\'hui et de demain.',
    },
    {
      icon: <FaShieldAlt className="h-10 w-10 text-blue-600" />,
      title: 'Fiabilité',
      description: 'La confiance est notre priorité. Nous assurons une disponibilité maximale et la sécurité des données de nos utilisateurs.',
    },
    {
      icon: <FaGlobe className="h-10 w-10 text-blue-600" />,
      title: 'Accessibilité',
      description: 'Nous concevons des solutions simples et intuitives, accessibles à tous, quelle que soit l\'expertise technique.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Notre mission : <span className="text-blue-600">transformer l'éducation</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Chez Maestro-Educ, nous croyons fermement que la technologie peut être un formidable levier pour améliorer l'expérience éducative, tant pour les administrateurs que pour les enseignants, les parents et les élèves.
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900">Notre histoire</h2>
              <div className="mt-6 space-y-4 text-gray-700">
                <p>
                  Maestro-Educ est né en 2015 de la frustration de trois enseignants face aux outils administratifs obsolètes et aux processus inefficaces qui ralentissaient leur travail quotidien.
                </p>
                <p>
                  Marc, Sophie et Thomas ont alors imaginé une solution qui pourrait connecter tous les acteurs de l'écosystème éducatif sur une plateforme unique, intuitive et puissante. Leur vision : libérer du temps pour l'essentiel - l'enseignement et l'apprentissage.
                </p>
                <p>
                  Après deux ans de développement en étroite collaboration avec des écoles pilotes, la première version de Maestro-Educ a été lancée. Le succès a été immédiat, avec plus de 50 établissements adoptant la solution dès la première année.
                </p>
                <p>
                  Aujourd'hui, Maestro-Educ est utilisé par plus de 500 établissements dans toute la francophonie, et notre équipe de 45 passionnés continue d'innover pour créer la meilleure solution de gestion scolaire du marché.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 bg-blue-100 w-24 h-24 rounded-lg"></div>
              <div className="absolute -right-4 -bottom-4 bg-blue-100 w-32 h-32 rounded-lg"></div>
              <img
                src="https://same-assets.com/images/about/team-photo.jpg"
                alt="L'équipe Maestro-Educ"
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900">Nos valeurs</h2>
            <p className="mt-4 text-gray-700">
              Ces principes fondamentaux guident chacune de nos décisions et sous-tendent chaque fonctionnalité de notre plateforme.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl shadow-md text-center"
              >
                <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900">L'équipe dirigeante</h2>
            <p className="mt-4 text-gray-700">
              Des professionnels passionnés qui conjuguent expertise pédagogique et maîtrise technologique.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Marc Dubois',
                role: 'Co-fondateur & CEO',
                image: 'https://same-assets.com/images/team/team-1.jpg',
                bio: 'Ancien directeur de lycée et tech-enthusiast, Marc apporte sa vision et son expérience du terrain.',
              },
              {
                name: 'Sophie Lelièvre',
                role: 'Co-fondatrice & CPO',
                image: 'https://same-assets.com/images/team/team-2.jpg',
                bio: 'Professeure de mathématiques pendant 12 ans, Sophie comprend parfaitement les besoins des utilisateurs.',
              },
              {
                name: 'Thomas Moreau',
                role: 'Co-fondateur & CTO',
                image: 'https://same-assets.com/images/team/team-3.jpg',
                bio: 'Ingénieur en informatique et ancien enseignant, Thomas dirige le développement technique de Maestro-Educ.',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900">Nos partenaires</h2>
            <p className="mt-4 text-gray-700">
              Nous travaillons avec des institutions de premier plan pour garantir l'excellence de notre solution.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24"
              >
                <img
                  src={`https://same-assets.com/images/logos/partner-${index + 1}.svg`}
                  alt={`Partenaire ${index + 1}`}
                  className="max-h-12 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Prêt à rejoindre l'aventure Maestro-Educ ?</h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Découvrez comment notre solution peut transformer la gestion de votre établissement scolaire et améliorer l'expérience de tous les utilisateurs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                as={Link}
                to="/contact"
                variant="outline"
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 border-white"
              >
                Demander une démo
              </Button>
              <Button
                as={Link}
                to="/features"
                variant="ghost"
                size="lg"
                className="border border-white text-white hover:bg-blue-600"
              >
                Découvrir les fonctionnalités
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
