import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaChartPie, FaCalendarAlt, FaEnvelope, FaChalkboardTeacher,
  FaBook, FaGraduationCap, FaUserFriends, FaMobileAlt,
  FaShieldAlt, FaCloudDownloadAlt, FaCogs, FaHeadset
} from 'react-icons/fa';
import Button from '../components/ui/Button';

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('directeurs');

  const tabs = [
    { id: 'directeurs', label: 'Directeurs' },
    { id: 'enseignants', label: 'Enseignants' },
    { id: 'parents', label: 'Parents' },
    { id: 'eleves', label: 'Élèves' },
  ];

  const featuresContent = {
    directeurs: {
      title: 'Pilotez votre établissement en toute simplicité',
      subtitle: 'Des outils de gestion administrative intuitifs pour les directeurs et gestionnaires',
      image: 'https://same-assets.com/images/features/dashboard-director.jpg',
      features: [
        {
          icon: <FaChartPie />,
          title: 'Tableaux de bord analytiques',
          description: 'Visualisez les performances de votre établissement en temps réel avec des indicateurs clés et des statistiques personnalisables.'
        },
        {
          icon: <FaCalendarAlt />,
          title: 'Gestion des emplois du temps',
          description: 'Créez et modifiez les emplois du temps des classes et des enseignants avec notre interface intuitive et nos algorithmes d\'optimisation.'
        },
        {
          icon: <FaEnvelope />,
          title: 'Communication centralisée',
          description: 'Communiquez avec le personnel, les parents et les élèves via un système de messagerie intégré, de notifications et d\'annonces.'
        },
        {
          icon: <FaCogs />,
          title: 'Gestion administrative',
          description: 'Gérez les inscriptions, les paiements, les ressources matérielles et les dossiers administratifs depuis une interface unique.'
        },
      ]
    },
    enseignants: {
      title: 'Concentrez-vous sur l\'essentiel : enseigner',
      subtitle: 'Des outils pédagogiques innovants pour faciliter le quotidien des enseignants',
      image: 'https://same-assets.com/images/features/dashboard-teacher.jpg',
      features: [
        {
          icon: <FaChalkboardTeacher />,
          title: 'Suivi pédagogique avancé',
          description: 'Suivez la progression individuelle et collective des élèves, identifiez les forces et les points d\'amélioration.'
        },
        {
          icon: <FaBook />,
          title: 'Ressources pédagogiques',
          description: 'Accédez à une bibliothèque de ressources éducatives et partagez vos propres supports de cours et exercices.'
        },
        {
          icon: <FaGraduationCap />,
          title: 'Gestion des évaluations',
          description: 'Créez, distribuez et corrigez les évaluations en ligne, avec calcul automatique des moyennes et statistiques détaillées.'
        },
        {
          icon: <FaEnvelope />,
          title: 'Communication avec les familles',
          description: 'Échangez facilement avec les parents et les élèves via messagerie intégrée et partage de documents.'
        },
      ]
    },
    parents: {
      title: 'Suivez la scolarité de vos enfants comme jamais auparavant',
      subtitle: 'Une interface intuitive pour rester connecté à la vie scolaire de vos enfants',
      image: 'https://same-assets.com/images/features/dashboard-parent.jpg',
      features: [
        {
          icon: <FaUserFriends />,
          title: 'Suivi en temps réel',
          description: 'Consultez les notes, les absences, les devoirs et l\'emploi du temps de vos enfants en temps réel.'
        },
        {
          icon: <FaEnvelope />,
          title: 'Communication facilitée',
          description: 'Échangez avec les enseignants et l\'administration via une messagerie sécurisée et des prises de rendez-vous en ligne.'
        },
        {
          icon: <FaCalendarAlt />,
          title: 'Agenda partagé',
          description: 'Visualisez les événements scolaires, les échéances importantes et les réunions parents-enseignants dans un calendrier intuitif.'
        },
        {
          icon: <FaCloudDownloadAlt />,
          title: 'Documents administratifs',
          description: 'Accédez et téléchargez les bulletins scolaires, certificats et autres documents administratifs importants.'
        },
      ]
    },
    eleves: {
      title: 'Une plateforme éducative adaptée aux besoins des élèves',
      subtitle: 'Des outils modernes pour faciliter l\'apprentissage et l\'organisation',
      image: 'https://same-assets.com/images/features/dashboard-student.jpg',
      features: [
        {
          icon: <FaBook />,
          title: 'Ressources pédagogiques',
          description: 'Accédez aux cours, exercices et ressources partagés par vos enseignants à tout moment.'
        },
        {
          icon: <FaCalendarAlt />,
          title: 'Organisation personnelle',
          description: 'Gérez votre emploi du temps, vos devoirs et vos échéances dans un agenda intuitif et personnalisable.'
        },
        {
          icon: <FaGraduationCap />,
          title: 'Suivi des résultats',
          description: 'Visualisez vos notes, évaluations et progression dans chaque matière avec des graphiques clairs.'
        },
        {
          icon: <FaMobileAlt />,
          title: 'Application mobile',
          description: 'Restez connecté à votre espace élève depuis votre smartphone avec des notifications importantes.'
        },
      ]
    }
  };

  const currentFeatures = featuresContent[activeTab as keyof typeof featuresContent];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Fonctionnalités <span className="text-blue-600">innovantes</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Maestro-Educ offre une suite complète d'outils adaptés à chaque acteur de la communauté éducative.
              Découvrez nos fonctionnalités conçues pour répondre aux besoins spécifiques des directeurs, enseignants, parents et élèves.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === tab.id
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  key={activeTab + "-content"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-blue-900">{currentFeatures.title}</h2>
                  <p className="mt-4 text-gray-600">{currentFeatures.subtitle}</p>

                  <div className="mt-8 space-y-6">
                    {currentFeatures.features.map((feature, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          {feature.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-blue-900">{feature.title}</h3>
                          <p className="mt-1 text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  key={activeTab + "-image"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <img
                    src={currentFeatures.image}
                    alt={`Interface pour ${activeTab}`}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900">Fonctionnalités transversales</h2>
            <p className="mt-4 text-gray-600">
              Maestro-Educ propose également des fonctionnalités qui bénéficient à tous les utilisateurs et facilitent la gestion globale de l'établissement.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt className="h-8 w-8 text-blue-600" />,
                title: 'Sécurité avancée',
                description: 'Protection des données sensibles avec chiffrement de bout en bout, authentification à deux facteurs et conformité RGPD.',
              },
              {
                icon: <FaMobileAlt className="h-8 w-8 text-blue-600" />,
                title: 'Applications mobiles',
                description: 'Accédez à toutes les fonctionnalités depuis n\'importe où grâce à nos applications mobiles iOS et Android.',
              },
              {
                icon: <FaCloudDownloadAlt className="h-8 w-8 text-blue-600" />,
                title: 'Synchronisation cloud',
                description: 'Toutes vos données sont synchronisées en temps réel et accessibles sur tous vos appareils.',
              },
              {
                icon: <FaCogs className="h-8 w-8 text-blue-600" />,
                title: 'Personnalisation avancée',
                description: 'Adaptez l\'interface et les fonctionnalités selon les besoins spécifiques de votre établissement.',
              },
              {
                icon: <FaHeadset className="h-8 w-8 text-blue-600" />,
                title: 'Support dédié',
                description: 'Une équipe de support technique et pédagogique disponible pour vous accompagner au quotidien.',
              },
              {
                icon: <FaEnvelope className="h-8 w-8 text-blue-600" />,
                title: 'Communication unifiée',
                description: 'Système de messagerie, notifications et annonces pour une communication fluide entre tous les acteurs.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl shadow-md"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900">Intégrations</h2>
            <p className="mt-4 text-gray-600">
              Maestro-Educ s'intègre parfaitement avec les outils que vous utilisez déjà.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-20"
              >
                <img
                  src={`https://same-assets.com/images/logos/integration-${index + 1}.svg`}
                  alt={`Intégration ${index + 1}`}
                  className="max-h-10 opacity-70 hover:opacity-100 transition-opacity"
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
            <h2 className="text-3xl font-bold">Prêt à transformer votre établissement ?</h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Découvrez par vous-même comment Maestro-Educ peut révolutionner la gestion de votre établissement scolaire.
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

export default Features;
