import { useState } from 'react';

const features = [
  {
    id: 1,
    icon: '🕉️',
    title: 'Scripture-Based Worship',
    description: 'Satlok Ashram functions under the guidance of Jagatguru Tatvdarshi Sant Rampal Ji Maharaj. It is a place that follows a scripture-based method of worship, with all spiritual activities rooted in sacred texts.'
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Selfless Service',
    description: 'We are dedicated to serving humanity without any expectations. Our volunteers work tirelessly to help those in need, organizing various community welfare programs and social initiatives.'
  },
  {
    id: 3,
    icon: '💑',
    title: 'Dowry-Free Marriage Initiative Ramaini',
    description: 'We promote and conduct dowry-free marriages, encouraging social reform and equality. This initiative has helped numerous couples start their lives together without financial burden.'
  }
];

const FeatureItem = ({ feature, isOpen, onToggle }: { 
  feature: typeof features[0], 
  isOpen: boolean,
  onToggle: () => void 
}) => (
  <div className="overflow-hidden rounded-lg border border-gray-100 bg-white transition-all hover:shadow-md">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between p-4 text-left"
    >
      <div className="flex items-center space-x-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-satlok-light text-2xl">
          {feature.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
      </div>
      <svg
        className={`h-6 w-6 transform text-gray-400 transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <div
      className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-40 p-4 pt-0' : 'max-h-0'
      }`}
    >
      <p className="text-gray-600">{feature.description}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const [openFeature, setOpenFeature] = useState<number>(1);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-center text-2xl font-semibold uppercase tracking-wider text-red-500">
            WHY CHOOSE US
          </p>
          <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">
            Experience the <span className="text-red-500">Divine</span> Difference
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-gray-600">
            At Satlok Ashram, we combine spiritual wisdom with practical approaches to create
            a unique environment for spiritual growth and community service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6">
          {features.map((feature) => (
            <FeatureItem
              key={feature.id}
              feature={feature}
              isOpen={openFeature === feature.id}
              onToggle={() => setOpenFeature(openFeature === feature.id ? 0 : feature.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
