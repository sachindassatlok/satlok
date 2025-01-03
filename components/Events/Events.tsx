'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: string;
  image: string;
  type: string;
  location: string;
}

const events: Event[] = [
  {
    id: 'nirvan-diwas-2025',
    title: "Kabir Saheb's Nirvan Diwas 2025",
    date: '06-07-08 February 2025',
    image: '/images/events/nirvan-diwas.webp',
    type: 'NIRVAN DIWAS',
    location: 'Satlok Ashram Hisar'
  },
  {
    id: 'bodh-diwas-rampal-2025',
    title: 'Bodh Diwas: Saint Rampal Ji Maharaj',
    date: '15-16-17 February 2025',
    image: '/images/events/bodh-diwas-rampal.webp',
    type: 'BODH DIWAS',
    location: 'Satlok Ashram Hisar'
  },
  {
    id: 'bodh-diwas-garibdas-2025',
    title: 'Bodh Diwas: Saint Garibdas Ji Maharaj',
    date: '09-10-11 March 2025',
    image: '/images/events/bodh-diwas-garibdas.webp',
    type: 'BODH DIWAS',
    location: 'Satlok Ashram Hisar'
  },
  {
    id: 'prakat-diwas-2025',
    title: 'Prakat Diwas: God Kabir Saheb',
    date: '09-10-11 June 2025',
    image: '/images/events/prakat-diwas.webp',
    type: 'PRAKAT DIWAS',
    location: 'Satlok Ashram Hisar'
  },
  {
    id: 'avtaran-diwas-2025',
    title: 'Avtaran Diwas: Saint Rampal Ji Maharaj',
    date: '06-07-08 September 2025',
    image: '/images/events/avtaran-diwas.webp',
    type: 'AVTARAN DIWAS',
    location: 'Satlok Ashram Hisar'
  },
  {
    id: 'divya-dharm-yagya-2025',
    title: 'Divya Dharm Yagya Diwas',
    date: '04-05-06 November 2025',
    image: '/images/events/yagya-diwas.webp',
    type: 'YAGYA DIWAS',
    location: 'Satlok Ashram Hisar'
  }
];

const Events = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-red-600 bg-red-100 rounded-full">
            SATLOK ASHRAM ACTIVITIES
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Events and Satsangs in 2025
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={1352}
                  height={572}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <div className="relative mb-4">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-orange-100 text-orange-800 rounded-lg shadow-md">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-4">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm text-gray-600">In All Satlok Ashrams</p>
                  </div>
                </div>
                <Link 
                  href={`/events/${event.id}`}
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300 mt-auto"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
