import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const EventTimetablePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Event Timetable - Satlok Ashram</title>
        <meta name="description" content="View the complete schedule of spiritual events and activities at Satlok Ashram" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[400px]">
          <Image
            src="/images/timetable-hero.webp"
            alt="Event Timetable"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Timetable</h1>
                <p className="text-xl mb-8">Complete schedule of all spiritual activities and events</p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Schedule */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Daily Schedule</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  time: '4:00 AM - 5:00 AM',
                  event: 'Morning Meditation',
                  location: 'Main Hall'
                },
                {
                  time: '5:00 AM - 6:30 AM',
                  event: 'Morning Satsang',
                  location: 'Satsang Hall'
                },
                {
                  time: '7:00 AM - 8:00 AM',
                  event: 'Breakfast',
                  location: 'Dining Area'
                },
                {
                  time: '9:00 AM - 12:00 PM',
                  event: 'Spiritual Discourse',
                  location: 'Knowledge Center'
                },
                {
                  time: '12:30 PM - 2:00 PM',
                  event: 'Lunch & Rest',
                  location: 'Dining Area'
                },
                {
                  time: '4:00 PM - 6:00 PM',
                  event: 'Evening Satsang',
                  location: 'Satsang Hall'
                },
                {
                  time: '7:00 PM - 8:00 PM',
                  event: 'Evening Meditation',
                  location: 'Meditation Hall'
                }
              ].map((schedule) => (
                <div key={schedule.time} className="flex flex-col md:flex-row items-center gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="md:w-1/3 font-semibold text-red-600">{schedule.time}</div>
                  <div className="md:w-1/3 font-medium">{schedule.event}</div>
                  <div className="md:w-1/3 text-gray-600">{schedule.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Schedule */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Weekly Special Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 max-w-6xl mx-auto">
              {[
                {
                  day: 'Monday',
                  events: ['Bhajan Session', 'Spiritual Q&A']
                },
                {
                  day: 'Tuesday',
                  events: ['Scripture Study', 'Youth Program']
                },
                {
                  day: 'Wednesday',
                  events: ['Special Satsang', 'Meditation Workshop']
                },
                {
                  day: 'Thursday',
                  events: ['Spiritual Discourse', 'Seva Activities']
                },
                {
                  day: 'Friday',
                  events: ['Divine Knowledge', 'Group Discussion']
                },
                {
                  day: 'Saturday',
                  events: ['Special Program', 'Cultural Events']
                },
                {
                  day: 'Sunday',
                  events: ['Main Satsang', 'Community Lunch']
                }
              ].map((day) => (
                <div key={day.day} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-red-600 mb-3">{day.day}</h3>
                  <ul className="space-y-2">
                    {day.events.map((event) => (
                      <li key={event} className="text-gray-600">{event}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Events */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Monthly Special Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Full Moon Meditation',
                  description: 'Special meditation session under moonlight',
                  timing: 'Every Purnima',
                  icon: '🌕'
                },
                {
                  title: 'Community Service',
                  description: 'Group seva activities for spiritual growth',
                  timing: 'First Sunday',
                  icon: '🤝'
                },
                {
                  title: 'Special Satsang',
                  description: 'Extended spiritual discourse session',
                  timing: 'Last Sunday',
                  icon: '🎤'
                }
              ].map((event) => (
                <div key={event.title} className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-4xl mb-4">{event.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <p className="text-red-600 font-medium">{event.timing}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Download Schedule</h2>
            <p className="text-xl opacity-90 mb-8">Get the complete timetable on your device</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                PDF Format
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Calendar Format
              </button>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Important Notes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                'Schedule may vary during special occasions and festivals',
                'Please arrive 15 minutes before the scheduled time',
                'Proper dress code must be followed',
                'Mobile phones should be kept in silent mode'
              ].map((note, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-red-600">•</span>
                  <p className="text-gray-600">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EventTimetablePage;
