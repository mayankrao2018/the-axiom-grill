'use client';

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = ['All', 'Hot Deals', 'Burgers', 'Breakfast', 'Desserts', 'Chinese'];

export default function Sidebar({ selectedCategory, setSelectedCategory }: SidebarProps) {
  return (
    <div className="fixed top-0 left-0 h-screen w-52 bg-white dark:bg-gray-900 p-6 shadow-lg z-30 border-r border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white tracking-wide">
        Categories
      </h2>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-4 py-2 rounded-full font-semibold transition duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white dark:from-yellow-500 dark:to-pink-500 shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
