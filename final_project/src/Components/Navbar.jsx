import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const navigationItems = [
    {
      label: "SHOP",
      hasDropdown: true,
      dropdownItems: [
        { label: "Shop Grid", link: "/shop-grid" },
        { label: "Shop List", link: "/shop-list" },
        { label: "Shop Details", link: "/shop-details" },
        { label: "Shopping Cart", link: "/cart" },
        { label: "Checkout", link: "/checkout" },
      ]
    },
    {
      label: "PRODUCTS",
      hasDropdown: true,
      dropdownItems: [
        { label: "Product Grid", link: "/products-grid" },
        { label: "Product List", link: "/products-list" },
        { label: "Product Details", link: "/product-details" },
        { label: "Product Categories", link: "/categories" },
      ]
    },
    {
      label: "BLOGS",
      hasDropdown: true,
      dropdownItems: [
        { label: "Blog Grid", link: "/blog-grid" },
        { label: "Blog List", link: "/blog-list" },
        { label: "Blog Details", link: "/blog-details" },
      ]
    },
    {
      label: "PAGES",
      hasDropdown: true,
      dropdownItems: [
        { label: "About Us", link: "/about" },
        { label: "Contact", link: "/contact" },
        { label: "FAQ", link: "/faq" },
        { label: "Terms & Conditions", link: "/terms" },
        { label: "Privacy Policy", link: "/privacy" },
      ]
    },
    {
      label: "DEN",
      hasDropdown: false,
      link: "/den"
    }
  ];

  const handleMouseEnter = (label) => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    
    setActiveDropdown(label);
    setHoveredLink(label);
  };

  const handleMouseLeave = () => {
    // Set a delay before hiding the dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      if (!isDropdownHovered) {
        setActiveDropdown(null);
        setHoveredLink(null);
      }
    }, 300); // 300ms delay
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownHovered(true);
    // Clear the timeout when hovering over dropdown
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownHovered(false);
    // Set a delay before hiding the dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredLink(null);
    }, 200); // 200ms delay
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-white shadow-sm">
      <div className="flex justify-between items-center px-10 py-7">
        {/* Left Section - Navigation Links */}
        <div className="flex-1">
          <ul className="flex gap-8">
            {navigationItems.map((item) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-1 text-gray-800 font-medium cursor-pointer hover:text-gray-600 transition-colors duration-300 py-2">
                  {item.hasDropdown ? (
                    <>
                      <span className="relative group/link">
                        {item.label}
                        {/* Enhanced Animated Underline */}
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 ease-out ${
                          hoveredLink === item.label 
                            ? 'w-full' 
                            : 'w-0'
                        }`}></div>
                        
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-md transition-all duration-300 ${
                          hoveredLink === item.label 
                            ? 'opacity-100 scale-105' 
                            : 'opacity-0 scale-100'
                        }`}></div>
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-all duration-300 ${
                          activeDropdown === item.label ? 'rotate-180 text-blue-600' : 'rotate-0'
                        }`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </>
                  ) : (
                    <Link to={item.link} className="relative group/link">
                      {item.label}
                      {/* Enhanced Animated Underline for non-dropdown links */}
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 ease-out ${
                        hoveredLink === item.label 
                          ? 'w-full' 
                          : 'w-0'
                      }`}></div>
                      
                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-md transition-all duration-300 ${
                        hoveredLink === item.label 
                          ? 'opacity-100 scale-105' 
                          : 'opacity-0 scale-100'
                      }`}></div>
                    </Link>
                  )}
                </div>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div 
                    ref={dropdownRef}
                    className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100/50 opacity-0 animate-in slide-in-from-top-2 duration-300 z-50 overflow-hidden"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="py-3">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.link}
                          className="block px-5 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-300 relative group/item mx-2 rounded-lg"
                          style={{
                            animationDelay: `${index * 75}ms`
                          }}
                        >
                          <span className="relative flex items-center justify-between">
                            {dropdownItem.label}
                            {/* Dropdown item underline animation */}
                            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 ease-out w-0 group-hover/item:w-full"></div>
                            
                            {/* Subtle arrow indicator */}
                            <svg 
                              className="w-4 h-4 text-gray-400 group-hover/item:text-blue-500 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Dropdown footer with subtle border */}
                    <div className="border-t border-gray-100/50 mt-2 pt-2">
                      <div className="px-5 py-2">
                        <span className="text-xs text-gray-400 font-medium">
                          {item.label} Navigation
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Center Section - Brand Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img
              src="https://gearonextjs.vercel.app/images/logo/logo.svg"
              alt="GearO Logo"
              className="h-8"
            />
          </Link>
        </div>

        {/* Right Section - Utility Icons */}
        <div className="flex-1 flex justify-end">
          <ul className="flex gap-6">
            <li className="text-xl text-gray-700 cursor-pointer hover:text-gray-900 transition-colors duration-200 hover:scale-110">
              <CiSearch />
            </li>
            <li className="text-xl text-gray-700 cursor-pointer hover:text-gray-900 transition-colors duration-200 hover:scale-110">
              <Link to="/login">
                <CiUser />
              </Link>
            </li>
            <li className="text-xl text-gray-700 cursor-pointer hover:text-gray-900 transition-colors duration-200 hover:scale-110">
              <CiHeart />
            </li>
            <li className="text-xl text-gray-700 cursor-pointer hover:text-gray-900 transition-colors duration-200 hover:scale-110 relative">
              <CiShoppingCart />
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                1
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
