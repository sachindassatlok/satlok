import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const ContactPage: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = {
    mainOffice: {
      address: "Satlok Ashram, Post - Barwala, Hisar, Haryana - 125121",
      phone: "+91 92541-89258",
      email: "contact@jagatgururampalji.org"
    },
    socialMedia: [
      { name: "Facebook", url: "https://www.facebook.com/jagatgururampalji" },
      { name: "Twitter", url: "https://twitter.com/jagatgururampal" },
      { name: "YouTube", url: "https://www.youtube.com/c/SantRampalJiMaharaj" },
      { name: "Instagram", url: "https://www.instagram.com/jagatgururampalji" }
    ],
    helplineNumbers: [
      { purpose: "Naam Diksha", number: "+91 7496801823" },
      { purpose: "General Inquiry", number: "+91 7496801825" },
      { purpose: "Satlok Ashram", number: "+91 92541-89258" }
    ],
    officeHours: "24x7 (All Days)",
    coordinates: {
      lat: "29.3837° N",
      long: "75.9172° E"
    }
  };

  const faqs = [
    {
      question: "How can I receive Naam Diksha (Initiation)?",
      answer: "To receive Naam Diksha, you can contact our helpline number +91 7496801823. Our representatives will guide you through the process and requirements for initiation."
    },
    {
      question: "What are the visiting hours of Satlok Ashram?",
      answer: "Satlok Ashram is open 24/7 for devotees. However, for specific programs and satsang timings, please contact the ashram office."
    },
    {
      question: "How can I arrange accommodation at Satlok Ashram?",
      answer: "For accommodation arrangements, please contact our helpline number +91 92541-89258. Free accommodation is provided subject to availability."
    },
    {
      question: "Is there any online satsang available?",
      answer: "Yes, you can watch live satsang and other spiritual programs on our official YouTube channel 'Sant Rampal Ji Maharaj'."
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Satlok Ashram</title>
        <meta name="description" content="Get in touch with Satlok Ashram for spiritual guidance and information" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-red-600 to-red-800">
          <div className="absolute inset-0 bg-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl">Connect with us for spiritual guidance and support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Helpline Numbers Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Helpline Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.helplineNumbers.map((helpline) => (
                <div key={helpline.purpose} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-semibold mb-2">{helpline.purpose}</h3>
                  <p className="text-gray-600">{helpline.number}</p>
                  <p className="text-gray-600">{contactInfo.officeHours}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Office Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Main Office</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600">{contactInfo.mainOffice.address}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">{contactInfo.mainOffice.email}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                <div className="flex justify-center space-x-4">
                  {contactInfo.socialMedia.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.1290676244584!2d${contactInfo.coordinates.long}!3d${contactInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIzJzAxLjMiTiA3NcKwNTUnMDIuMCJF!5e0!3m2!1sen!2sin!4v1625147000000!5m2!1sen!2sin`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
