import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

interface AshramPageProps {
  name: string;
  location: string;
  description: string;
  coordinates: string;
  facilities: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
  schedule: Array<{
    time: string;
    activity: string;
  }>;
  transportation: Array<{
    mode: string;
    details: string;
    icon: string;
  }>;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

const AshramPage: NextPage<AshramPageProps> = ({
  name,
  location,
  description,
  coordinates,
  facilities,
  schedule,
  transportation,
  contact
}) => {
  return (
    <>
      <Head>
        <title>{name} - Satlok Ashram</title>
        <meta name="description" content={`Visit ${name} and experience divine spiritual knowledge and peace`} />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src={`/images/ashrams/${location.toLowerCase()}.webp`}
            alt={name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
                <p className="text-xl mb-8">{description}</p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Plan Your Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilities.map((facility) => (
                <div key={facility.name} className="bg-gray-50 p-8 rounded-xl text-center">
                  <div className="text-4xl mb-4">{facility.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Daily Schedule</h2>
            <div className="max-w-3xl mx-auto">
              {schedule.map((item) => (
                <div key={item.time} className="flex items-center gap-4 p-4 bg-white rounded-lg mb-4">
                  <div className="w-32 font-semibold text-red-600">{item.time}</div>
                  <div className="flex-1">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transportation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How to Reach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {transportation.map((mode) => (
                <div key={mode.mode} className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-4xl mb-4">{mode.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{mode.mode}</h3>
                  <p className="text-gray-600">{mode.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Location</h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {/* Map iframe would go here */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-600">{coordinates}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p>{contact.phone}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p>{contact.email}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p>{contact.address}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Plan Your Visit</h2>
            <p className="text-xl text-gray-600 mb-8">Experience divine peace and spiritual knowledge</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Book Accommodation
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Download Guide
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AshramPage;
