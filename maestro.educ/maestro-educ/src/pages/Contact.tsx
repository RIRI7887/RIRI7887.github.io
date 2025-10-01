import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendarAlt } from 'react-icons/fa';
import Button from '../components/ui/Button';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    establishmentName: '',
    position: '',
    message: '',
    contactPreference: 'email',
    demoInterest: false,
    newsletter: false,
    preferredDate: '',
    preferredTime: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      setFormError(null);
    }, 1000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Contactez-<span className="text-blue-600">nous</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous
              accompagner dans la transformation numérique de votre établissement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaMapMarkerAlt className="h-6 w-6 text-blue-600" />,
                title: 'Adresse',
                details: ['123 Avenue de l\'Éducation', '75001 Paris, France'],
              },
              {
                icon: <FaPhone className="h-6 w-6 text-blue-600" />,
                title: 'Téléphone',
                details: ['+33 (0)1 23 45 67 89', '+33 (0)1 98 76 54 32'],
              },
              {
                icon: <FaEnvelope className="h-6 w-6 text-blue-600" />,
                title: 'Email',
                details: ['contact@maestro-educ.com', 'support@maestro-educ.com'],
              },
              {
                icon: <FaClock className="h-6 w-6 text-blue-600" />,
                title: 'Horaires',
                details: ['Lun-Ven: 8h30 - 18h30', 'Sam-Dim: Fermé'],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 border border-gray-100 rounded-xl shadow-sm"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Envoyez-nous un message</h2>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg">Message envoyé avec succès !</h3>
                  <p className="mt-2">Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais, généralement sous 24 heures ouvrées.</p>
                  <Button
                    className="mt-4"
                    variant="outline"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        establishmentName: '',
                        position: '',
                        message: '',
                        contactPreference: 'email',
                        demoInterest: false,
                        newsletter: false,
                        preferredDate: '',
                        preferredTime: '',
                      });
                    }}
                  >
                    Envoyer un nouveau message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="establishmentName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom de l'établissement
                      </label>
                      <input
                        type="text"
                        id="establishmentName"
                        name="establishmentName"
                        value={formData.establishmentName}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                      Votre fonction
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Sélectionnez votre fonction</option>
                      <option value="directeur">Directeur / Chef d'établissement</option>
                      <option value="enseignant">Enseignant</option>
                      <option value="administratif">Personnel administratif</option>
                      <option value="parent">Parent d'élève</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Préférence de contact
                    </label>
                    <div className="flex gap-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="email"
                          checked={formData.contactPreference === 'email'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2">Email</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="phone"
                          checked={formData.contactPreference === 'phone'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2">Téléphone</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="demoInterest"
                        checked={formData.demoInterest}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2">Je souhaite planifier une démonstration de Maestro-Educ</span>
                    </label>

                    {formData.demoInterest && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Date souhaitée
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="date"
                              id="preferredDate"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                            Heure souhaitée
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Sélectionnez une heure</option>
                            <option value="9:00">9:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2">Je souhaite recevoir la newsletter et les actualités de Maestro-Educ</span>
                    </label>
                  </div>

                  {formError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                      {formError}
                    </div>
                  )}

                  <div className="text-right">
                    <Button type="submit" variant="primary" size="lg">
                      Envoyer le message
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-xl overflow-hidden shadow-md h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937614!2d2.292292615509611!3d48.85837007928744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647947081054!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Carte Maestro-Educ"
                ></iframe>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Besoin d'aide ?</h3>
                <p className="text-gray-600 mb-6">
                  Notre équipe de support client est disponible pour répondre à toutes vos questions et vous aider à tirer le meilleur parti de Maestro-Educ.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaPhone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Support téléphonique</p>
                      <p className="text-sm text-gray-500">Lun-Ven, 8h30-18h30</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaEnvelope className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email Support</p>
                      <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Questions fréquentes</h2>
            <p className="mt-4 text-gray-600">
              Voici les questions les plus fréquemment posées par nos clients. Si vous ne trouvez pas votre réponse, n'hésitez pas à nous contacter.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: 'Comment se déroule une démonstration ?',
                  answer: 'Une démonstration de Maestro-Educ dure environ 45 minutes. Un de nos experts vous présente la plateforme, adaptée à vos besoins spécifiques, et répond à toutes vos questions en temps réel. Vous pouvez inviter plusieurs membres de votre équipe à y participer.'
                },
                {
                  question: 'Quel est le délai de mise en place de la solution ?',
                  answer: 'La mise en place de Maestro-Educ est rapide : comptez entre 1 et 3 semaines selon la taille de votre établissement et la complexité de vos données. Notre équipe vous accompagne tout au long du processus pour garantir une transition en douceur.'
                },
                {
                  question: 'Proposez-vous des formations pour les utilisateurs ?',
                  answer: 'Oui, nous proposons des formations adaptées à chaque profil d\'utilisateur (administration, enseignants, parents). Ces sessions peuvent se dérouler en ligne ou en présentiel selon vos préférences. Notre objectif est que tous vos utilisateurs soient autonomes rapidement.'
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-left focus:outline-none">
                      <span className="font-semibold text-blue-900">{faq.question}</span>
                      <span className="ml-6 flex-shrink-0 text-blue-600">+</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Prêt à révolutionner votre établissement ?</h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Rejoignez les centaines d'établissements qui ont déjà transformé leur gestion administrative et pédagogique avec Maestro-Educ.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 border-white"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                Contactez-nous aujourd'hui
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
