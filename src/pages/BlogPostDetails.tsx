// src/pages/BlogPostDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import FadeContent from '../components/ui/FadeContent';
import BlurText from "../components/BlurText";

interface BlogPost {
  id: string;
  title: string;
  description?: string; // Make sure this is still optional in type, but will be displayed if present
  date: string;
  link?: string;
  content: string;
  headerImage?: string;
}

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!id) {
        setError("Blog post ID is missing.");
        setLoading(false);
        return;
      }
      try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() } as BlogPost);
        } else {
          setError("No such document found!");
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return (
      <section className="py-20 px-4 text-center text-white min-h-screen">
        Loading blog post...
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 text-center text-red-500 min-h-screen">
        {error}
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="py-20 px-4 text-center text-gray-400 min-h-screen">
        Blog post not found.
      </section>
    );
  }

  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <section className="py-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-xl p-8 shadow-lg">
          {blog.headerImage && (
            <img
              src={blog.headerImage}
              alt={blog.title + " Header"}
              className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
            />
          )}

          <BlurText
            text={blog.title}
            delay={100}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-5xl font-bold text-salil-sky mb-4 text-center"
          />

          {blog.description && ( // Conditionally render the description
            <p className="text-gray-400 text-lg mb-4 ">
              {blog.description}
            </p>
          )}

          <p className="text-gray-500 text-sm mb-6 text-center">
            Published on {new Date(blog.date).toLocaleDateString()}
          </p>
          <div
            className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={createMarkup(blog.content)}
          />
          <style jsx>{`
            .prose h1, .prose h2, .prose h3, .prose h4 { color: #87CEEB; margin-top: 1.5em; margin-bottom: 0.5em; }
            .prose p { margin-bottom: 1em; }
            .prose a { color: #60A5FA; text-decoration: underline; }
            .prose ul, .prose ol { margin-left: 1.5em; list-style-type: disc; }
            .prose li { margin-bottom: 0.5em; }
            .prose strong { color: #E5E7EB; }
          `}</style>
        </div>
      </section>
    </FadeContent>
  );
};

export default BlogPostDetail;