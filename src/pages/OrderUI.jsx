import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const OrderUI = ({ cart, setCart, orders, setOrders }) => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    mobile: '',
    postal: '',
    city: '',
    payment: 'cod'
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Add order to orders list
    setOrders([...orders, { ...form, items: cart }]);
    setCart([]); // Clear cart after order
    navigate('/orders');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Delivery Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="postal"
          placeholder="Postal Code"
          value={form.postal}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded"
          required
        />
        <div className="mb-4">
          <label className="font-semibold mr-2" htmlFor="payment-cod">Payment Method:</label>
          <label className="font-semibold mr-2 flex items-center" htmlFor="payment-cod">
            <input
              type="radio"
              id="payment-cod"
              name="payment"
              value="cod"
              checked
              readOnly
              className="mr-2"
            />{" "}
            Cash on Delivery (COD)
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded font-bold"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};
OrderUI.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
  setOrders: PropTypes.func.isRequired,
};

export default OrderUI;
