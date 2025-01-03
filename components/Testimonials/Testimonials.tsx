import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  occupation: string;
  message: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vikas Kumar",
    location: "Rohtak, Haryana",
    occupation: "Engineer",
    message: "The knowledge of true worship provided at Satlok Ashram has changed my perspective on life. The spiritual guidance has brought peace and purpose to my daily routine.",
    rating: 5,
    image: "/images/testimonials/devotee1.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi, India",
    occupation: "Teacher",
    message: "Following the path shown by Satlok Ashram has transformed my life completely. The spiritual knowledge has helped me understand the true purpose of human life.",
    rating: 5,
    image: "/images/testimonials/devotee2.jpg"
  },
  {
    id: 3,
    name: "Rajesh Verma",
    location: "Mumbai, Maharashtra",
    occupation: "Business Owner",
    message: "The teachings at Satlok Ashram are eye-opening. They have helped me understand the true meaning of spirituality and how to live a purposeful life.",
    rating: 5,
    image: "/images/testimonials/devotee3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-[#FF1E1E] to-red-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            What Our Devotees Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real experiences from our spiritual community
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -left-2 top-8 h-12 w-2 rounded-r-lg bg-gradient-to-b from-[#FF1E1E] to-red-600"></div>
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.occupation}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">{testimonial.message}</p>
              <div className="absolute -bottom-2 right-8 text-6xl font-serif text-red-100 opacity-50">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
