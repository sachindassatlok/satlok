import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const MissionPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Mission - Satlok Ashram</title>
        <meta name="description" content="Discover the divine mission of Satlok Ashram under the guidance of Sant Rampal Ji Maharaj" />
      </Head>

      <main className="bg-white">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/about/mission-hero.webp"
            alt="Satlok Ashram Mission"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Divine Mission</h1>
              <p className="text-xl md:text-2xl">Spreading True Spiritual Knowledge Worldwide</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Sacred Purpose</h2>
            <p className="text-xl text-gray-600 mb-8">
              To spread the authentic spiritual knowledge as revealed in our holy scriptures and guide humanity towards complete salvation through the true way of worship under the divine guidance of Sant Rampal Ji Maharaj.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-4">Enlightenment</h3>
                <p className="text-gray-600">Providing true spiritual knowledge based on authentic scriptures</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-4">Unity</h3>
                <p className="text-gray-600">Breaking barriers of caste, creed, and religion to unite humanity</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-4">Salvation</h3>
                <p className="text-gray-600">Guiding souls towards complete liberation and eternal peace</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Objectives */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Objectives</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Spread True Knowledge',
                  description: 'Share the authentic spiritual knowledge from all holy scriptures to remove misconceptions and establish the true way of worship.'
                },
                {
                  title: 'Social Transformation',
                  description: 'Create a society based on truth, compassion, and spiritual understanding through various social welfare activities.'
                },
                {
                  title: 'Global Outreach',
                  description: 'Extend our spiritual message to every corner of the world, making it accessible to all seekers regardless of their background.'
                },
                {
                  title: 'Youth Empowerment',
                  description: 'Guide the youth towards a meaningful life by combining spiritual wisdom with modern education and skills.'
                }
              ].map((objective) => (
                <div key={objective.title} className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{objective.title}</h3>
                  <p className="text-gray-600">{objective.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '10M+', label: 'Lives Touched' },
                { number: '1000+', label: 'Spiritual Events' },
                { number: '100+', label: 'Countries Reached' },
                { number: '500+', label: 'Social Programs' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="bg-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Be Part of Our Divine Mission</h2>
            <p className="text-xl mb-8">Join us in spreading true spiritual knowledge and transforming lives</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Volunteer With Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MissionPage;
