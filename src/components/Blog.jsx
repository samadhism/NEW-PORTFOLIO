import { motion } from 'framer-motion';
import '../Styles/Blog.css'

function Blog() {
  const posts = [
    {
      title: "Blog Post 1",
      date: "March 1, 2024",
      excerpt: "This is a sample blog post excerpt..."
    },
    {
      title: "Blog Post 2",
      date: "March 5, 2024",
      excerpt: "Another sample blog post excerpt..."
    }
  ];

  return (
    <motion.section 
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h2 className="section-title">Blog</h2>
        <div className="blog-posts">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              className="blog-post"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{post.title}</h3>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <a href="#" className="read-more">Read More</a>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Blog;