import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaShieldAlt, FaUsers, FaCode, FaHeadset } from 'react-icons/fa';
import Button from '../components/ui/Button';

const WhyChoose = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const advantages = [
    {
      icon: <FaRocket className="h-10 w-10 text-blue-600" />,
      title: 'Solution complète tout-en-un',
      description: 'Remplacez tous vos outils disparates par une solution intégrée qui couvre l\'ensemble des besoins de votre établissement.',
    },
    {
      icon: <FaShieldAlt className="h-10 w-10 text-blue-600" />,
      title: 'Sécurité maximale',
      description: 'Vos données sont protégées par les normes les plus strictes avec chiffrement de bout en bout et conformité RGPD.',
    },
    {
      icon: <FaUsers className="h-10 w-10 text-blue-600" />,
      title: 'Expérience utilisateur intuitive',
      description: 'Interface simple et moderne qui ne nécessite aucune formation approfondie pour être maîtrisée.',
    },
    {
      icon: <FaCode className="h-10 w-10 text-blue-600" />,
      title: 'Développement continu',
      description: 'Des mises à jour régulières avec de nouvelles fonctionnalités basées sur les retours de notre communauté d\'utilisateurs.',
    },
    {
      icon: <FaHeadset className="h-10 w-10 text-blue-600" />,
      title: 'Support client réactif',
      description: 'Notre équipe dédiée répond à vos questions et résout vos problèmes en moins de 24 heures.',
    },
  ];

  const compareFeatures = [
    { name: 'Solution tout-en-un', maestro: true, traditional: false },
    { name: 'Interface intuitive', maestro: true, traditional: false },
    { name: 'Mises à jour régulières', maestro: true, traditional: false },
    { name: 'Support client dédié', maestro: true, traditional: false },
    { name: 'Conformité RGPD', maestro: true, traditional: true },
    { name: 'Application mobile', maestro: true, traditional: false },
    { name: 'Communication intégrée', maestro: true, traditional: false },
    { name: 'Délai de mise en place', maestro: 'Quelques jours', traditional: 'Plusieurs mois' },
    { name: 'Coût total de possession', maestro: 'Faible', traditional: 'Élevé' },
    { name: 'Personnalisation', maestro: true, traditional: true },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Pourquoi choisir <span className="text-blue-600">Maestro-Educ</span> ?
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Découvrez pourquoi plus de 500 établissements scolaires font confiance à notre solution
              pour transformer leur gestion administrative et pédagogique.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Nos avantages distinctifs</h2>
            <p className="mt-4 text-gray-600">
              Maestro-Educ se démarque par son approche centrée sur l'utilisateur et sa compréhension
              profonde des enjeux éducatifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{advantage.title}</h3>
                <p className="mt-2 text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Maestro-Educ vs. Solutions traditionnelles</h2>
            <p className="mt-4 text-gray-600">
              Voyez comment notre solution se compare aux systèmes de gestion scolaire traditionnels.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-4 px-6 text-left rounded-tl-xl">Fonctionnalité</th>
                  <th className="py-4 px-6 text-center">Maestro-Educ</th>
                  <th className="py-4 px-6 text-center rounded-tr-xl">Solutions traditionnelles</th>
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((feature, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}
                  >
                    <td className="py-3 px-6 border-t border-gray-200">{feature.name}</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      {typeof feature.maestro === 'boolean' ? (
                        feature.maestro ? (
                          <FaCheckCircle className="inline text-green-500 h-5 w-5" />
                        ) : (
                          <span className="inline-block h-5 w-5 rounded-full bg-red-100"></span>
                        )
                      ) : (
                        <span className="text-blue-600 font-medium">{feature.maestro}</span>
                      )}
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      {typeof feature.traditional === 'boolean' ? (
                        feature.traditional ? (
                          <FaCheckCircle className="inline text-green-500 h-5 w-5" />
                        ) : (
                          <span className="inline-block h-5 w-5 rounded-full bg-red-100"></span>
                        )
                      ) : (
                        <span className="text-red-600 font-medium">{feature.traditional}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Ce que nos clients disent</h2>
            <p className="mt-4 text-gray-600">
              Des directeurs d'établissement et des enseignants partagent leur expérience avec Maestro-Educ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Depuis que nous avons adopté Maestro-Educ, notre administration est beaucoup plus efficace. Nous gagnons un temps précieux que nous pouvons consacrer à l'essentiel : nos élèves.",
                author: "Jean Dupont",
                role: "Directeur, Collège Saint-Michel",
                image: "https://same-assets.com/images/testimonials/director-1.jpg"
              },
              {
                quote: "La plateforme est incroyablement intuitive. En quelques jours, toute l'équipe pédagogique l'avait adoptée. Le suivi des élèves est maintenant beaucoup plus précis et personnalisé.",
                author: "Marie Laurent",
                role: "Enseignante, Lycée Victor Hugo",
                image: "https://same-assets.com/images/testimonials/teacher-1.jpg"
              },
              {
                quote: "Le module de communication avec les parents a transformé notre relation avec les familles. Nous sommes maintenant en contact constant et constructif.",
                author: "Philippe Martin",
                role: "CPE, Institut Sainte-Anne",
                image: "https://same-assets.com/images/testimonials/staff-1.jpg"
              },
              {
                quote: "En tant que parent, je peux enfin suivre facilement la scolarité de mes enfants. L'application est claire et me permet d'échanger directement avec les enseignants.",
                author: "Sophie Moreau",
                role: "Parent d'élèves",
                image: "https://same-assets.com/images/testimonials/parent-1.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white border border-gray-100 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button as={Link} to="/testimonials" variant="ghost" className="text-blue-700">
              Voir tous les témoignages &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900">Étude de cas : Lycée International de Paris</h2>
              <div className="mt-6 space-y-4 text-gray-700">
                <p>
                  Lorsque le Lycée International de Paris a choisi Maestro-Educ en 2019, l'établissement faisait face à des défis majeurs : des outils obsolètes, une communication inefficace et une charge administrative croissante.
                </p>
                <p>
                  En l'espace de trois mois après l'adoption de notre solution :
                </p>
                <ul className="space-y-2 pl-5">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span>Réduction de 40% du temps consacré aux tâches administratives</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span>Amélioration de 65% de la communication avec les parents</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span>Diminution de 30% des absences non justifiées</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span>Économie de 25 000€ en coûts informatiques annuels</span>
                  </li>
                </ul>
                <p>
                  Aujourd'hui, le Lycée International est devenu notre ambassadeur et accueille régulièrement des visites d'autres établissements souhaitant découvrir Maestro-Educ en action.
                </p>
              </div>
              <div className="mt-8">
                <Button as={Link} to="/contact" variant="primary">
                  Demander une étude personnalisée
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 bg-blue-100 w-24 h-24 rounded-lg"></div>
              <img
                src="https://same-assets.com/images/case-studies/school-1.jpg"
                alt="Lycée International de Paris"
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Prêt à révolutionner votre établissement ?</h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Rejoignez les centaines d'établissements qui ont choisi Maestro-Educ pour leur transformation numérique.
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
    </div>
  );
};

export default WhyChoose;
