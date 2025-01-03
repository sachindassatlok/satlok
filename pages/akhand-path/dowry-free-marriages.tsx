import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const DowryFreeMarriagesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dowry-Free Marriages - Satlok Ashram</title>
        <meta name="description" content="Join our mission to promote dowry-free marriages and create a better society" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/dowry-free-marriage.webp"
            alt="Dowry Free Marriage Ceremony"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Dowry-Free Marriages</h1>
                <p className="text-xl mb-8">Creating a society free from the social evil of dowry through mass marriage ceremonies</p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Register for Next Ceremony
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '10,000+', label: 'Couples Married' },
                { number: '₹100Cr+', label: 'Dowry Prevented' },
                { number: '15 Years', label: 'Of Service' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Free Wedding Ceremony',
                  description: 'Complete wedding arrangement including venue, food, and rituals at no cost',
                  icon: '🏛️'
                },
                {
                  title: 'Legal Registration',
                  description: 'Free marriage registration and legal documentation support',
                  icon: '📜'
                },
                {
                  title: 'Gift Hampers',
                  description: 'Essential household items and gifts for the newly married couples',
                  icon: '🎁'
                }
              ].map((feature) => (
                <div key={feature.title} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Simple Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Registration', description: 'Fill out the online form' },
                { step: '2', title: 'Verification', description: 'Document verification' },
                { step: '3', title: 'Counseling', description: 'Pre-marriage counseling' },
                { step: '4', title: 'Ceremony', description: 'Mass marriage ceremony' }
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
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take the First Step?</h2>
            <p className="text-xl mb-8">Join our next mass marriage ceremony and be part of this noble cause</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Register Now
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Rajesh & Priya',
                  quote: 'The ceremony was beautiful and we are grateful for this initiative',
                  date: '2024'
                },
                {
                  name: 'Amit & Neha',
                  quote: 'Thanks to Satlok Ashram for making our dream come true',
                  date: '2024'
                },
                {
                  name: 'Suresh & Meera',
                  quote: 'A perfect example of how marriages should be conducted',
                  date: '2023'
                }
              ].map((testimonial) => (
                <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.date}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">Our team is here to help you with the registration process</p>
            <div className="flex justify-center gap-8">
              <div>
                <div className="text-lg font-semibold">Call Us</div>
                <div className="text-red-600">+91 1234567890</div>
              </div>
              <div>
                <div className="text-lg font-semibold">Email Us</div>
                <div className="text-red-600">marriages@satlokashram.org</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DowryFreeMarriagesPage;
