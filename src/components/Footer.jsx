
import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 pt-10 pb-4 mt-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div>
        <h2 className="text-xl font-bold mb-2">Farmer E-cart</h2>
        <p className="text-sm mb-3">
          Empowering farmers and buyers with a seamless online marketplace for agricultural products.
        </p>
        <div className="flex space-x-3 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div>
        <h3 className="font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-1 text-sm">
          <li><a href="/home" className="hover:underline">Home</a></li>
          <li><a href="/cart" className="hover:underline">Cart</a></li>
          <li><a href="/orders" className="hover:underline">Orders</a></li>
          <li><a href="/login" className="hover:underline">Login</a></li>
        </ul>
      </div>
      {/* Customer Service */}
      <div>
        <h3 className="font-semibold mb-2">Customer Service</h3>
        <ul className="space-y-1 text-sm">
          <li>
            <button
              type="button"
              className="hover:underline text-left bg-transparent border-none p-0 m-0 text-sm cursor-pointer"
              aria-label="Help Center"
            >
              Help Center
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:underline text-left bg-transparent border-none p-0 m-0 text-sm cursor-pointer"
              aria-label="Returns"
            >
              Returns
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:underline text-left bg-transparent border-none p-0 m-0 text-sm cursor-pointer"
              aria-label="Shipping Info"
            >
              Shipping Info
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:underline text-left bg-transparent border-none p-0 m-0 text-sm cursor-pointer"
              aria-label="Terms & Conditions"
            >
              Terms & Conditions
            </button>
          </li>
        </ul>
      </div>
      {/* Contact */}
      <div>
        <h3 className="font-semibold mb-2">Contact Us</h3>
        <p className="text-sm">Email: support@farmerecart.com</p>
        <p className="text-sm">Phone: +91 12345 67890</p>
        <p className="text-sm mt-2">Address: 123, Agri Street, India</p>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
      © {new Date().getFullYear()} Farmer E-cart. All rights reserved.
    </div>
  </footer>
);

export default Footer;