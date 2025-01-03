import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const activities = [
  {
    id: 'akhand-path',
    title: 'Akhand Path',
    description: 'Continuous recitation of sacred scriptures that runs 24/7, providing spiritual enlightenment and divine blessings to all participants.',
    image: '/images/activities/akhand-path.webp',
    stats: { participants: '1000+', duration: '24/7', experience: 'Divine' }
  },
  {
    id: 'dowry-free-marriages',
    title: 'Dowry-Free Marriages',
    description: 'Mass marriage ceremonies conducted without dowry, promoting social equality and helping underprivileged families.',
    image: '/images/activities/marriages.webp',
    stats: { couples: '500+', ceremonies: '50+', savings: 'Millions' }
  },
  {
    id: 'blood-donation',
    title: 'Blood Donation Camp',
    description: 'Regular blood donation camps organized to serve humanity and save lives, demonstrating our commitment to social welfare.',
    image: '/images/activities/blood-donation.webp',
    stats: { donors: '10000+', camps: '100+', lives: 'Countless' }
  },
  {
    id: 'bhandara',
    title: 'Huge Bhandara',
    description: 'Large-scale community feast serving free meals to thousands, fostering brotherhood and serving humanity.',
    image: '/images/activities/bhandara.webp',
    stats: { meals: '50000+', volunteers: '1000+', frequency: 'Monthly' }
  },
  {
    id: 'discourse',
    title: 'Spiritual Discourse',
    description: 'Regular spiritual discourses providing true knowledge from scriptures and guidance for spiritual advancement.',
    image: '/images/activities/discourse.webp',
    stats: { attendance: '10000+', sessions: 'Daily', topics: 'Diverse' }
  },
  {
    id: 'health-camp',
    title: 'Health Camp',
    description: 'Free medical camps providing healthcare services to the needy, including checkups, medicines, and health awareness.',
    image: '/images/activities/health-camp.webp',
    stats: { patients: '5000+', doctors: '100+', camps: 'Monthly' }
  }
];

const ActivitiesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Activities - Satlok Ashram</title>
        <meta name="description" content="Explore the various spiritual and social welfare activities conducted at Satlok Ashram" />
      </Head>

      <main className="bg-white">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/activities/hero.webp"
            alt="Satlok Ashram Activities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Activities</h1>
              <p className="text-xl md:text-2xl">Serving Humanity Through Spiritual & Social Initiatives</p>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity) => (
                <div key={activity.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                      {Object.entries(activity.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-red-600 font-bold">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '100K+', label: 'Lives Touched' },
                { number: '1000+', label: 'Events Conducted' },
                { number: '10K+', label: 'Volunteers' },
                { number: '50+', label: 'Cities Covered' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Involved</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join us in our mission to serve humanity through spiritual and social welfare activities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
                Volunteer With Us
              </button>
              <button className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-300">
                Donate Now
              </button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Mass Marriage Ceremony',
                  date: 'March 15, 2024',
                  location: 'Main Ashram'
                },
                {
                  title: 'Health Camp',
                  date: 'April 1, 2024',
                  location: 'Multiple Locations'
                },
                {
                  title: 'Spiritual Retreat',
                  date: 'April 15-20, 2024',
                  location: 'Satlok Ashram'
                }
              ].map((event) => (
                <div key={event.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm opacity-90 mb-1">{event.date}</p>
                  <p className="text-sm opacity-90">{event.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ActivitiesPage;
