'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ReformCardProps {
  title: string;
  tags: string[];
  points: string[];
  imagePath: string;
  imageAlt: string;
}

const ReformCard = ({ title, tags, points, imagePath, imageAlt }: ReformCardProps) => {
  return (
    <div className="group overflow-hidden rounded-[32px] bg-white p-4 md:p-8 shadow-lg transition-all hover:shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        {/* Content Side */}
        <div className="md:col-span-7 order-2 md:order-1">
          {/* Tags */}
          <div className="mb-4 md:mb-6 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-red-50 px-3 py-1 md:px-4 md:py-1.5 text-sm font-medium text-red-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="mb-4 md:mb-8 text-xl md:text-2xl font-bold text-[#141E46]">{title}</h3>

          {/* Points */}
          <ul className="space-y-3 md:space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="mt-2 block h-2 w-2 rounded-full bg-red-500 flex-shrink-0"></span>
                <span className="text-sm md:text-base text-gray-600">{point}</span>
              </li>
            ))}
          </ul>

          {/* Learn More Button */}
          <Link
            href="#"
            className="mt-4 md:mt-8 inline-flex items-center space-x-2 text-red-500 transition-colors hover:text-red-600"
          >
            <span className="font-medium text-sm md:text-base">Learn More</span>
            <svg
              className="h-4 w-4 md:h-5 md:w-5 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Image Side */}
        <div className="md:col-span-5 order-1 md:order-2">
          <div className="relative h-[200px] md:h-full md:min-h-[400px] overflow-hidden rounded-[24px] bg-gray-100">
            <Image
              src={imagePath}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileReformCard = ({ title, tags, points, imagePath, imageAlt }: ReformCardProps) => {
  return (
    <div className="group overflow-hidden rounded-[24px] bg-white shadow-lg mx-4">
      {/* Image */}
      <div className="relative h-[250px]">
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#141E46] mb-4">{title}</h3>

        {/* Points */}
        <ul className="space-y-3 mb-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
              <span className="text-sm text-gray-600">{point}</span>
            </li>
          ))}
        </ul>

        {/* Learn More Button */}
        <Link
          href="#"
          className="inline-flex items-center space-x-2 text-red-500 group"
        >
          <span className="text-sm font-medium">Learn More</span>
          <svg
            className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const SocialReforms = () => {
  const reforms = [
    {
      title: 'Dowry-Free Society Campaign',
      tags: ['Reform', 'Awareness', 'Education'],
      points: [
        'Social Awareness Drives',
        'Community Engagement',
        'Success Stories Shared',
        'Awareness Through Events'
      ],
      imagePath: '/images/reforms/dowry-free.webp',
      imageAlt: 'Dowry-free marriage ceremony'
    },
    {
      title: 'Blood Donation Camps',
      tags: ['Health', 'Support'],
      points: [
        'Regular Blood Donation Drives',
        'Volunteers Network',
        'Life-Saving Awareness',
        'Collaboration with Hospitals'
      ],
      imagePath: '/images/reforms/blood-donation.webp',
      imageAlt: 'Blood donation camp'
    },
    {
      title: 'Ayodhya Ram Bhandar Initiative',
      tags: ['Charity', 'Community'],
      points: [
        'Free Food Distribution',
        'Community Kitchen Support',
        'Volunteer Participation',
        'Support for Pilgrims'
      ],
      imagePath: '/images/reforms/food-distribution.webp',
      imageAlt: 'Food distribution'
    },
    {
      title: 'Organizing Free Health Camps',
      tags: ['Health', 'Care'],
      points: [
        'Free Health Checkups',
        'Medicine Distribution',
        'Consultations by Specialists',
        'Health Awareness Programs'
      ],
      imagePath: '/images/reforms/health-camp.webp',
      imageAlt: 'Health camp'
    }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-red-500">OUR WORK</p>
          <h2 className="mt-2 md:mt-3 text-3xl md:text-4xl font-bold text-[#141E46] lg:text-5xl">
            Our Social Reforms Work
          </h2>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden -mx-4">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="py-8"
          >
            {reforms.map((reform, index) => (
              <SwiperSlide key={index}>
                <MobileReformCard {...reform} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-2">
          {reforms.map((reform, index) => (
            <ReformCard key={index} {...reform} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialReforms;
