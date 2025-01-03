import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'education-camps',
    title: 'Empowering Lives Through Free Education Camps',
    category: 'Social Welfare',
    date: 'Dec 15, 2024',
    description: 'Satlok Ashram organizes free education camps, enlightening the youth with true spiritual knowledge.',
    image: 'https://placehold.co/600x400/FF1E1E/FFFFFF/png?text=Education+Camps',
    readTime: '5 min read'
  },
  {
    id: 'self-realization',
    title: 'The Journey of Self-Realization',
    category: 'Spiritual Guidance',
    date: 'Dec 18, 2024',
    description: 'Study how the teachings of Saint Rampal Ji Maharaj are helping thousands achieve inner peace.',
    image: 'https://placehold.co/600x400/FF1E1E/FFFFFF/png?text=Self+Realization',
    readTime: '7 min read'
  },
  {
    id: 'health-camps',
    title: 'Free Health Camps: A Service to Humanity',
    category: 'Health Initiatives',
    date: 'Dec 20, 2024',
    description: 'Satlok Ashram\'s free health camps provide essential medical care to underprivileged communities.',
    image: 'https://placehold.co/600x400/FF1E1E/FFFFFF/png?text=Health+Camps',
    readTime: '6 min read'
  }
];

const Blog = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF1E1E]">
            WHAT'S NEW
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Latest Updates & Stories
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={450}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-[#FF1E1E]">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-2 font-medium text-[#FF1E1E] transition-colors hover:text-red-700"
                  >
                    Read More
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
