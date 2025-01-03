import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Satlok Ashram</title>
        <meta name="description" content="Learn about Satlok Ashram's mission, history, and spiritual journey under the guidance of Sant Rampal Ji Maharaj" />
      </Head>

      <main className="bg-white">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/about/hero.webp"
            alt="Satlok Ashram"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Satlok Ashram</h1>
              <p className="text-xl md:text-2xl">A Journey Towards Spiritual Enlightenment</p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Sacred Mission</h2>
              <p className="text-gray-600 mb-4">
                Satlok Ashram, under the divine guidance of Sant Rampal Ji Maharaj, stands as a beacon of spiritual enlightenment and truth. Our mission is to spread the authentic spiritual knowledge as described in all our holy scriptures and to guide seekers on the path to complete salvation.
              </p>
              <p className="text-gray-600 mb-4">
                We are dedicated to removing the misconceptions that have crept into our religious practices over time and to restore the true way of worship as prescribed in our holy books.
              </p>
              <p className="text-gray-600">
                Through our various spiritual and social welfare activities, we aim to create a society based on truth, compassion, and spiritual understanding.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/mission.webp"
                alt="Satlok Ashram Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Truth',
                  description: 'Upholding and spreading the true spiritual knowledge from authentic scriptures',
                  icon: '🕊️'
                },
                {
                  title: 'Compassion',
                  description: 'Serving humanity through spiritual guidance and social welfare activities',
                  icon: '❤️'
                },
                {
                  title: 'Unity',
                  description: 'Breaking barriers of religion, caste, and creed to unite humanity',
                  icon: '🤝'
                }
              ].map((value) => (
                <div key={value.title} className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '20+', label: 'Years of Service' },
                { number: '1M+', label: 'Lives Transformed' },
                { number: '100+', label: 'Countries Reached' },
                { number: '1000+', label: 'Spiritual Events' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Begin Your Spiritual Journey Today</h2>
            <p className="text-xl mb-8">Join us at Satlok Ashram and discover the path to eternal peace and salvation</p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
