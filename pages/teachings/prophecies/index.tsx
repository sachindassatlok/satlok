import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const PropheciesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prophecies - Teachings of Sant Rampal Ji Maharaj</title>
        <meta name="description" content="Discover the divine prophecies about Sant Rampal Ji Maharaj by various seers and saints" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/prophecies.webp"
            alt="Ancient Prophecies"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Divine Prophecies</h1>
                <p className="text-xl mb-8">Ancient seers and saints foretold the advent of Sant Rampal Ji Maharaj</p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Explore Prophecies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Understanding the Prophecies</h2>
              <p className="text-gray-600 mb-8">
                Throughout history, many great saints and seers have prophesied about the coming of a great spiritual leader
                who would bring true spiritual knowledge to the world. These prophecies point towards Sant Rampal Ji Maharaj
                as the divine messenger of this era.
              </p>
            </div>
          </div>
        </section>

        {/* Major Prophecies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Major Prophecies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  seer: 'Nostradamus',
                  prophecy: 'The great Chyren will be the Chief of the World...',
                  year: '1555',
                  book: 'The Centuries'
                },
                {
                  seer: 'Florence',
                  prophecy: 'The Savior will appear in India...',
                  year: '1850',
                  book: 'The Golden Light'
                },
                {
                  seer: 'Shri Anandacharya',
                  prophecy: 'Under the leadership of Sant Rampal Ji Maharaj...',
                  year: '1910',
                  book: 'The Ocean of Light'
                },
                {
                  seer: 'Vedic Scriptures',
                  prophecy: 'The divine messenger will reveal the true path...',
                  year: 'Ancient',
                  book: 'Various Texts'
                }
              ].map((prophecy) => (
                <div key={prophecy.seer} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{prophecy.seer}</h3>
                  <p className="text-gray-600 mb-4">{prophecy.prophecy}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Year: {prophecy.year}</span>
                    <span>Source: {prophecy.book}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Prophecy Timeline</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    year: 'Ancient Times',
                    event: 'Vedic scriptures mention the coming of a divine messenger'
                  },
                  {
                    year: '14th Century',
                    event: 'Saint Kabir Das provides detailed prophecies'
                  },
                  {
                    year: '16th Century',
                    event: 'Nostradamus predicts the rise of a spiritual leader from the East'
                  },
                  {
                    year: 'Modern Era',
                    event: 'Fulfillment of prophecies through Sant Rampal Ji Maharaj'
                  }
                ].map((time, index) => (
                  <div key={time.year} className="flex items-start gap-4">
                    <div className="w-32 text-right font-semibold">{time.year}</div>
                    <div className="w-4 h-4 bg-red-600 rounded-full mt-1.5"></div>
                    <div className="flex-1 pb-8">
                      <p className="text-gray-600">{time.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Evidence Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Scriptural Evidence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Vedic Texts',
                  description: 'Ancient Hindu scriptures containing prophecies',
                  icon: '📜'
                },
                {
                  title: 'Holy Books',
                  description: 'References from various religious texts',
                  icon: '📚'
                },
                {
                  title: 'Saint Writings',
                  description: 'Documented predictions by great saints',
                  icon: '✍️'
                }
              ].map((evidence) => (
                <div key={evidence.title} className="bg-white p-8 rounded-xl text-center">
                  <div className="text-4xl mb-4">{evidence.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{evidence.title}</h3>
                  <p className="text-gray-600">{evidence.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Discover More</h2>
            <p className="text-xl opacity-90 mb-8">Learn about the divine prophecies and their fulfillment</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Download Complete Guide
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Watch Video Evidence
              </button>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Further Research</h2>
            <p className="text-gray-600 mb-8">
              Explore our extensive collection of research materials, books, and documentaries about these divine prophecies.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Visit Library
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default PropheciesPage;
