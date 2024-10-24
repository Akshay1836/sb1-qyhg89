import React from 'react';
import { ShoppingCart, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function MenuItem({ id, name, description, price, image }: MenuItemProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, name, price, quantity: 1 },
    });
    dispatch({ type: 'TOGGLE_CART' });
  };

  const handleBuyNow = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, name, price, quantity: 1 },
    });
    alert('Proceeding to checkout...');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-orange-500">${price.toFixed(2)}</span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition"
          >
            <CreditCard size={18} />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}