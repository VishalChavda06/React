import { Link } from "react-router-dom";
const BlogListPage = () => {
  return (
    <>
      <div className="h-screen bg-white">
        {/* Header Section */}
        <div className="bg-[#ececec] py-12">
          <div className="max-w-[1100px] mx-auto px-8">
            <h1 className="text-4xl font-semibold mb-2">Blogs</h1>
            <div className="text-base text-black">
              <Link to="/" className="hover:underline">Homepage</Link> <span>&gt;</span> <span>Blogs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogListPage
