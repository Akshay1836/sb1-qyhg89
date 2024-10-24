import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { ChevronDown } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with fresh lettuce, tomatoes, and our special sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomatoes, and basil on our house-made crust",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with seasonal vegetables",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, and house-made dressing",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80"
  }
];

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Cart />
        
        {/* Hero Section */}
        <section id="home" className="pt-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 py-32">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Savoria</h1>
              <p className="text-xl text-gray-300 mb-8">Experience the art of fine dining</p>
              <a href="#menu" className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition">
                <span>View Our Menu</span>
                <ChevronDown />
              </a>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuItems.map((item) => (
                <MenuItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">About Savoria</h2>
              <p className="text-gray-600 mb-8">
                Founded in 2024, Savoria brings together the finest ingredients and culinary expertise
                to create an unforgettable dining experience. Our passionate team of chefs crafts
                each dish with precision and creativity, ensuring that every visit to our restaurant
                is special.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
                  <p className="text-gray-600">We source only the freshest, highest-quality ingredients</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
                  <p className="text-gray-600">Our team of experienced chefs creates culinary masterpieces</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Perfect Ambiance</h3>
                  <p className="text-gray-600">Enjoy your meal in our carefully designed space</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;