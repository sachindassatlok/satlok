import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const BhandaraPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Huge Bhandara - Satlok Ashram</title>
        <meta name="description" content="Join our community feast serving pure vegetarian food with love and devotion" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/bhandara.webp"
            alt="Huge Bhandara"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Huge Bhandara</h1>
                <p className="text-xl mb-8">Serving humanity with love through divine community feasts</p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Join Next Bhandara
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '50,000+', label: 'People Served Daily' },
                { number: '365', label: 'Days a Year' },
                { number: '1000+', label: 'Volunteers' },
                { number: '24/7', label: 'Service Hours' }
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
            <h2 className="text-3xl font-bold text-center mb-12">Bhandara Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Pure Vegetarian',
                  description: 'Fresh and pure vegetarian food prepared with love',
                  icon: '🥗'
                },
                {
                  title: '24/7 Service',
                  description: 'Continuous food service throughout the day',
                  icon: '⏰'
                },
                {
                  title: 'Hygienic Preparation',
                  description: 'Prepared in modern, hygienic kitchen',
                  icon: '🧼'
                }
              ].map((feature) => (
                <div key={feature.title} className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Daily Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  meal: 'Breakfast',
                  time: '6 AM - 10 AM',
                  items: ['Poori', 'Sabji', 'Halwa', 'Tea']
                },
                {
                  meal: 'Lunch',
                  time: '11 AM - 3 PM',
                  items: ['Roti', 'Dal', 'Rice', 'Sabji']
                },
                {
                  meal: 'Evening Snacks',
                  time: '4 PM - 6 PM',
                  items: ['Tea', 'Biscuits', 'Namkeen']
                },
                {
                  meal: 'Dinner',
                  time: '7 PM - 10 PM',
                  items: ['Roti', 'Sabji', 'Rice', 'Kheer']
                }
              ].map((meal) => (
                <div key={meal.meal} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{meal.meal}</h3>
                  <div className="text-red-600 mb-4">{meal.time}</div>
                  <ul className="space-y-2 text-gray-600">
                    {meal.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Events */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Special Bhandara Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  event: 'Festival Bhandara',
                  date: 'On All Major Festivals',
                  special: 'Special Festival Menu'
                },
                {
                  event: 'Monthly Bhandara',
                  date: 'First Sunday of Every Month',
                  special: 'Extended Menu Items'
                },
                {
                  event: 'Anniversary Bhandara',
                  date: 'Ashram Foundation Day',
                  special: 'Grand Feast Celebration'
                }
              ].map((event) => (
                <div key={event.event} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{event.event}</h3>
                  <div className="mb-2">{event.date}</div>
                  <div className="text-sm opacity-90">{event.special}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Volunteer Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  role: 'Kitchen Service',
                  timing: 'Flexible Hours',
                  tasks: ['Food Preparation', 'Cleaning', 'Serving']
                },
                {
                  role: 'Distribution',
                  timing: 'Shift Based',
                  tasks: ['Food Service', 'Queue Management', 'Cleaning']
                },
                {
                  role: 'Management',
                  timing: 'Regular Hours',
                  tasks: ['Coordination', 'Inventory', 'Planning']
                }
              ].map((role) => (
                <div key={role.role} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{role.role}</h3>
                  <div className="text-red-600 mb-4">{role.timing}</div>
                  <ul className="space-y-2 text-gray-600">
                    {role.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contribution Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Support Our Service</h2>
            <p className="text-xl text-gray-600 mb-8">Help us serve more people with your contribution</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Donate Now
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Volunteer With Us
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <div className="flex justify-center gap-8">
              <div>
                <div className="text-lg font-semibold">Bhandara Office</div>
                <div className="text-red-600">+91 1234567890</div>
              </div>
              <div>
                <div className="text-lg font-semibold">Email</div>
                <div className="text-red-600">bhandara@satlokashram.org</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BhandaraPage;
