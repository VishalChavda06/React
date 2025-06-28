import { useState } from 'react'
import './App.css'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    image: 'https://i.pinimg.com/736x/3c/31/af/3c31af8599187ea764c8aad635edeb64.jpg',
    title: 'Awesome Headphones',
    description:
      'Experience high-quality sound with noise cancellation and long battery life. Perfect for music lovers!',
    price: '$99.99',
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/00/22/a9/0022a9eb283ba672c92cdc2db32de556.jpg',
    title: 'Smart Watch',
    description: 'Track your fitness and stay connected with this stylish smart watch.',
    price: '$149.99',
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/736x/3b/65/04/3b65042b9ca350c1128bde0ebb3a1b11.jpg',
    title: 'Wireless Speaker',
    description: 'Portable wireless speaker with deep bass and long battery life.',
    price: '$59.99',
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/736x/5c/50/80/5c508012bce89b5e50f6b1f45facaea7.jpg',
    title: 'VR Headset',
    description: 'Immerse yourself in virtual reality with this comfortable VR headset.',
    price: '$199.99',
  },
  {
    id: 5,
    image: 'https://i.pinimg.com/736x/25/c1/95/25c1950a270103a278efd4798a90e85c.jpg',
    title: 'Bluetooth Earbuds',
    description: 'Compact and comfortable earbuds with crystal clear sound and long battery life.',
    price: '$79.99',
  },
  {
    id: 6,
    image: 'https://i.pinimg.com/736x/15/79/8f/15798f88d9109cf4e1429185352a9acf.jpg',
    title: 'Fitness Tracker',
    description: 'Monitor your health and activity with this sleek and waterproof fitness tracker.',
    price: '$39.99',
  },
]

function ProductCard({ product }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  return (
    <Card className="w-80 bg-zinc-900/80 border-zinc-700 shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center backdrop-blur-md group">
      <CardHeader className="flex flex-col items-center">
        <div className="w-64 h-40 rounded-lg overflow-hidden mb-4 relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent group-hover:from-pink-600/40 group-hover:to-transparent transition-colors duration-500" />
        </div>
        <CardTitle className="text-xl font-semibold text-white text-center mb-2">
          {product.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <p className="text-zinc-300 text-center mb-2 min-h-[48px]">{product.description}</p>
        <div className="text-lg font-bold text-yellow-400 mb-2">{product.price}</div>
        <div className="flex space-x-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Button
              key={star}
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="p-0 h-8 w-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill={(hover || rating) >= star ? '#facc15' : '#e5e7eb'}
                className="w-7 h-7 transition-colors duration-200 cursor-pointer"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            </Button>
          ))}
        </div>
        {rating > 0 && (
          <div className="text-base text-white mt-2">
            You rated this {rating} star{rating > 1 ? 's' : ''}!
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 flex flex-col items-center py-10 px-2">
      <h1 className="text-3xl font-bold text-white mb-10 tracking-wide drop-shadow-lg">
        Customer Reviews
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
