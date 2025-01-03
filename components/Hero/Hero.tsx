import Link from 'next/link';

const Hero = () => {
  const stats = [
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "20+",
      label: "Years of Spiritual Guidance"
    },
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "250+",
      label: "Dedicated Volunteers"
    },
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "1200+",
      label: "Religious Events Held"
    },
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "100%",
      label: "Knowledge Accuracy"
    },
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "120+",
      label: "Countries Reached"
    },
    {
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "100%",
      label: "Devotee Satisfaction"
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-satlok-bg-primary via-white to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="text-satlok-primary">Satlok Ashram</span>
              <span className="text-satlok-secondary"> - A Spiritual Revolution</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-satlok-text-secondary">
              Satlok Ashram, under the divine guidance of Sant Rampal Ji Maharaj, is the
              epicenter of the greatest spiritual revolution the world has ever witnessed.
              Foretold by renowned visionaries like Nostradamus, Sant Rampal Ji's
              movement is firmly rooted in the authentic teachings of our sacred
              scriptures, forming the unshakable foundation of Satlok Ashram.
            </p>
            <p className="mt-4 text-lg font-medium text-satlok-text-primary">
              Through this superlative God-given wisdom, Satlok Ashram unites humanity by
              breaking the man-made barriers of religion, caste and creed, welcoming
              each individual with equality and compassion.
            </p>
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-satlok-secondary">
              Join the Path to Eternal Bliss
            </h2>
            <div className="mt-6">
              <Link
                href="/about"
                className="rounded-full bg-satlok-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-satlok-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-satlok-primary transition-colors"
              >
                About Us →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200/50 transition-transform hover:scale-105"
              >
                <div className="text-satlok-primary">{stat.icon}</div>
                <div className="mt-4 text-3xl font-bold text-satlok-secondary">{stat.value}</div>
                <div className="mt-2 text-center text-sm text-satlok-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-satlok-primary to-satlok-accent opacity-20"></div>
      </div>
    </div>
  );
};

export default Hero;
