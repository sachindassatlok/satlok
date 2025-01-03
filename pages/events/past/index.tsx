import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const PastEventsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Past Events - Satlok Ashram</title>
        <meta name="description" content="Explore the archive of past spiritual events and celebrations at Satlok Ashram" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[400px]">
          <Image
            src="/images/past-events-hero.webp"
            alt="Past Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Past Events</h1>
                <p className="text-xl mb-8">Relive the divine moments of our spiritual gatherings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Archive */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Event Archive</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Annual Spiritual Conference',
                  date: 'December 2023',
                  description: 'A grand gathering of spiritual seekers from around the world',
                  image: '/images/conference.webp',
                  attendees: '5000+'
                },
                {
                  title: 'Winter Meditation Retreat',
                  date: 'November 2023',
                  description: 'Intensive meditation sessions in serene environment',
                  image: '/images/retreat.webp',
                  attendees: '1000+'
                },
                {
                  title: 'Divine Knowledge Series',
                  date: 'October 2023',
                  description: 'Special discourse series on spiritual wisdom',
                  image: '/images/knowledge.webp',
                  attendees: '3000+'
                },
                {
                  title: 'Youth Spiritual Camp',
                  date: 'September 2023',
                  description: 'Engaging young minds in spiritual practices',
                  image: '/images/youth.webp',
                  attendees: '2000+'
                },
                {
                  title: 'Special Satsang Week',
                  date: 'August 2023',
                  description: 'Week-long spiritual discourse sessions',
                  image: '/images/satsang.webp',
                  attendees: '4000+'
                },
                {
                  title: 'Community Service Day',
                  date: 'July 2023',
                  description: 'Massive community service initiatives',
                  image: '/images/seva.webp',
                  attendees: '1500+'
                }
              ].map((event) => (
                <div key={event.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-red-600 mb-2">{event.date}</div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">👥 {event.attendees} Attendees</span>
                      <button className="text-red-600 hover:text-red-700">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Event Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: '50+',
                  label: 'Events Conducted',
                  icon: '📅'
                },
                {
                  number: '100K+',
                  label: 'Total Attendees',
                  icon: '👥'
                },
                {
                  number: '20+',
                  label: 'Countries Reached',
                  icon: '🌏'
                },
                {
                  number: '1000+',
                  label: 'Volunteers Engaged',
                  icon: '🤝'
                }
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-white rounded-lg">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Event Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
                  <Image
                    src={`/images/gallery-${index + 1}.webp`}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                View Full Gallery
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Attendee Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Devotee',
                  location: 'Delhi',
                  quote: 'A life-changing experience that transformed my spiritual journey.'
                },
                {
                  name: 'Seeker',
                  location: 'Mumbai',
                  quote: 'The divine knowledge shared here is beyond any worldly wisdom.'
                },
                {
                  name: 'Follower',
                  location: 'Bangalore',
                  quote: 'Every event brings new spiritual insights and inner peace.'
                }
              ].map((testimonial) => (
                <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
            <p className="text-xl opacity-90 mb-8">Subscribe to receive updates about upcoming events</p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
                />
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PastEventsPage;
