import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCart(cart =>
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  if (!cart.length) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-2xl font-bold">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className='flex justify-center mt-10 flex-wrap m-3'>
      {cart.map((item) => (
        <div key={item.id} className='w-72 border flex m-3 rounded shadow bg-white'>
          <div className='h-32 w-32 border-0 m-5 flex items-center justify-center'>
            <img src={item.image} alt={item.name} className="object-cover w-full h-full rounded" />
          </div>
          <div className='border-0 mt-1 flex flex-col justify-between flex-1'>
            <div className='flex justify-between w-full mr-1'>
              <div className='mx-2 mt-3'>
                <div className='font-bold'>{item.name}</div>
                <div className='text-sm text-gray-600'>{item.description}</div>
                <div className='font-semibold mt-2'>₹{item.price}</div>
              </div>
              <div className='mx-1 my-3 text-xs text-gray-500'>Delivery by Monday June 2</div>
            </div>
            <div className='flex justify-between items-center mr-1 mb-1 w-full'>
              <div className='flex items-center'>
                <div className="flex items-center gap-2 ml-5 mr-3">
                  <button
                    className="px-2 py-1 bg-black text-white rounded"
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity <= 1}
                  >-</button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-black text-white rounded"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >+</button>
                </div>
                <button
                  className='bg-gray-200 font-bold h-9 mx-2 px-3 border text-black rounded hover:bg-red-100'
                  onClick={() => handleRemove(item.id)}
                >
                  Remove Item
                </button>
              </div>
              <button
                className='bg-green-600 font-bold h-9 mx-1 mr-1 px-3 border text-white rounded hover:bg-green-700'
                onClick={() => navigate('/order')}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      quantity: PropTypes.number,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;