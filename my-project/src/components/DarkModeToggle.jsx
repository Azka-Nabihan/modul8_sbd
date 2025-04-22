export default function DarkModeToggle({ isDarkMode, onToggle }) {
  return (
    <div
      onClick={() => onToggle(!isDarkMode)}
      className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300`}
      aria-label="Toggle Dark Mode"
    >
      <div
        className={`w-4 h-4 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
}