import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Location {
  name: string;
  address: string;
  image: string;
  mapLink: string;
}

const Locations = () => {
  const firstRow: Location[] = [
    {
      name: "Satlok Ashram Dhanana Dham",
      address: "Village - Dhanana Teh. Gohana, District Sonipat, Haryana",
      image: "/images/locations/dhanana-dham.webp",
      mapLink: "https://maps.google.com/?q=Satlok+Ashram+Dhanana"
    },
    {
      name: "Satlok Ashram Sojat",
      address: "State Highway 58, Jodhpur Road, Near Toll Naka, Rupawas, Sojat, District Pali (Raj.)",
      image: "/images/locations/sojat.webp",
      mapLink: "https://maps.google.com/?q=Satlok+Ashram+Sojat"
    },
    {
      name: "Satlok Ashram Betul",
      address: "Itarsi Road, Urdan District Betul, Madhya Pradesh",
      image: "/images/locations/betul.webp",
      mapLink: "https://maps.google.com/?q=Satlok+Ashram+Betul"
    }
  ];

  const secondRow: Location[] = [
    {
      name: "Satlok Ashram Bhiwani",
      address: "Near Gujran Mod Railway Gate, District Bhiwani (Haryana)",
      image: "/images/locations/bhiwani.webp",
      mapLink: "https://maps.google.com/?q=Satlok+Ashram+Bhiwani"
    },
    {
      name: "Satlok Ashram Pipli",
      address: "Near Zoo on Pipli to Shahbad Road, Kurukshetra (Haryana)",
      image: "/images/locations/pipli.webp",
      mapLink: "https://maps.google.com/?q=Satlok+Ashram+Pipli"
    },
    {
      name: "Satlok Ashram Indore",
      address: "Om Ujjain Highway, near Pipe Factory, Village Kirhnod, Tehsil Sawer, District Indore Madhya Pradesh",
      image: "/images/locations/indore.webp",
      mapLink: "https://maps.google.com/?q=Satlok+Ashram+Indore"
    },
    {
      name: "Satlok Ashram Khamano",
      address: "Khanna Road Khamano, District Fatehgarh Sahib, Punjab",
      image: "/images/locations/khamano.webp",
      mapLink: "https://maps.google.com/?q=Satlok+Ashram+Khamano"
    }
  ];

  const thirdRow: Location[] = [
    {
      name: "Satlok Ashram Vedkhedi",
      address: "Shamli Near Jhinjhana on Meerut Karnal Highway, District Shamli (Uttar Pradesh)",
      image: "/images/locations/vedkhedi.webp",
      mapLink: "https://maps.google.com/?q=Satlok+Ashram+Vedkhedi"
    },
    {
      name: "Satlok Ashram Dhuri",
      address: "Opposite Police Station Sadar, Sangrur-Dhuri Highway Road, District Sangrur (Punjab)",
      image: "/images/locations/dhuri.webp",
      mapLink: "https://maps.google.com/?q=Satlok+Ashram+Dhuri"
    },
    {
      name: "Satlok Ashram Mundka",
      address: "Rasoolpur Road, near Railway Line, Mundka, Delhi 110081",
      image: "/images/locations/mundka.webp",
      mapLink: "https://maps.google.com/?q=Satlok+Ashram+Mithila"
    },
    {
      name: "Satlok Ashram Mithila",
      address: "Mithila Municipality-2, Belachapi, District Dhanusha (Nepal)",
      image: "/images/locations/mithila.webp",
      mapLink: "https://maps.google.com/?q=Satlok+Ashram+Mithila"
    }
  ];

  const LocationCard = ({ location }: { location: Location }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-72 overflow-hidden group">
        <div className="relative w-full h-full">
          <Image
            src={location.image}
            alt={location.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      <div className="p-4 bg-white relative">
        <h3 className="text-lg font-medium mb-2 text-gray-800 hover:text-red-600 transition-colors duration-300">
          {location.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{location.address}</p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <Link 
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-100 hover:text-orange-600 transform hover:scale-110 transition-all duration-300"
              aria-label="Location"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </Link>
            <Link 
              href={`mailto:info@satlokashram.org`} 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </Link>
            <Link 
              href="tel:+911234567890" 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-green-50 text-green-500 hover:bg-green-100 hover:text-green-600 transform hover:scale-110 transition-all duration-300"
              aria-label="Phone"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </Link>
          </div>
          <Link 
            href={location.mapLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300 text-sm font-medium"
          >
            View on Map
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Satlok Ashram Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Visit our ashrams across India for spiritual guidance and enlightenment</p>
        </div>

        {/* First Row - 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {firstRow.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>

        {/* Second Row - 4 Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {secondRow.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>

        {/* Third Row - 4 Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {thirdRow.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
