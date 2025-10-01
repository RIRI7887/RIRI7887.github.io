import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaUserFriends, FaShieldAlt } from 'react-icons/fa';
import Button from '../components/ui/Button';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <FaGraduationCap className="h-6 w-6 text-blue-600" />,
      title: 'Pour les directeurs',
      description:
        'Pilotez votre établissement avec des tableaux de bord intuitifs et des outils de gestion administrative complets.',
    },
    {
      icon: <FaChalkboardTeacher className="h-6 w-6 text-blue-600" />,
      title: 'Pour les enseignants',
      description:
        'Simplifiez votre quotidien avec nos outils de suivi pédagogique, de gestion des notes et de communication.',
    },
    {
      icon: <FaUserFriends className="h-6 w-6 text-blue-600" />,
      title: 'Pour les parents et élèves',
      description:
        'Suivez les progrès scolaires, communiquez avec l\'équipe pédagogique et accédez aux ressources éducatives en un clic.',
    },
    {
      icon: <FaShieldAlt className="h-6 w-6 text-blue-600" />,
      title: 'Sécurité maximale',
      description:
        'Vos données sont protégées par les normes de sécurité les plus strictes, conformes au RGPD et certifiées ISO 27001.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Simplifiez la gestion <br />
                <span className="text-blue-600">de votre établissement scolaire</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700">
                Maestro-Educ transforme votre école avec une solution intuitive, complète et sécurisée.
                Conçue pour les directeurs, enseignants, parents et élèves.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button as={Link} to="/contact" variant="primary" size="lg">
                  Demander une démo
                </Button>
                <Button as={Link} to="/features" variant="outline" size="lg">
                  Découvrir les fonctionnalités
                </Button>
              </div>
              <div className="mt-8 flex items-center text-sm text-gray-600">
                <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                Plus de 500 établissements nous font confiance
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Présentation de Maestro-Educ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Déjà +2000 utilisateurs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900">Une solution pour toute la communauté éducative</h2>
            <p className="mt-4 text-gray-600">
              Maestro-Educ connecte tous les acteurs de l\'établissement scolaire avec des outils adaptés à chaque besoin.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button as={Link} to="/features" variant="secondary" size="lg">
              Toutes les fonctionnalités
            </Button>
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold">Prêt à moderniser votre établissement ?</h2>
              <p className="mt-4 text-blue-100">
                Démarrez votre transformation numérique dès aujourd\'hui avec Maestro-Educ.
              </p>
            </div>
            <div className="flex gap-4">
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
                to="/pricing"
                variant="ghost"
                size="lg"
                className="border border-white text-white hover:bg-blue-600"
              >
                Voir les tarifs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900">Ils nous font confiance</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Découvrez pourquoi des centaines d\'établissements ont choisi Maestro-Educ pour leur transformation numérique.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex-shrink-0">
                <img
                  src="https://same-assets.com/images/testimonials/principal.jpg"
                  alt="Directeur d'établissement"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-700 italic">
                  "Maestro-Educ a transformé la façon dont nous gérons notre établissement. Les processus administratifs qui prenaient des heures sont maintenant réalisés en quelques clics. L\'interface est intuitive et l\'équipe de support est exceptionnelle."
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-blue-900">Marie Dupont</h4>
                  <p className="text-sm text-gray-500">Directrice, Lycée International de Paris</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button as={Link} to="/testimonials" variant="ghost" className="text-blue-700">
              Voir tous les témoignages &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900">Actualités et ressources</h2>
              <p className="mt-2 text-gray-600">
                Découvrez nos derniers articles sur la transformation numérique de l\'éducation
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button as={Link} to="/blog" variant="ghost" className="text-blue-700">
                Voir tous les articles &rarr;
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Link
                key={item}
                to="/blog"
                className="group block overflow-hidden rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img
                    src={`https://same-assets.com/images/blog/article-${item}.jpg`}
                    alt="Article de blog"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium">
                    {item === 1 && "Gestion scolaire"}
                    {item === 2 && "Pédagogie"}
                    {item === 3 && "Innovation"} 
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {item === 1 && "Les 7 clés d\'une gestion scolaire efficace"}
                    {item === 2 && "Comment le numérique transforme la pédagogie"}
                    {item === 3 && "L\'IA au service de l\'éducation : opportunités et défis"}
                  </h3>
                  <p className="mt-2 text-gray-600 line-clamp-2">
                    {item === 1 && "Découvrez les meilleures pratiques pour une gestion optimale de votre établissement scolaire à l\'ère du numérique."}
                    {item === 2 && "Une analyse des outils numériques qui révolutionnent l\'enseignement et l\'apprentissage en classe."}
                    {item === 3 && "Comment l\'intelligence artificielle peut aider les enseignants et personnaliser l\'apprentissage des élèves."}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
