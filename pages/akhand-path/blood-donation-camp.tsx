import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const BloodDonationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blood Donation Camps - Satlok Ashram</title>
        <meta name="description" content="Join our blood donation camps and help save lives" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/blood-donation.webp"
            alt="Blood Donation Camp"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Blood Donation Camps</h1>
                <p className="text-xl mb-8">Every drop of blood you donate can save a precious life</p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Register as Donor
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '50,000+', label: 'Units Collected' },
                { number: '100,000+', label: 'Lives Saved' },
                { number: '1,000+', label: 'Camps Organized' },
                { number: '25,000+', label: 'Regular Donors' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Donate Blood?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Save Lives',
                  description: 'One unit of blood can save up to three lives',
                  icon: '❤️'
                },
                {
                  title: 'Health Benefits',
                  description: 'Regular donation helps maintain good health',
                  icon: '💪'
                },
                {
                  title: 'Community Service',
                  description: 'Be part of the life-saving mission',
                  icon: '🤝'
                }
              ].map((reason) => (
                <div key={reason.title} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Donation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: '1', title: 'Registration', description: 'Fill basic details' },
                { step: '2', title: 'Screening', description: 'Basic health check' },
                { step: '3', title: 'Eligibility', description: 'Medical verification' },
                { step: '4', title: 'Donation', description: '10-15 minutes process' },
                { step: '5', title: 'Recovery', description: 'Rest and refreshments' }
              ].map((step) => (
                <div key={step.step} className="relative">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {step.step !== '5' && (
                    <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-red-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Camps */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Camps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  date: 'Jan 15, 2024',
                  location: 'Main Ashram',
                  time: '9:00 AM - 4:00 PM'
                },
                {
                  date: 'Jan 30, 2024',
                  location: 'City Center',
                  time: '10:00 AM - 5:00 PM'
                },
                {
                  date: 'Feb 15, 2024',
                  location: 'Community Hall',
                  time: '8:00 AM - 3:00 PM'
                }
              ].map((camp) => (
                <div key={camp.date} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-xl font-bold mb-2">{camp.date}</div>
                  <div className="mb-1">{camp.location}</div>
                  <div className="text-sm opacity-90">{camp.time}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Eligibility Criteria</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Age', criteria: '18-65 years' },
                { title: 'Weight', criteria: 'Above 45 kg' },
                { title: 'Hemoglobin', criteria: 'Above 12.5 g/dl' },
                { title: 'Last Donation', criteria: '3 months gap' }
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <div>
                    <span className="font-semibold">{item.title}:</span> {item.criteria}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Be a Life Saver</h2>
            <p className="text-xl text-gray-600 mb-8">Register now to donate blood in our upcoming camps</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Register as Donor
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Organize a Camp
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BloodDonationPage;
