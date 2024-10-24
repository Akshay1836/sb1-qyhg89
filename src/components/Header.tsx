import React from 'react';
import { Menu, ShoppingCart, Home, Info, UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, dispatch } = useCart();
  const cartItemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-800">Savoria</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home" icon={<Home size={18} />} text="Home" />
            <NavLink href="#menu" icon={<Menu size={18} />} text="Menu" />
            <NavLink href="#about" icon={<Info size={18} />} text="About" />
            <button 
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="flex items-center space-x-1 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
            >
              <ShoppingCart size={18} />
              <span>Cart ({cartItemCount})</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#home" text="Home" />
              <MobileNavLink href="#menu" text="Menu" />
              <MobileNavLink href="#about" text="About" />
              <button 
                onClick={() => {
                  dispatch({ type: 'TOGGLE_CART' });
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-center space-x-1 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
              >
                <ShoppingCart size={18} />
                <span>Cart ({cartItemCount})</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const NavLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <a
    href={href}
    className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 transition"
  >
    {icon}
    <span>{text}</span>
  </a>
);

const MobileNavLink = ({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    className="block text-center text-gray-600 hover:text-orange-500 transition"
  >
    {text}
  </a>
);