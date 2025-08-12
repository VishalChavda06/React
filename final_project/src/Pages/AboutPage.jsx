import { Link } from "react-router"

const AboutPage = () => {
  return (
    <>
      <div className="h-screen bg-white">
        {/* Header Section */}
        <div className="bg-[#ececec] py-12">
          <div className="max-w-[1400px] mx-auto px-8">
            <h1 className="text-4xl font-semibold mb-2">About</h1>
            <div className="text-base text-black">
              <Link to="/" className="hover:underline">Homepage</Link> <span>&gt;</span> <span>Page</span> <span>&gt;</span> <span>About Us</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center mt-10 text-6xl">We  Are Gear0</h1>
          <p className="text-center mt-8">We create unique furniture that improves the new ways in which people live, work and play. For more than 70 years, we've collaborated with the world's best designers to create furniture renowned for its modularity, functionality, and uncompromising quality.</p>
        </div>
      </div>


    </>
  )
}

export default AboutPage
