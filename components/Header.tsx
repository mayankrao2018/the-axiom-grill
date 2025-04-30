'use client';

export default function Header() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text mb-6">
        The Axiom Grill
      </h1>

      {/* ✅ This is the single, final search bar */}
      <input
        type="text"
        placeholder="Search food..."
        className="w-[60%] max-w-xl px-4 py-2 rounded-full shadow-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}
