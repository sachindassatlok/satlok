'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BookFeature {
  text: string;
}

interface Book {
  id: string;
  title: string;
  coverImage: string;
  language: string;
  pages: number;
  features: BookFeature[];
}

const books: Book[] = [
  {
    id: 'gyan-ganga',
    title: 'Gyan Ganga',
    coverImage: '/images/books/gyan-ganga-front.webp',
    language: 'Hindi',
    pages: 348,
    features: [
      { text: 'Boundaries of Worship' },
      { text: 'Creation of Nature' },
      { text: 'Evidence of Supreme God' },
      { text: 'A Sant Should Be Like This' },
      { text: 'The Secret of the Holy Purans' }
    ]
  },
  {
    id: 'way-of-living',
    title: 'Way Of Living',
    coverImage: '/images/books/way-of-living.webp',
    language: 'English',
    pages: 280,
    features: [
      { text: 'Common Belief Of Human Life' },
      { text: 'True Path of Worship' },
      { text: 'Teachings of Saints' },
      { text: 'Special Brainstorm' },
      { text: 'How to Perform Marriage' }
    ]
  },
  {
    id: 'hindu-religion',
    title: 'Hindu Religion is Great',
    coverImage: '/images/books/hindu-religion.webp',
    language: 'Hindi',
    pages: 356,
    features: [
      { text: 'True Essence of Gita' },
      { text: 'Resolution of Doubt' },
      { text: 'Whom Did God Meet?' },
      { text: 'Difference Between Speech and Action' },
      { text: 'Can One Change Guru?' }
    ]
  }
];

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Book Cover */}
      <div className="relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="relative w-48 h-64 mx-auto">
          <Image
            src={book.coverImage}
            alt={book.title}
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Free Badge */}
        <div className="absolute -bottom-3 -right-3 transform rotate-6">
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 animate-pulse">
              <div className="h-full w-full bg-red-500 rounded-md blur-sm transform scale-110" />
            </div>
            
            {/* Main badge */}
            <div className="relative bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1.5 rounded-md shadow-xl flex items-center gap-1.5 font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="tracking-wide">FREE</span>
            </div>
            
            {/* Enhanced shadow */}
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-black/20 rounded-md blur-sm -z-10" />
          </div>
        </div>

        {/* Book info badges */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
          <span className="px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full shadow-sm">
            {book.language}
          </span>
          <span className="px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full shadow-sm">
            {book.pages} Pages
          </span>
        </div>
      </div>

      {/* Book Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{book.title}</h3>
        <ul className="space-y-3">
          {book.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full animate-spin-slow" />
                <div className="absolute inset-0.5 bg-white rounded-full" />
                <svg
                  className="absolute inset-1 w-4 h-4 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3.5a6.5 6.5 0 0 0-6.5 6.5c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-3.59-2.91-6.5-6.5-6.5zm0 12a5.5 5.5 0 1 1 5.5-5.5 5.51 5.51 0 0 1-5.5 5.5zm2.5-7.5h-2v-2a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/order-book/${book.id}`}
        className="relative block w-full py-3.5 px-6 text-center text-white font-medium bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg overflow-hidden group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Order Now
          <svg
            className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </div>
  );
};

const GetBooks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            Get Books
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Order Free Books Online
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the path to spiritual enlightenment through our sacred collection of books
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetBooks;
