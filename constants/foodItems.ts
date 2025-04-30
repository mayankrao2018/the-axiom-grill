// data/foodItems.ts
export interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Cheese Burger',
    price: 120,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    category: 'Burgers',
    description: 'Juicy grilled beef patty with melted cheese and fresh lettuce.'
  },
  {
    id: 2,
    name: 'Veg Pizza',
    price: 150,
    image: 'https://foodoncall.co.in/wp-content/uploads/2017/09/italian.jpg',
    category: 'Pizzas',
    description: 'Loaded with bell peppers, onions, olives, and mozzarella.'
  },
  {
    id: 3,
    name: 'Hot Chocolate',
    price: 80,
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    category: 'Beverages',
    description: 'Rich and creamy hot chocolate topped with marshmallows.'
  },
  {
    id: 4,
    name: 'Chicken Manchurian',
    price: 180,
    image: 'https://haribhavanam.com/cdn/shop/files/Chicken_Manchurian_Gravy_809x.webp?v=1733212436',
    category: 'Chinese',
    description: 'Crispy chicken tossed in spicy Indo-Chinese sauce.'
  },
  {
    id: 5,
    name: 'Pancake Stack',
    price: 120,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
    category: 'Breakfast',
    description: 'Fluffy pancakes stacked with maple syrup drizzle.'
  },
  {
    id: 6,
    name: 'Choco Lava Cake',
    price: 100,
    image: 'https://images.herzindagi.info/image/2024/Apr/choco-lava-cake-recipe.jpg',
    category: 'Desserts',
    description: 'Warm chocolate cake with a gooey lava center.'
  },
  {
    id: 7,
    name: 'French Fries',
    price: 90,
    image: 'https://www.emborg.com/app/uploads/2023/07/1200x1200px_French_Fries_Overload_With_Beef.png',
    category: 'Starters',
    description: 'Crispy golden fries with seasoning.'
  },
  {
    id: 8,
    name: 'Mango Smoothie',
    price: 60,
    image: 'https://img.freepik.com/premium-photo/mango-smoothie-with-coconut-flakes-1024jpg_995407-215340.jpg',
    category: 'Beverages',
    description: 'Cool and refreshing mango smoothie.'
  },
  {
    id: 9,
    name: 'Grilled Chicken Sandwich',
    price: 150,
    image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Grilled-Chicken-min.jpg',
    category: 'Hot Deals',
    description: 'Grilled chicken breast with lettuce, tomato, and mayo.'
  },
  {
    id: 10,
    name: 'Ice Cream Sundae',
    price: 120,
    image: 'https://www.stefanofaita.com/wp-content/uploads/2023/02/sundae-a-la-creme-glacee-maison-.jpg',
    category: 'Desserts',
    description: 'Vanilla ice cream with chocolate syrup and a cherry.'
  },
  // Repeat more unique items to reach 40 total...
];

export default foodItems;
