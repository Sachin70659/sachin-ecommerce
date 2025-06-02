import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import CategoryFilter from '../components/CategoryFilter';

const Home = ({ search, cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <CategoryFilter selected={selectedCategory} setSelected={setSelectedCategory} />
      <Container
        search={search}
        cart={cart}
        setCart={setCart}
        category={selectedCategory}
      />
    </>
  );
};
Home.propTypes = {
  search: PropTypes.string,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Home;