
import ImageBanner from '../Components/ImageBanner';


const categories = [
  {
    title: 'Storage Solutions',
    img: 'https://gearonextjs.vercel.app/images/section/collections-banner.jpg',
    position: 'justify-self-end',
    textAlign: 'text-left',
  },
  {
    title: 'Lighting',
    img: 'https://gearonextjs.vercel.app/images/section/collections-banner-1.jpg',
    position: 'justify-self-start',
    textAlign: 'text-right',
  },
  {
    title: 'Office Chairs',
    img: 'https://gearonextjs.vercel.app/images/section/collections-banner-2.jpg',
    position: 'justify-self-end',
    textAlign: 'text-left',
  },
  {
    title: 'Accessories',
    img: 'https://gearonextjs.vercel.app/images/section/collections-banner-3.jpg',
    position: 'justify-self-start',
    textAlign: 'text-right',
  },
  {
    title: 'Decor Office',
    img: 'https://gearonextjs.vercel.app/images/section/collections-banner-4.jpg',
    position: 'justify-self-center',
    textAlign: 'text-center',
  },
];

const HomePage = () => {
  return (
    <>
      <ImageBanner />
      <section className="flex flex-col items-center my-20">
        <div
          className="grid grid-cols-3 grid-rows-2 gap-y-20 gap-x-7 w-full max-w-7xl justify-items-center items-center"
        >
          {/* Row 1 */}
          <div className="flex items-center gap-8 col-start-1 row-start-1 justify-self-end group cursor-pointer">
            <img
              src={categories[0].img}
              alt={categories[0].title}
              className="w-[200px] h-[120px] object-cover rounded-[60px] shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
            />
            <span className="text-[2.8rem] font-serif font-normal text-[#222] leading-tight">
              {categories[0].title}
            </span>
          </div>
          <div className="flex items-center gap-8 col-start-3 row-start-1 justify-self-start group cursor-pointer">
            <img
              src={categories[1].img}
              alt={categories[1].title}
              className="w-[200px] h-[120px] object-cover rounded-[60px] shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
            />
            <span className="text-[2.8rem] font-serif font-normal text-[#222] leading-tight">
              {categories[1].title}
            </span>
          </div>
          {/* Row 2 */}
          <div className="flex items-center gap-8 col-start-1 row-start-2 justify-self-end group cursor-pointer">
            <img
              src={categories[2].img}
              alt={categories[2].title}
              className="w-[200px] h-[120px] object-cover rounded-[60px] shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
            />
            <span className="text-[2.8rem] font-serif font-normal text-[#222] leading-tight">
              {categories[2].title}
            </span>
          </div>
          <div className="flex items-center gap-8 col-start-3 row-start-2 justify-self-start group cursor-pointer">
            <img
              src={categories[3].img}
              alt={categories[3].title}
              className="w-[200px] h-[120px] object-cover rounded-[60px] shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
            />
            <span className="text-[2.8rem] font-serif font-normal text-[#222] leading-tight">
              {categories[3].title}
            </span>
          </div>
          {/* Row 3, center */}
          <div className="flex items-center gap-8 col-start-2 row-start-3 justify-self-center group cursor-pointer">
            <img
              src={categories[4].img}
              alt={categories[4].title}
              className="w-[200px] h-[120px] object-cover rounded-[60px] shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
            />
            <span className="text-[2.8rem] font-serif font-normal text-[#222] leading-tight">
              {categories[4].title}
            </span>
          </div>
        </div>
        <div className="mt-14 text-xl text-[#222] border-b-2 border-[#222] inline-block pb-1 cursor-pointer hover:text-gray-500 hover:border-gray-500 transition">
          View All Categories
        </div>
      </section>
    </>
  );
}

export default HomePage
