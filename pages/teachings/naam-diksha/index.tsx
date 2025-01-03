import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const NaamDikshaPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Naam Diksha - Teachings of Sant Rampal Ji Maharaj</title>
        <meta name="description" content="Learn about the sacred initiation ceremony of Naam Diksha and its spiritual significance" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/naam-diksha.webp"
            alt="Naam Diksha Ceremony"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Naam Diksha</h1>
                <p className="text-xl mb-8">The sacred initiation ceremony for spiritual enlightenment</p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Request Naam Diksha
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">What is Naam Diksha?</h2>
              <p className="text-gray-600 mb-8">
                Naam Diksha is a sacred initiation ceremony where a seeker receives spiritual knowledge and mantras
                from Sant Rampal Ji Maharaj. It marks the beginning of one's spiritual journey towards complete salvation.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Naam Diksha</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Spiritual Growth',
                  description: 'Accelerated spiritual progress and inner transformation',
                  icon: '🌟'
                },
                {
                  title: 'Divine Protection',
                  description: 'Protection from negative energies and obstacles',
                  icon: '🛡️'
                },
                {
                  title: 'True Knowledge',
                  description: 'Access to authentic spiritual wisdom and practices',
                  icon: '📚'
                }
              ].map((benefit) => (
                <div key={benefit.title} className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">The Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: '1',
                    title: 'Registration',
                    description: 'Fill the registration form'
                  },
                  {
                    step: '2',
                    title: 'Preparation',
                    description: 'Spiritual preparation and fasting'
                  },
                  {
                    step: '3',
                    title: 'Ceremony',
                    description: 'Sacred initiation ceremony'
                  },
                  {
                    step: '4',
                    title: 'Practice',
                    description: 'Regular spiritual practice'
                  }
                ].map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Spiritual Commitment',
                  items: [
                    'Sincere desire for spiritual growth',
                    'Commitment to daily practice',
                    'Following spiritual guidelines'
                  ]
                },
                {
                  title: 'Personal Conduct',
                  items: [
                    'Vegetarian lifestyle',
                    'Abstaining from intoxicants',
                    'Moral and ethical living'
                  ]
                }
              ].map((req) => (
                <div key={req.title} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">{req.title}</h3>
                  <ul className="space-y-2">
                    {req.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-600">
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Ceremonies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  date: 'January 15, 2024',
                  time: '7:00 AM',
                  location: 'Main Ashram'
                },
                {
                  date: 'February 1, 2024',
                  time: '7:00 AM',
                  location: 'City Center'
                },
                {
                  date: 'February 15, 2024',
                  time: '7:00 AM',
                  location: 'Regional Center'
                }
              ].map((ceremony) => (
                <div key={ceremony.date} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-xl font-bold mb-2">{ceremony.date}</div>
                  <div className="mb-1">{ceremony.time}</div>
                  <div className="opacity-90">{ceremony.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Spiritual Journey</h2>
            <p className="text-xl text-gray-600 mb-8">Take the first step towards eternal salvation</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Register Now
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Have Questions?</h2>
            <div className="flex justify-center gap-8">
              <div>
                <div className="text-lg font-semibold">Call Us</div>
                <div className="text-red-600">+91 1234567890</div>
              </div>
              <div>
                <div className="text-lg font-semibold">Email Us</div>
                <div className="text-red-600">diksha@satlokashram.org</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NaamDikshaPage;
