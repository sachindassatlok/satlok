import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const HistoryPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>History - Satlok Ashram</title>
        <meta name="description" content="Explore the rich history and spiritual journey of Satlok Ashram from its inception to becoming a global spiritual movement" />
      </Head>

      <main className="bg-white">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/about/history-hero.webp"
            alt="Satlok Ashram History"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Sacred Journey</h1>
              <p className="text-xl md:text-2xl">The Evolution of Satlok Ashram</p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey Through Time</h2>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-200"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    year: '1988',
                    title: 'Divine Beginning',
                    description: 'Sant Rampal Ji Maharaj received divine knowledge through intense spiritual practice.'
                  },
                  {
                    year: '1994',
                    title: 'First Satsang',
                    description: 'The first public discourse was held, marking the beginning of the spiritual revolution.'
                  },
                  {
                    year: '1999',
                    title: 'Establishment of Satlok Ashram',
                    description: 'The foundation of Satlok Ashram was laid in Karontha, Haryana.'
                  },
                  {
                    year: '2003',
                    title: 'Global Outreach Begins',
                    description: 'The spiritual message began reaching international audiences through various mediums.'
                  },
                  {
                    year: '2008',
                    title: 'Major Expansion',
                    description: 'Multiple ashram branches were established across different states in India.'
                  },
                  {
                    year: '2015',
                    title: 'Digital Transformation',
                    description: 'Launch of digital platforms to reach spiritual seekers worldwide.'
                  },
                  {
                    year: 'Present',
                    title: 'Continuing the Mission',
                    description: 'Expanding our reach and continuing to spread true spiritual knowledge globally.'
                  }
                ].map((event, index) => (
                  <div key={event.year} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-center`}>
                    <div className="w-5/12">
                      <div className={`p-6 bg-white rounded-xl shadow-md ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="text-red-600 font-bold mb-2">{event.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                    </div>
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Milestones</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '1M+', label: 'Devotees Worldwide' },
                { number: '100+', label: 'Ashram Branches' },
                { number: '1000+', label: 'Spiritual Events' },
                { number: '50+', label: 'Countries Reached' }
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Through the Years</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/about/history-${num}.webp`}
                    alt={`Historical moment ${num}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Looking to the Future</h2>
            <p className="text-xl mb-8">Our journey continues as we work towards spreading true spiritual knowledge to every corner of the world</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Global Expansion</h3>
                <p>Establishing spiritual centers in every major city worldwide</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
                <p>Leveraging technology to reach spiritual seekers globally</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Community Building</h3>
                <p>Creating a global network of spiritual practitioners</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HistoryPage;
