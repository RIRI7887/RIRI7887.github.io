import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Button from '../components/ui/Button';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pricingPlans = [
    {
      name: 'Essentiel',
      description: 'Pour les petits établissements',
      monthlyPrice: 299,
      annualPrice: 249,
      features: [
        'Jusqu\'à 250 élèves',
        'Gestion des dossiers élèves',
        'Gestion des emplois du temps',
        'Notes et bulletins scolaires',
        'Portail parents et élèves',
        'Support par email',
      ],
      popular: false,
      color: 'blue',
    },
    {
      name: 'Premium',
      description: 'Pour les établissements de taille moyenne',
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        'Jusqu\'à 750 élèves',
        'Toutes les fonctionnalités Essentiel',
        'Communication avec les parents',
        'Gestion des absences et retards',
        'Paiements en ligne',
        'Support téléphonique prioritaire',
        'Formation de l\'équipe',
      ],
      popular: true,
      color: 'blue',
    },
    {
      name: 'Entreprise',
      description: 'Pour les grands établissements et groupes scolaires',
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        'Élèves illimités',
        'Toutes les fonctionnalités Premium',
        'Multi-établissements',
        'API pour intégrations personnalisées',
        'Tableaux de bord analytiques avancés',
        'Gestionnaire de compte dédié',
        'Formation illimitée',
        'SLA garanti',
      ],
      popular: false,
      color: 'blue',
    },
  ];

  const faqs = [
    {
      question: 'Puis-je changer de formule en cours d\'année ?',
      answer: 'Oui, vous pouvez passer à une formule supérieure à tout moment. Le coût sera ajusté au prorata du temps restant. Pour passer à une formule inférieure, le changement sera effectif à la fin de votre période de facturation actuelle.',
    },
    {
      question: 'Existe-t-il des frais de mise en service ?',
      answer: 'Non, il n\'y a pas de frais de mise en service. Nous vous accompagnons gratuitement dans la configuration initiale de votre compte et l\'importation de vos données.',
    },
    {
      question: 'Comment fonctionne la période d\'essai ?',
      answer: 'Vous pouvez essayer Maestro-Educ gratuitement pendant 30 jours avec toutes les fonctionnalités de la formule Premium. Aucune carte bancaire n\'est requise pour démarrer l\'essai.',
    },
    {
      question: 'Proposez-vous des remises pour les établissements publics ?',
      answer: 'Oui, nous proposons des tarifs spéciaux pour les établissements publics et les associations. Contactez-nous pour en savoir plus sur notre programme pour l\'enseignement public.',
    },
    {
      question: 'Que se passe-t-il si le nombre d\'élèves dépasse celui de notre forfait ?',
      answer: 'Si vous dépassez le nombre d\'élèves de votre forfait, nous vous contacterons pour discuter d\'un passage à l\'offre supérieure. Nous avons aussi des options flexibles pour les variations temporaires d\'effectifs.',
    },
    {
      question: 'Puis-je exporter mes données si je décide de changer de solution ?',
      answer: 'Absolument. Vos données vous appartiennent. Maestro-Educ vous permet d\'exporter facilement toutes vos données dans des formats standards (CSV, Excel) à tout moment.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Tarifs <span className="text-blue-600">transparents</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Des formules adaptées à chaque type d'établissement, sans frais cachés.
              Tous nos plans incluent les mises à jour régulières et un support de qualité.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center p-1 bg-gray-100 rounded-lg">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-gray-600 hover:text-blue-700'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Mensuel
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'annual'
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-gray-600 hover:text-blue-700'
                }`}
                onClick={() => setBillingCycle('annual')}
              >
                Annuel <span className="text-xs text-green-600 font-bold">-20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl border ${
                  plan.popular ? 'border-blue-600 shadow-xl' : 'border-gray-200 shadow-md'
                } overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 tracking-wider uppercase font-semibold transform translate-x-2 -translate-y-2 rotate-45">
                    Populaire
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-blue-900">{plan.name}</h3>
                  <p className="mt-1 text-gray-600">{plan.description}</p>
                  <div className="mt-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-extrabold text-blue-900">
                        {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}€
                      </span>
                      <span className="ml-2 text-gray-600 text-sm">/mois</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="mt-1 text-sm text-green-600">
                        Facturation annuelle ({(plan.annualPrice * 12).toLocaleString()}€/an)
                      </div>
                    )}
                  </div>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <FaCheck className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      as={Link}
                      to="/contact"
                      variant={plan.popular ? 'primary' : 'outline'}
                      className={`w-full justify-center ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'text-blue-600 border-blue-600'
                      }`}
                      size="lg"
                    >
                      {plan.popular ? 'Commencer maintenant' : 'Choisir ce plan'}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-blue-900">Essayez Maestro-Educ gratuitement</h2>
                <p className="mt-4 text-gray-600">
                  Testez toutes les fonctionnalités pendant 30 jours sans engagement.
                  Aucune carte bancaire n'est nécessaire pour démarrer votre essai.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">Accès complet à toutes les fonctionnalités</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">Session de démonstration personnalisée</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">Assistance à la migration des données</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    as={Link}
                    to="/contact"
                    variant="primary"
                    size="lg"
                  >
                    Démarrer l'essai gratuit
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative h-full">
                <img
                  src="https://same-assets.com/images/trial/free-trial.jpg"
                  alt="Essai gratuit"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
                  <div className="text-white text-center px-6">
                    <div className="text-6xl font-extrabold">30</div>
                    <div className="text-xl font-medium mt-2">jours d'essai</div>
                    <div className="mt-4 text-blue-200">Sans engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900">Besoin d'une solution sur mesure ?</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Nous proposons des solutions adaptées aux besoins spécifiques des groupes scolaires,
              des académies et des établissements ayant des exigences particulières.
            </p>
            <div className="mt-8">
              <Button as={Link} to="/contact" variant="outline" className="text-blue-600 border-blue-600">
                Contactez notre équipe commerciale
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 text-center">Questions fréquentes</h2>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-blue-900">{faq.question}</span>
                    <span className="ml-6 flex-shrink-0 text-blue-600">
                      {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Prêt à transformer votre établissement ?</h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Rejoignez les centaines d'établissements qui ont déjà adopté Maestro-Educ pour leur transformation numérique.
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
                to="/contact"
                variant="ghost"
                size="lg"
                className="border border-white text-white hover:bg-blue-600"
              >
                Démarrer l'essai gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
