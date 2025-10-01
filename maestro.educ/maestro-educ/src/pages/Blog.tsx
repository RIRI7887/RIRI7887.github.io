import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';
import Button from '../components/ui/Button';

type BlogCategory = 'gestion-scolaire' | 'pédagogie' | 'technologie' | 'tendances' | 'témoignages';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: BlogCategory;
  image: string;
  readTime: number;
  featured?: boolean;
}

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'tous'>('tous');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Les 7 clés d\'une gestion scolaire efficace à l\'ère du numérique',
      excerpt: 'Découvrez les meilleures pratiques pour optimiser la gestion administrative de votre établissement et libérer du temps pour l\'essentiel : la pédagogie.',
      author: 'Marc Dupont',
      date: '15 mars 2023',
      category: 'gestion-scolaire',
      image: 'https://same-assets.com/images/blog/article-1.jpg',
      readTime: 8,
      featured: true,
    },
    {
      id: 2,
      title: 'Comment le numérique transforme la pédagogie : tendances et impacts',
      excerpt: 'Une analyse des outils numériques qui révolutionnent l\'enseignement et l\'apprentissage en classe, avec des exemples concrets d\'application.',
      author: 'Sophie Lelièvre',
      date: '28 février 2023',
      category: 'pédagogie',
      image: 'https://same-assets.com/images/blog/article-2.jpg',
      readTime: 10,
    },
    {
      id: 3,
      title: 'L\'IA au service de l\'éducation : opportunités et défis',
      excerpt: 'Comment l\'intelligence artificielle peut aider les enseignants et personnaliser l\'apprentissage des élèves tout en préservant l\'éthique éducative.',
      author: 'Thomas Moreau',
      date: '12 février 2023',
      category: 'technologie',
      image: 'https://same-assets.com/images/blog/article-3.jpg',
      readTime: 12,
      featured: true,
    },
    {
      id: 4,
      title: 'La communication école-famille à l\'ère numérique',
      excerpt: 'Stratégies et outils pour renforcer la collaboration entre enseignants et parents, un facteur clé de la réussite des élèves.',
      author: 'Marie Laurent',
      date: '25 janvier 2023',
      category: 'tendances',
      image: 'https://same-assets.com/images/blog/article-4.jpg',
      readTime: 7,
    },
    {
      id: 5,
      title: 'Comment nous avons réduit la charge administrative de 40% dans notre lycée',
      excerpt: 'Témoignage du Lycée International de Paris sur sa transition numérique et les bénéfices concrets observés au quotidien.',
      author: 'Jean Dupont',
      date: '10 janvier 2023',
      category: 'témoignages',
      image: 'https://same-assets.com/images/blog/article-5.jpg',
      readTime: 9,
    },
    {
      id: 6,
      title: 'RGPD et établissements scolaires : guide pratique pour être en conformité',
      excerpt: 'Tout ce que vous devez savoir sur la protection des données dans le contexte scolaire, avec un plan d\'action en 5 étapes.',
      author: 'Sophie Lelièvre',
      date: '5 décembre 2022',
      category: 'gestion-scolaire',
      image: 'https://same-assets.com/images/blog/article-6.jpg',
      readTime: 11,
    },
    {
      id: 7,
      title: 'Les méthodes d\'évaluation innovantes pour motiver les élèves',
      excerpt: 'Découvrez comment repenser l\'évaluation pour en faire un véritable outil d\'apprentissage et de motivation.',
      author: 'Marie Laurent',
      date: '18 novembre 2022',
      category: 'pédagogie',
      image: 'https://same-assets.com/images/blog/article-7.jpg',
      readTime: 8,
    },
    {
      id: 8,
      title: 'Le métavers éducatif : réalité ou fiction ?',
      excerpt: 'Une exploration des potentiels du métavers dans l\'éducation et des expérimentations en cours dans le monde.',
      author: 'Thomas Moreau',
      date: '2 novembre 2022',
      category: 'technologie',
      image: 'https://same-assets.com/images/blog/article-8.jpg',
      readTime: 13,
    },
  ];

  // Filter blog posts based on search query and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'tous' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const categories: { id: BlogCategory | 'tous'; label: string }[] = [
    { id: 'tous', label: 'Tous les articles' },
    { id: 'gestion-scolaire', label: 'Gestion scolaire' },
    { id: 'pédagogie', label: 'Pédagogie' },
    { id: 'technologie', label: 'Technologie' },
    { id: 'tendances', label: 'Tendances' },
    { id: 'témoignages', label: 'Témoignages' },
  ];

  const categoryColors: Record<BlogCategory, string> = {
    'gestion-scolaire': 'bg-blue-100 text-blue-800',
    'pédagogie': 'bg-green-100 text-green-800',
    'technologie': 'bg-purple-100 text-purple-800',
    'tendances': 'bg-yellow-100 text-yellow-800',
    'témoignages': 'bg-red-100 text-red-800',
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Blog <span className="text-blue-600">Maestro-Educ</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Des articles, guides et ressources pour révolutionner la gestion de votre établissement
              et améliorer l'expérience éducative.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">À la une</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group overflow-hidden rounded-xl shadow-lg"
                >
                  <div className="relative aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="mb-2">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${categoryColors[post.category]}`}>
                          {categories.find(c => c.id === post.category)?.label}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{post.title}</h3>
                      <div className="mt-2 flex items-center text-sm text-gray-200">
                        <FaCalendarAlt className="mr-2" /> {post.date}
                        <span className="mx-2">•</span>
                        <FaUser className="mr-2" /> {post.author}
                        <span className="mx-2">•</span>
                        {post.readTime} min de lecture
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Rechercher un article..."
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
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700'
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

      {/* Blog List */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${categoryColors[post.category]}`}>
                        {categories.find(c => c.id === post.category)?.label}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <FaCalendarAlt className="mr-2" /> {post.date}
                      <span className="mx-2">•</span>
                      <FaUser className="mr-2" /> {post.author}
                      <span className="mx-2">•</span>
                      {post.readTime} min de lecture
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      Lire l'article →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Aucun article ne correspond à votre recherche.</p>
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
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Restez informé</h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles, guides et ressources directement dans votre boîte mail.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  S'abonner
                </Button>
              </form>
              <p className="mt-3 text-sm text-blue-200">
                Nous respectons votre vie privée. Désabonnez-vous à tout moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Ressources complémentaires</h2>
            <p className="mt-4 text-gray-600">
              Explorez notre bibliothèque de ressources pour enrichir vos connaissances sur la gestion scolaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Webinaires',
                description: 'Participez à nos conférences en ligne animées par des experts du secteur éducatif.',
                link: '/blog',
                icon: '🎥',
              },
              {
                title: 'Livres blancs',
                description: 'Téléchargez nos guides complets sur la transformation numérique des établissements.',
                link: '/blog',
                icon: '📊',
              },
              {
                title: 'Études de cas',
                description: 'Découvrez comment d\'autres établissements ont réussi leur transition numérique.',
                link: '/blog',
                icon: '📝',
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

export default Blog;
