import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const UpcomingEventsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Upcoming Events - Satlok Ashram</title>
        <meta name="description" content="Discover upcoming spiritual events, satsangs, and ceremonies at Satlok Ashram" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/events-hero.webp"
            alt="Upcoming Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
                <p className="text-xl mb-8">Join us for transformative spiritual gatherings and ceremonies</p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Register for Events
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Events */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Monthly Satsang',
                  date: 'January 15, 2024',
                  time: '9:00 AM - 1:00 PM',
                  location: 'Main Ashram Hall',
                  image: '/images/satsang.webp'
                },
                {
                  title: 'Spiritual Retreat',
                  date: 'February 1-3, 2024',
                  time: 'All Day Event',
                  location: 'Meditation Center',
                  image: '/images/retreat.webp'
                },
                {
                  title: 'Divine Knowledge Session',
                  date: 'January 20, 2024',
                  time: '4:00 PM - 7:00 PM',
                  location: 'Knowledge Center',
                  image: '/images/knowledge.webp'
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
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>📅 {event.date}</p>
                      <p>⏰ {event.time}</p>
                      <p>📍 {event.location}</p>
                    </div>
                    <button className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar View */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Monthly Calendar</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              {/* Calendar grid would go here - simplified version shown */}
              <div className="grid grid-cols-7 gap-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center font-semibold">{day}</div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                  <div key={i} className="aspect-square border rounded-lg flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Event Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Satsang',
                  count: '12 Events',
                  icon: '🎤'
                },
                {
                  title: 'Meditation',
                  count: '8 Events',
                  icon: '🧘'
                },
                {
                  title: 'Workshops',
                  count: '6 Events',
                  icon: '👥'
                },
                {
                  title: 'Ceremonies',
                  count: '4 Events',
                  icon: '🕊️'
                }
              ].map((category) => (
                <div key={category.title} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Info */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">How to Register</h2>
            <p className="text-xl opacity-90 mb-8">Simple steps to join our events</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: '1',
                  title: 'Choose Event',
                  description: 'Select from our calendar'
                },
                {
                  step: '2',
                  title: 'Fill Details',
                  description: 'Complete registration form'
                },
                {
                  step: '3',
                  title: 'Confirm',
                  description: 'Receive confirmation email'
                }
              ].map((step) => (
                <div key={step.step} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="opacity-90">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">Subscribe to receive event updates</p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
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

export default UpcomingEventsPage;
