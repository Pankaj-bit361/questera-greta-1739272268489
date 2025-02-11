import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: "Investment Opportunities in Delhi NCR",
    excerpt: "Discover the best areas for real estate investment in Delhi NCR region...",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    title: "Guide to Buying Property in Faridabad",
    excerpt: "Everything you need to know about purchasing property in Faridabad...",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    title: "Real Estate Market Trends 2024",
    excerpt: "Latest trends and predictions for the real estate market...",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  }
];

export default function Blog() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">Real Estate Insights</h1>
          
          <div className="grid gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full md:w-48 object-cover"
                      src={blog.image}
                      alt={blog.title}
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-sm text-gray-500 mb-1">{blog.date}</div>
                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                    <p className="text-gray-600">{blog.excerpt}</p>
                    <button className="mt-4 text-navy-blue hover:text-blue-900">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}