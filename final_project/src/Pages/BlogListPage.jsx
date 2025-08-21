import { Link } from "react-router-dom";
import "../styles/BlogListPage.css";
const BlogListPage = () => {
  return (
    <div className="blog-list-container">
      {/* Header Section */}
      <div className="h-[250px] bg-[url('https://gearo-html.vercel.app/images/page-title/page-title-1.jpg')] text-white bg-fixed py-12">
        <div className="max-w-[1400px] mx-auto px-8">
          <h1 className="text-4xl font-semibold mb-2">Blog-list</h1>
          <div className="text-base text-white">
            <Link to="/" className="hover:underline">
              Homepage
            </Link>{" "}
            <span>&gt;</span> <span>Page</span> <span>&gt;</span>{" "}
            <span>Blog-list</span>
          </div>
        </div>
      </div>
      {/* sections */}
      <div className=" mx-50 mt-10 p-2 flex justify-between">
        <div className="w-[48%] p-1 justify-around flex flex-col ">
          <div className="flex">
            <div className="blog-image-wrapper">
              <img
                src="https://gearo-html.vercel.app/images/blog/blog-1.jpg"
                className="blog-image"
                alt="Ergonomic Office Furniture"
              />
              <span className="blog-category-badge">Guides</span>
            </div>
            <div className="pt-20 ms-10">
              <p>January 2, 2025 byThemesflat</p>
              <h4 className="mt-2">
                <a href="#" className="text-xl">
                  Maximizing Comfort with <br />
                  Ergonomic Office Furniture.
                </a>
              </h4>
              <p className="text-gray-700">
                Discover how ergonomic chairs and desks can enhance your comfort
                and productivity at work.
              </p>
              <p className="mt-3 ">Read More</p>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="blog-image-wrapper">
              <img
                src="https://gearo-html.vercel.app/images/blog/blog-2.jpg"
                className="blog-image"
                alt="Ergonomic Office Furniture"
              />
              <span className="blog-category-badge">WorkSpace</span>
            </div>
            <div className="pt-20 ms-10">
              <p>January 2, 2025 byThemesflat</p>
              <h4 className="mt-2">
                <a href="#" className="text-xl">
                  Maximizing Comfort with <br />
                  Ergonomic Office Furniture.
                </a>
              </h4>
              <p className="text-gray-700">
                Discover how ergonomic chairs and desks can enhance your comfort
                and productivity at work.
              </p>
              <p className="mt-3 ">Read More</p>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="blog-image-wrapper">
              <img
                src="https://gearo-html.vercel.app/images/blog/blog-3.jpg"
                className="blog-image"
                alt="Ergonomic Office Furniture"
              />
              <span className="blog-category-badge">Tech</span>
            </div>
            <div className="pt-20 ms-10">
              <p>January 2, 2025 byThemesflat</p>
              <h4 className="mt-2">
                <a href="#" className="text-xl">
                  Maximizing Comfort with <br />
                  Ergonomic Office Furniture.
                </a>
              </h4>
              <p className="text-gray-700">
                Discover how ergonomic chairs and desks can enhance your comfort
                and productivity at work.
              </p>
              <p className="mt-3 ">Read More</p>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="blog-image-wrapper">
              <img
                src="https://gearo-html.vercel.app/images/blog/blog-4.jpg"
                className="blog-image"
                alt="Ergonomic Office Furniture"
              />
              <span className="blog-category-badge">Guides</span>
            </div>
            <div className="pt-20 ms-10">
              <p>January 2, 2025 byThemesflat</p>
              <h4 className="mt-2">
                <a href="#" className="text-xl">
                  Maximizing Comfort with <br />
                  Ergonomic Office Furniture.
                </a>
              </h4>
              <p className="text-gray-700">
                Discover how ergonomic chairs and desks can enhance your comfort
                and productivity at work.
              </p>
              <p className="mt-3 ">Read More</p>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="blog-image-wrapper">
              <img
                src="https://gearo-html.vercel.app/images/blog/blog-9.jpg"
                className="blog-image"
                alt="Ergonomic Office Furniture"
              />
              <span className="blog-category-badge">Tech</span>
            </div>
            <div className="pt-20 ms-10">
              <p>January 2, 2025 byThemesflat</p>
              <h4 className="mt-2">
                <a href="#" className="text-xl">
                  Maximizing Comfort with <br />
                  Ergonomic Office Furniture.
                </a>
              </h4>
              <p className="text-gray-700">
                Discover how ergonomic chairs and desks can enhance your comfort
                and productivity at work.
              </p>
              <p className="mt-3 ">Read More</p>
            </div>
          </div>
        </div>

        <div className="w-[48%] border p-1">
          <div className="mx-20 border">
            <div className="text-center">
              <input
                type="text"
                placeholder="Your Email Address "
                className="border p-3 w-[280px] rounded-xl border-gray-400 "
              />
            </div>
            <div className="mx-34 mt-5">
              <h1>Releted Post</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
