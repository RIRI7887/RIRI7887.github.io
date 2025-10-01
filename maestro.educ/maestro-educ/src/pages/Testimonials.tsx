import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaPlay } from 'react-icons/fa';

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTestimonialVideo, setActiveTestimonialVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      author: 'Marie Dupont',
      role: 'Directrice, Lycée International de Paris',
      content: 'Maestro-Educ a révolutionné notre façon de gérer l\'établissement. La plateforme est intuitive, complète et nous fait gagner un temps précieux au quotidien. L\'équipe de support est extraordinairement réactive et à l\'écoute de nos besoins.',
      rating: 5,
      image: 'https://same-assets.com/images/testimonials/director-2.jpg',
      category: 'Directeur',
    },
    {
      id: 2,
      author: 'Thomas Martin',
      role: 'Professeur de mathématiques, Collège Victor Hugo',
      content: 'En tant qu\'enseignant, je peux enfin me concentrer sur ma pédagogie plutôt que sur l\'administratif. La gestion des notes et le suivi des élèves sont devenus un jeu d\'enfant. Je recommande vivement !',
      rating: 5,
      image: 'https://same-assets.com/images/testimonials/teacher-2.jpg',
      category: 'Enseignant',
    },
    {
      id: 3,
      author: 'Nathalie Petit',
      role: 'Parent d\'élève, École Primaire des Lilas',
      content: 'Grâce à Maestro-Educ, je peux suivre facilement la scolarité de mes enfants. Les communications avec les enseignants sont fluides et je me sens véritablement impliquée dans leur éducation.',
      rating: 4,
      image: 'https://same-assets.com/images/testimonials/parent-2.jpg',
      category: 'Parent',
    },
    {
      id: 4,
      author: 'François Leroy',
      role: 'Proviseur, Lycée Technique de Bordeaux',
      content: 'Après avoir essayé plusieurs solutions, Maestro-Educ s\'est imposé comme le meilleur choix pour notre établissement. La migration a été simple et l\'accompagnement exemplaire.',
      rating: 5,
      image: 'https://same-assets.com/images/testimonials/director-3.jpg',
      category: 'Directeur',
    },
    {
      id: 5,
      author: 'Caroline Blanc',
      role: 'Professeure de français, Collège Saint-Exupéry',
      content: 'Le module de gestion des cours et des devoirs est extrêmement bien conçu. Je peux facilement partager des ressources avec mes élèves et suivre leur progression individuellement.',
      rating: 5,
      image: 'https://same-assets.com/images/testimonials/teacher-3.jpg',
      category: 'Enseignant',
    },
    {
      id: 6,
      author: 'Laurent Dubois',
      role: 'Parent d\'élève, Lycée Jean Moulin',
      content: 'L\'application mobile est un vrai plus. Je reçois des notifications importantes concernant mes enfants et je peux consulter leur emploi du temps et leurs notes en un clin d\'œil.',
      rating: 4,
      image: 'https://same-assets.com/images/testimonials/parent-3.jpg',
      category: 'Parent',
    },
  ];

  const videoTestimonials = [
    {
      id: 1,
      title: 'Comment Maestro-Educ a transformé le Lycée International de Paris',
      thumbnail: 'https://same-assets.com/images/testimonials/video-1.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      author: 'Marie Dupont',
      role: 'Directrice',
    },
    {
      id: 2,
      title: 'L\'impact de Maestro-Educ sur notre quotidien d\'enseignants',
      thumbnail: 'https://same-assets.com/images/testimonials/video-2.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      author: 'Équipe pédagogique',
      role: 'Collège Victor Hugo',
    },
    {
      id: 3,
      title: 'Témoignage : Un an après l\'adoption de Maestro-Educ',
      thumbnail: 'https://same-assets.com/images/testimonials/video-3.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      author: 'François Leroy',
      role: 'Proviseur',
    },
  ];

  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'Directeur', 'Enseignant', 'Parent'];

  const filteredTestimonials = filter === 'Tous'
    ? testimonials
    : testimonials.filter(t => t.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Ils <span className="text-blue-600">témoignent</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Découvrez les expériences de nos utilisateurs et comment Maestro-Educ transforme
              la gestion quotidienne de centaines d'établissements scolaires.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Témoignages vidéo</h2>
            <p className="mt-4 text-gray-600">
              Écoutez directement nos clients partager leur expérience avec Maestro-Educ.
            </p>
          </div>

          {activeTestimonialVideo !== null ? (
            <div className="max-w-4xl mx-auto">
              <div className="relative pb-9/16 rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={videoTestimonials[activeTestimonialVideo].videoUrl}
                  title={videoTestimonials[activeTestimonialVideo].title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-blue-900">{videoTestimonials[activeTestimonialVideo].title}</h3>
                <p className="mt-2 text-gray-600">
                  {videoTestimonials[activeTestimonialVideo].author}, {videoTestimonials[activeTestimonialVideo].role}
                </p>
                <button
                  className="mt-4 text-blue-600 font-medium"
                  onClick={() => setActiveTestimonialVideo(null)}
                >
                  Retour aux vidéos
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoTestimonials.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setActiveTestimonialVideo(index)}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-auto transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                        <FaPlay className="text-blue-600 h-6 w-6 ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-blue-900 group-hover:text-blue-600 transition-colors">{video.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{video.author}, {video.role}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Text Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Ce que disent nos utilisateurs</h2>
            <p className="mt-4 text-gray-600">
              Des centaines d'écoles, de collèges et de lycées font confiance à Maestro-Educ.
              Voici quelques-uns de leurs témoignages.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">{testimonial.author}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <FaQuoteLeft className="absolute top-0 left-0 text-blue-100 h-8 w-8" />
                    <p className="text-gray-600 italic pl-8 relative z-10">"{testimonial.content}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">La satisfaction en chiffres</h2>
            <p className="mt-4 text-blue-100">
              Maestro-Educ est plébiscité par les établissements scolaires dans toute la francophonie.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '96%', label: 'Taux de satisfaction' },
              { value: '500+', label: 'Établissements utilisateurs' },
              { value: '40%', label: 'Gain de temps administratif' },
              { value: '98%', label: 'Taux de renouvellement' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold">{stat.value}</div>
                <div className="mt-2 text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Études de cas</h2>
            <p className="mt-4 text-gray-600">
              Découvrez comment Maestro-Educ a transformé ces établissements en profondeur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lycée International de Paris',
                subtitle: 'Comment Maestro-Educ a modernisé un établissement historique',
                image: 'https://same-assets.com/images/case-studies/school-2.jpg',
              },
              {
                title: 'Groupe Scolaire Avenir',
                subtitle: 'Gestion multi-établissements simplifiée',
                image: 'https://same-assets.com/images/case-studies/school-3.jpg',
              },
              {
                title: 'École primaire Les Lilas',
                subtitle: 'Amélioration de la communication avec les parents',
                image: 'https://same-assets.com/images/case-studies/school-4.jpg',
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white font-semibold text-xl">{study.title}</h3>
                    <p className="text-blue-100 mt-1">{study.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
