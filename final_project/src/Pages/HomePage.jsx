
import React from 'react';
import ImageBanner from '../Components/ImageBanner';
import YouMayAlsoLike from '../Components/YouMayAlsoLike';
import { useCart } from '../context/CartContext';
import '../styles/HomeCategories.css';

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

const products = [
  {
    id: 1,
    name: 'Ergonomic Chair Pro',
    price: 79.99,
    originalPrice: null,
    discount: null,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    colors: ['#f5f5f5', '#d3d3d3'],
    selectedColor: 0,
  },
  {
    id: 2,
    name: 'Open Box - Adjustable Laptop Stand',
    price: 79.99,
    originalPrice: 98.00,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    colors: ['#87ceeb', '#696969'],
    selectedColor: 0,
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 89.99,
    originalPrice: 98.00,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    colors: ['#ffa500', '#f5f5f5'],
    selectedColor: 0,
  },
  {
    id: 4,
    name: 'Double Standing Desk',
    price: 69.99,
    originalPrice: null,
    discount: null,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    colors: ['#d2b48c', '#ffc0cb', '#d3d3d3'],
    selectedColor: 0,
  },
  {
    id: 5,
    name: 'Wireless Charging Dock',
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    colors: ['#000000', '#808080'],
    selectedColor: 0,
  },
  {
    id: 6,
    name: 'Ergonomic Office Chair',
    price: 129.99,
    originalPrice: null,
    discount: null,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    colors: ['#87ceeb', '#f5f5f5'],
    selectedColor: 0,
  },
  {
    id: 7,
    name: 'Leather Desk Organizer',
    price: 45.99,
    originalPrice: 59.99,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    colors: ['#d2b48c', '#ffa500'],
    selectedColor: 0,
  },
  {
    id: 8,
    name: 'Monitor Stand',
    price: 39.99,
    originalPrice: null,
    discount: null,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    colors: ['#000000', '#808080'],
    selectedColor: 0,
  },
];

const HomePage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    // You can add a toast notification here if you want
    console.log(`${product.name} added to cart!`);
  };

  return (
    <>
      <ImageBanner />
      <section className="flex flex-col items-center my-20 px-4 mt-10s">
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

      
      

      {/* Our Picks For You Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#222] mb-4">
              Our Picks For You
            </h2>
            <p className="text-lg text-gray-600">
              Fresh styles just in! Elevate your look.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}%
                      </span>
                    </div>
                  )}

                  {/* Product Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <img
                      src={product.hoverImage}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    />
                    
                    {/* Hover Icons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      {/* Wishlist Icon */}
                      <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 hover:scale-110 transition-all duration-300">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      
                      {/* Quick View Icon */}
                      <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all duration-300">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      
                      {/* Compare Icon */}
                      <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-50 hover:scale-110 transition-all duration-300">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </button>
                    </div>

                    {/* Add to Cart Button - Rectangular button at bottom of image */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button 
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#222] mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {product.name}
                    </h3>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      {product.originalPrice ? (
                        <>
                          <span className="text-lg font-bold text-[#222]">
                            ${product.price}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-[#222]">
                          ${product.price}
                        </span>
                      )}
                    </div>

                    {/* Color Options */}
                    <div className="flex gap-2 mb-4">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                            index === product.selectedColor
                              ? 'border-[#222] scale-110'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => {
                            // Handle color selection
                            console.log(`Selected color ${index} for ${product.name}`);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
}

export default HomePage
