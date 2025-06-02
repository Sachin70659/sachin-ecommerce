import React from 'react';
import itemsData from '../assets/itemsData.json';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Container = ({ search = '', cart, setCart, category = 'All' }) => {
  const navigate = useNavigate();

  // Filter items by search and category
  const filteredItems = itemsData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === 'All' || item.category === category)
  );

  const handleAddToCart = (item) => {
    const exists = cart.find(cartItem => cartItem.id === item.id);
    if (exists) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleBuyNow = (item) => {
    handleAddToCart(item);
    navigate('/order');
  };

  return (
    <div className="mt-10 flex flex-wrap gap-15 justify-center mx-40 ">
      {filteredItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className="mb-8 h-102 w-75 cursor-pointer shadow-lg outline-none text-left"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <div className="h-65 w-65 bg-grey-600 m-auto mt-4">
            <img
              src={item.image}
              alt={item.name}
              className="h-65 object-contain"
            />
          </div>
          <div className="flex flex-col ml-5 mt-3 font-bold">
            <span>{item.category}</span>
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
          <div className="flex justify-between items-center px-5 mt-1.5">
            <button
              className="bg-blue-600 text-white font-bold px-2 py-1 hover:bg-blue-800 transition"
              onClick={e => { e.stopPropagation(); handleAddToCart(item); }}
            >
              Add To Cart
            </button>
            <button
              className="bg-blue-600 text-white font-bold px-2 py-1 hover:bg-blue-800 transition"
              onClick={e => { e.stopPropagation(); handleBuyNow(item); }}
            >
              Buy Now
            </button>
          </div>
        </button>
      ))}
    </div>
  );
};
Container.propTypes = {
  search: PropTypes.string,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  category: PropTypes.string
};

export default Container;