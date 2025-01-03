import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const HealthCampsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Health Camps - Satlok Ashram</title>
        <meta name="description" content="Free health camps providing medical services to all" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/health-camp.webp"
            alt="Health Camp"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Camps</h1>
                <p className="text-xl mb-8">Providing free medical services to all with love and care</p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Find Nearest Camp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'General Health',
                  description: 'Complete health checkup',
                  icon: '👨‍⚕️'
                },
                {
                  title: 'Eye Care',
                  description: 'Vision tests and treatments',
                  icon: '👁️'
                },
                {
                  title: 'Dental Care',
                  description: 'Dental checkups and procedures',
                  icon: '🦷'
                },
                {
                  title: 'Women\'s Health',
                  description: 'Specialized care for women',
                  icon: '👩‍⚕️'
                }
              ].map((service) => (
                <div key={service.title} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '100,000+', label: 'Patients Treated' },
                { number: '1,000+', label: 'Camps Organized' },
                { number: '500+', label: 'Doctors Network' },
                { number: '50+', label: 'Cities Covered' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Camps */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Health Camps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  location: 'Main Ashram',
                  date: 'January 15, 2024',
                  services: ['General Health', 'Eye Care', 'Dental'],
                  time: '9 AM - 5 PM'
                },
                {
                  location: 'City Center',
                  date: 'January 30, 2024',
                  services: ['Women\'s Health', 'General Health'],
                  time: '10 AM - 4 PM'
                },
                {
                  location: 'Rural Center',
                  date: 'February 5, 2024',
                  services: ['General Health', 'Eye Care'],
                  time: '8 AM - 3 PM'
                }
              ].map((camp) => (
                <div key={camp.location} className="border border-gray-200 rounded-lg p-6 hover:border-red-200 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">{camp.location}</h3>
                  <div className="text-gray-600 mb-4">{camp.date}</div>
                  <div className="text-sm text-gray-500 mb-2">{camp.time}</div>
                  <div className="flex flex-wrap gap-2">
                    {camp.services.map((service) => (
                      <span key={service} className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Medical Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: 'Dr. Sharma', specialty: 'General Physician' },
                { name: 'Dr. Verma', specialty: 'Eye Specialist' },
                { name: 'Dr. Singh', specialty: 'Dental Surgeon' },
                { name: 'Dr. Gupta', specialty: 'Women\'s Health' }
              ].map((doctor) => (
                <div key={doctor.name} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">👨‍⚕️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: '1',
                    title: 'Registration',
                    description: 'Simple registration process at camp'
                  },
                  {
                    step: '2',
                    title: 'Consultation',
                    description: 'Meet with our medical experts'
                  },
                  {
                    step: '3',
                    title: 'Treatment',
                    description: 'Receive necessary treatment & medicines'
                  }
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
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600 mb-8">Join us in our mission to provide healthcare to all</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Volunteer as Doctor
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Support Our Cause
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Need More Information?</h2>
            <div className="flex justify-center gap-8">
              <div>
                <div className="text-lg font-semibold">Helpline</div>
                <div className="text-red-600">+91 1234567890</div>
              </div>
              <div>
                <div className="text-lg font-semibold">Email</div>
                <div className="text-red-600">health@satlokashram.org</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HealthCampsPage;
