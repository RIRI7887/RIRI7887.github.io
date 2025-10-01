import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaSearch, FaHeadset } from 'react-icons/fa';
import Button from '../components/ui/Button';

type FaqCategory = 'général' | 'fonctionnalités' | 'technique' | 'tarifs' | 'sécurité';

interface FaqItem {
  question: string;
  answer: string;
  category: FaqCategory;
}

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory | 'tous'>('tous');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqItems: FaqItem[] = [
    {
      question: 'Qu\'est-ce que Maestro-Educ ?',
      answer: 'Maestro-Educ est une solution complète de gestion scolaire conçue pour les établissements de tous niveaux. Notre plateforme permet aux directeurs, enseignants, parents et élèves d\'accéder à un environnement numérique partagé qui simplifie l\'administration, la communication et le suivi pédagogique.',
      category: 'général',
    },
    {
      question: 'Puis-je essayer Maestro-Educ gratuitement ?',
      answer: 'Oui ! Nous proposons un essai gratuit de 30 jours avec accès à toutes les fonctionnalités. Aucune carte bancaire n\'est requise pour démarrer votre période d\'essai. Vous pouvez vous inscrire directement depuis notre page d\'accueil.',
      category: 'général',
    },
    {
      question: 'Combien de temps faut-il pour mettre en place Maestro-Educ ?',
      answer: 'La mise en place de Maestro-Educ est rapide et simple. Après votre inscription, votre environnement est disponible immédiatement. L\'importation de vos données existantes (élèves, enseignants, classes) peut prendre de quelques heures à quelques jours selon la taille de votre établissement. Notre équipe vous accompagne à chaque étape du processus.',
      category: 'général',
    },
    {
      question: 'Quelles fonctionnalités sont disponibles pour les directeurs ?',
      answer: 'Les directeurs et l\'équipe administrative bénéficient d\'un tableau de bord complet permettant de gérer les inscriptions, les emplois du temps, le personnel, les finances, les communications, et d\'accéder à des statistiques détaillées sur l\'établissement. La plateforme centralise toutes les informations nécessaires à la prise de décision et à la gestion quotidienne.',
      category: 'fonctionnalités',
    },
    {
      question: 'Comment les enseignants utilisent-ils Maestro-Educ ?',
      answer: 'Les enseignants disposent d\'outils pour créer et partager des cours, gérer les devoirs et les évaluations, suivre la progression des élèves, communiquer avec les familles, et collaborer avec leurs collègues. Notre interface intuitive leur permet de se concentrer sur leur pédagogie plutôt que sur des tâches administratives.',
      category: 'fonctionnalités',
    },
    {
      question: 'Quelles informations les parents peuvent-ils consulter ?',
      answer: 'Les parents ont accès aux emplois du temps, aux notes et évaluations, aux devoirs à faire, aux absences et retards, et peuvent communiquer directement avec l\'équipe pédagogique. Ils reçoivent également des notifications importantes concernant la vie scolaire de leurs enfants.',
      category: 'fonctionnalités',
    },
    {
      question: 'Est-ce que Maestro-Educ fonctionne sur mobile ?',
      answer: 'Oui, Maestro-Educ est entièrement responsive et accessible sur tous les appareils. Nous proposons également des applications mobiles dédiées pour iOS et Android, permettant aux utilisateurs d\'accéder à toutes les fonctionnalités depuis leur smartphone ou tablette, avec des notifications en temps réel.',
      category: 'technique',
    },
    {
      question: 'Puis-je importer mes données existantes ?',
      answer: 'Absolument. Maestro-Educ propose des outils d\'importation pour migrer facilement vos données depuis d\'autres systèmes. Nous prenons en charge les formats Excel, CSV et XML les plus courants, et notre équipe technique peut vous aider à convertir vos données si nécessaire.',
      category: 'technique',
    },
    {
      question: 'Comment sont gérées les mises à jour ?',
      answer: 'Les mises à jour sont automatiques et régulières, généralement déployées pendant les périodes de faible activité pour minimiser l\'impact sur vos utilisateurs. Nous annonçons les nouvelles fonctionnalités à l\'avance et proposons des tutoriels pour vous aider à les utiliser efficacement.',
      category: 'technique',
    },
    {
      question: 'Quels sont les tarifs de Maestro-Educ ?',
      answer: 'Nous proposons plusieurs formules adaptées à la taille et aux besoins de votre établissement. Les tarifs débutent à 249€/mois (engagement annuel) pour les petits établissements. Vous pouvez consulter notre page Tarifs pour plus de détails ou contacter notre équipe commerciale pour une offre personnalisée.',
      category: 'tarifs',
    },
    {
      question: 'Y a-t-il des frais supplémentaires à prévoir ?',
      answer: 'Non, nos tarifs sont tout compris et incluent l\'hébergement, les mises à jour, le support technique et toutes les fonctionnalités de votre formule. Aucuns frais cachés ni coûts supplémentaires ne sont à prévoir.',
      category: 'tarifs',
    },
    {
      question: 'Proposez-vous des tarifs spéciaux pour les établissements publics ?',
      answer: 'Oui, nous proposons des tarifs préférentiels pour les établissements publics, les associations et les groupes scolaires. Contactez notre équipe commerciale pour en savoir plus sur nos programmes spécifiques.',
      category: 'tarifs',
    },
    {
      question: 'Comment mes données sont-elles protégées ?',
      answer: 'La sécurité est notre priorité absolue. Maestro-Educ utilise un chiffrement de bout en bout, des serveurs sécurisés avec redondance géographique, et des sauvegardes quotidiennes. Nous sommes conformes au RGPD et certifiés ISO 27001. Toutes les données sensibles sont stockées en Europe.',
      category: 'sécurité',
    },
    {
      question: 'Maestro-Educ est-il conforme au RGPD ?',
      answer: 'Oui, Maestro-Educ est entièrement conforme au Règlement Général sur la Protection des Données (RGPD). Nous agissons en tant que sous-traitant de données, et notre contrat inclut toutes les clauses nécessaires pour garantir la conformité de notre service avec la réglementation européenne.',
      category: 'sécurité',
    },
    {
      question: 'Que se passe-t-il si je décide de changer de solution ?',
      answer: 'Vous restez propriétaire de vos données et pouvez les exporter à tout moment dans des formats standards. Nous facilitons la transition si vous décidez de changer de solution, sans pénalité ni restriction d\'accès à vos informations.',
      category: 'sécurité',
    },
  ];

  // Filter FAQs based on search query and selected category
  const filteredFaqs = faqItems.filter((faq) => {
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'tous' || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories: { id: FaqCategory | 'tous'; label: string }[] = [
    { id: 'tous', label: 'Toutes les catégories' },
    { id: 'général', label: 'Général' },
    { id: 'fonctionnalités', label: 'Fonctionnalités' },
    { id: 'technique', label: 'Technique' },
    { id: 'tarifs', label: 'Tarifs' },
    { id: 'sécurité', label: 'Sécurité & Confidentialité' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Questions <span className="text-blue-600">fréquentes</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Tout ce que vous devez savoir sur Maestro-Educ. Si vous ne trouvez pas la réponse à votre question,
              n'hésitez pas à contacter notre équipe.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-semibold text-blue-900">{faq.question}</span>
                      <span className="ml-4 flex-shrink-0 text-blue-600">
                        {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    {expandedIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">Aucune question ne correspond à votre recherche.</p>
                <button
                  className="mt-4 text-blue-600 font-medium"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('tous');
                  }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-blue-900">Vous n'avez pas trouvé votre réponse ?</h2>
                <p className="mt-4 text-gray-600">
                  Notre équipe de support est disponible pour répondre à toutes vos questions et vous aider à tirer le meilleur parti de Maestro-Educ.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <FaHeadset className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Support par chat en direct</h3>
                      <p className="text-gray-600">Disponible du lundi au vendredi, de 8h à 18h</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-semibold text-blue-900">Email</h3>
                    <p className="text-gray-600">support@maestro-educ.com</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-semibold text-blue-900">Téléphone</h3>
                    <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button as={Link} to="/contact" variant="primary">
                    Contacter le support
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img
                  src="https://same-assets.com/images/support/support-team.jpg"
                  alt="Équipe de support"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Ressources utiles</h2>
            <p className="mt-4 text-gray-600">
              Explorez nos guides, tutoriels et documentation pour mieux comprendre et utiliser Maestro-Educ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Guide de démarrage',
                description: 'Tout ce que vous devez savoir pour commencer avec Maestro-Educ.',
                link: '/blog',
                icon: '📚',
              },
              {
                title: 'Tutoriels vidéo',
                description: 'Apprenez à utiliser toutes les fonctionnalités en vidéo.',
                link: '/blog',
                icon: '🎬',
              },
              {
                title: 'Base de connaissances',
                description: 'Des articles détaillés sur chaque aspect de la plateforme.',
                link: '/blog',
                icon: '🧠',
              },
            ].map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="block p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900">{resource.title}</h3>
                <p className="mt-2 text-gray-600">{resource.description}</p>
                <div className="mt-4 text-blue-600 font-medium">
                  En savoir plus →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
