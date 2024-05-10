import React, { useState } from 'react';
import Filter from './Filter';
import Item from './Item';

const ShoppingList = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); 
  };

  const filteredItems = selectedCategory === 'All'
    ? items 
    : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList"> 
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      /> 
      <ul className="Items"> 
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
