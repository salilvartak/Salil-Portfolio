// src/components/Blogs.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import BlurText from "./BlurText";
import FadeContent from './ui/FadeContent';

interface BlogPost {
  id: string; // Firestore document ID is crucial for linking
  title: string;
  description: string;
  date: string;
  link?: string; // This can now be optional or removed if not used
  content?: string; // Content is not needed here, but kept for type consistency
}

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, "blogs");
        const q = query(blogsCollection, orderBy("date", "desc"));
        const blogSnapshot = await getDocs(q);
        const blogList = blogSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as BlogPost[];
        setBlogs(blogList);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 text-center text-white">
        Loading blogs...
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 text-center text-red-500">
        {error}
      </section>
    );
  }

  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <section className="py-20 px-4 relative" id="blogs">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-16">
            <BlurText
              text="Latest Blogs"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-6xl md:text-6xl font-bold text-center mb-16 text-salil-sky"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 -z-50" style={{ position: 'relative', zIndex: 10 }}>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog.id} className="bg-gray-800/50 rounded-xl p-6 transition-transform duration-300 hover:scale-105">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-400 mb-4">{blog.description}</p>
                  <span className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</span>
                  <div className="mt-4">
                    {/* Use Link component to navigate to the new detail page */}
                    <Link
                      to={`/blog/${blog.id}`} // Link to the new blog detail route using the blog's ID
                      className="text-blue-400 hover:text-blue-600 flex items-center"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 col-span-full">No blog posts found.</p>
            )}
          </div>
        </div>
      </section>
    </FadeContent>
  );
};

export default Blogs;