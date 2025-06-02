import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', 'Kharif', 'Rabi', 'Zaid'];

const CategoryFilter = ({ selected, setSelected }) => (
  <div className="flex justify-center  bg-white shadow py-2">
    {categories.map(cat => (
      <button
        key={cat}
        className={`mx-2 px-4 py-2  font-semibold 
          ${selected === cat ? ' text-black border-b-2 border-black' : 'bg-gray-100 text-gray-700 border-gray-300'}
          transition`}
        onClick={() => setSelected(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
);
CategoryFilter.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default CategoryFilter;