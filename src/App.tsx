// src/App.tsx (or main.tsx, depending on your routing setup)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index'; // Assuming this is your main page with Blogs component
import NotFoundPage from './pages/NotFound'; // Your 404 page
import BlogPostDetail from './pages/BlogPostDetails'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {/* Add the new route for individual blog posts */}
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
      </Routes>
    </Router>
  );
}

export default App;