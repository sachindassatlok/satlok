import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const ExhibitionPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Exhibition - Satlok Ashram</title>
        <meta name="description" content="Experience divine knowledge through our spiritual exhibitions" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/exhibition.webp"
            alt="Exhibition"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Exhibition</h1>
                <p className="text-xl mb-8">Journey through divine knowledge and spiritual enlightenment</p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Plan Your Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Exhibition Highlights */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Exhibition Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Sacred Scriptures',
                  description: 'Original texts and translations of holy scriptures',
                  icon: '📚'
                },
                {
                  title: 'Divine Art Gallery',
                  description: 'Spiritual artwork depicting divine stories',
                  icon: '🎨'
                },
                {
                  title: 'Interactive Displays',
                  description: 'Modern multimedia presentations of spiritual knowledge',
                  icon: '🖥️'
                }
              ].map((highlight) => (
                <div key={highlight.title} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exhibition Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Exhibition Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Creation Gallery',
                  description: 'Understanding the divine creation',
                  visitors: '10k+'
                },
                {
                  title: 'Saints & Gurus',
                  description: 'Life stories of great spiritual masters',
                  visitors: '15k+'
                },
                {
                  title: 'Sacred Texts',
                  description: 'Ancient wisdom and holy scriptures',
                  visitors: '12k+'
                },
                {
                  title: 'Modern Spirituality',
                  description: 'Contemporary spiritual practices',
                  visitors: '8k+'
                }
              ].map((section) => (
                <div key={section.title} className="border border-gray-200 rounded-lg p-6 hover:border-red-200 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="text-sm text-red-600">{section.visitors} visitors</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Special Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Guided Tours',
                  date: 'Every Saturday & Sunday',
                  time: '10 AM - 4 PM'
                },
                {
                  title: 'Interactive Sessions',
                  date: 'Every Wednesday',
                  time: '5 PM - 7 PM'
                },
                {
                  title: 'Special Exhibition',
                  date: 'First Sunday of Month',
                  time: 'All Day Event'
                }
              ].map((event) => (
                <div key={event.title} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="mb-1">{event.date}</div>
                  <div className="text-sm opacity-90">{event.time}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Visitor Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Timings</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Monday - Friday: 9 AM - 6 PM</li>
                  <li>Saturday - Sunday: 8 AM - 7 PM</li>
                  <li>Special Hours on Festivals</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Entry</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Free Entry for All</li>
                  <li>Group Bookings Available</li>
                  <li>Guide Services Available</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Facilities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Free Parking</li>
                  <li>Wheelchair Accessible</li>
                  <li>Refreshments Available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Plan Your Visit Today</h2>
            <p className="text-xl text-gray-600 mb-8">Experience the divine knowledge and spiritual enlightenment</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Book Group Visit
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ExhibitionPage;
