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
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    category: 'Burgers',
    description: 'Juicy grilled beef patty with melted cheese and fresh lettuce.'
  },
  {
    id: 2,
    name: 'Veg Pizza',
    price: 150,
    image: 'https://images.unsplash.com/photo-1601925178444-1c4a4b3c6d18',
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
    image: 'https://images.unsplash.com/photo-1690062770503-bd52c458bcb2',
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
    image: 'https://images.unsplash.com/photo-1671475706761-9b25e9f53667',
    category: 'Desserts',
    description: 'Warm chocolate cake with a gooey lava center.'
  },
  {
    id: 7,
    name: 'French Fries',
    price: 90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    category: 'Starters',
    description: 'Crispy golden fries with seasoning.'
  },
  {
    id: 8,
    name: 'Mango Smoothie',
    price: 60,
    image: 'https://images.unsplash.com/photo-1615484477864-4f9dc5ef31bc',
    category: 'Beverages',
    description: 'Cool and refreshing mango smoothie.'
  },
  {
    id: 9,
    name: 'Grilled Chicken Sandwich',
    price: 150,
    image: 'https://images.unsplash.com/photo-1655740209850-29598ac246a3',
    category: 'Hot Deals',
    description: 'Grilled chicken breast with lettuce, tomato, and mayo.'
  },
  {
    id: 10,
    name: 'Ice Cream Sundae',
    price: 120,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    category: 'Desserts',
    description: 'Vanilla ice cream with chocolate syrup and a cherry.'
  },
  // Repeat more unique items to reach 40 total...
];

export default foodItems;
