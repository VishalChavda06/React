import { Link } from "react-router-dom";
import "../styles/BlogListPage.css";
const BlogListPage = () => {
  return (
    <div className="blog-list-container">
      {/* Header Section */}
      <div className="blog-header">
        <div className="blog-header-inner">
          <h1 className="blog-title">Blogs</h1>
          <div className="blog-breadcrumb">
            <Link to="/">Homepage</Link> <span>&gt;</span> <span>Blogs</span>
          </div>
        </div>
      </div>
      {/* Blog List Example */}
      <div className="blog-list">
        <div className="blog-card">
          <div className="blog-card-title">How to Start React</div>
          <div className="blog-card-desc">A beginner's guide to getting started with React.js and building your first app.</div>
          <Link className="blog-card-link" to="#">Read More</Link>
        </div>
        <div className="blog-card">
          <div className="blog-card-title">Understanding Vite</div>
          <div className="blog-card-desc">Learn why Vite is a great choice for modern React development and how to use it.</div>
          <Link className="blog-card-link" to="#">Read More</Link>
        </div>
        <div className="blog-card">
          <div className="blog-card-title">Styling in React</div>
          <div className="blog-card-desc">Explore different ways to style your React components, from CSS modules to styled-components.</div>
          <Link className="blog-card-link" to="#">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogListPage
