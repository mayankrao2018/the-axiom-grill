'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import FoodCard from '@/components/MenuCard';
import CartModal from '@/components/CartModal';
import foodItems from '@/constants/foodItems';
import { useCart } from '@/context/CartContext';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { cart, setCart } = useCart();

  const filteredItems =
    selectedCategory === 'All'
      ? foodItems
      : foodItems.filter(item => item.category === selectedCategory);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main content */}
      <div className="flex-1 pl-52">
        <Header />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 animate-fadeInUp">
          {filteredItems.map(item => (
            <FoodCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <CartModal cart={cart} setCart={setCart} />
    </div>
  );
}
