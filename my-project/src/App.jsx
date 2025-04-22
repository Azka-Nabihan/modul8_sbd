import { useState, useEffect } from "react";
import useDarkMode from "./hooks/useDarkMode"; // Tambahkan impor untuk useDarkMode
import DarkModeToggle from "./components/DarkModeToggle"; // Tambahkan impor untuk DarkModeToggle


export default function App() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1000); // 1 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-black">
        <div className="flex items-center">
          <img src="/assets/Logo.svg" alt="Netlab Logo" className="h-8 mr-2" />
          <span className="text-lg font-bold">Network Laboratory</span>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-8 text- font-medium">
          <li>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#SBD"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              SBD
            </a>
          </li>
          <li>
            <a
              href="#DMJ"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              DMJ
            </a>
          </li>
          <li>
            <a
              href="#OS"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              OS
            </a>
          </li>
          <li>
            <a
              href="#NTLAB"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              NTLAB
            </a>
          </li>
        </ul>
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={setIsDarkMode} />
      </nav>

      {/* Main Content */}
      <main
        className={`flex flex-col items-center justify-center bg-white dark:bg-zinc-900 transition-all duration-500 ${
          isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        {/* SBD*/}
        <div
          id="SBD"
          className="min-h-screen flex items-center justify-center max-w-7xl mx-auto"
        >
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <img
              src="/assets/SBDLogo.svg"
              alt="Netlab Logo"
              className="h-40 m-5 hover:scale-110 transition-transform "
            />

            <div className="flex flex-col items-start">
              {/* NETLAB SBD */}
              <h1 className="p-3 text-4xl font-bold mb-2">
                NETLAB{" "}
                <span className="rounded-lg bg-black dark:bg-transparent text-white px-2">
                  SBD
                </span>
              </h1>

              {/* Text Content */}
              <div className="rounded-lg border-2 border-black p-3 dark:bg-zinc-800 dark:border-0">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas porttitor congue massa. Fusce posuere, magna sed
                  pulvinar ultricies, purus lectus malesuada libero, sit amet
                  commodo magna eros quis urna. Nunc viverra imperdiet enim.
                  Fusce est. Vivamus a tellus.
                </p>
                <p className="">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Proin pharetra nonummy
                  pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec
                  laoreet nonummy augue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DMJ*/}
        <div
          id="DMJ"
          className="min-h-screen flex items-center justify-center max-w-7xl mx-auto"
        >
          <div className="flex flex-row-reverse items-center space-x-2">
            {/* Logo */}
            <img
              src="/assets/DMJLogo.svg"
              alt="Netlab Logo"
              className="h-40 m-5 hover:scale-110 transition-transform "
            />

            <div className="flex flex-col items-start">
              {/* NETLAB SBD */}
              <h1 className="p-3 text-4xl font-bold mb-2">
                <span className="rounded-lg bg-black dark:bg-transparent text-white px-2">
                  NETLAB
                </span>{" "}
                DMJ
              </h1>

              {/* Text Content */}
              <div className="rounded-lg border-2 border-black p-3 dark:bg-zinc-800 dark:border-0">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas porttitor congue massa. Fusce posuere, magna sed
                  pulvinar ultricies, purus lectus malesuada libero, sit amet
                  commodo magna eros quis urna. Nunc viverra imperdiet enim.
                  Fusce est. Vivamus a tellus.
                </p>
                <p className="">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Proin pharetra nonummy
                  pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec
                  laoreet nonummy augue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OS*/}
        <div
          id="OS"
          className="min-h-screen flex items-center justify-center max-w-7xl mx-auto"
        >
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <img
              src="/assets/OSLogo.svg"
              alt="Netlab Logo"
              className="h-40 m-5 hover:scale-110 transition-transform "
            />

            <div className="flex flex-col items-start">
              {/* NETLAB SBD */}
              <h1 className="p-3 text-4xl font-bold mb-2">
                NETLAB{" "}
                <span className="rounded-lg bg-black dark:bg-transparent text-white px-2">
                  OS
                </span>
              </h1>

              {/* Text Content */}
              <div className="rounded-lg border-2 border-black p-3 dark:bg-zinc-800 dark:border-0">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas porttitor congue massa. Fusce posuere, magna sed
                  pulvinar ultricies, purus lectus malesuada libero, sit amet
                  commodo magna eros quis urna. Nunc viverra imperdiet enim.
                  Fusce est. Vivamus a tellus.
                </p>
                <p className="">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Proin pharetra nonummy
                  pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec
                  laoreet nonummy augue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OS*/}
        <div
          id="OS"
          className="min-h-screen flex items-center justify-center max-w-7xl mx-auto"
        >
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <img
              src="/assets/OSLogo.svg"
              alt="Netlab Logo"
              className="h-40 m-5 hover:scale-110 transition-transform "
            />

            <div className="flex flex-col items-start">
              {/* NETLAB SBD */}
              <h1 className="p-3 text-4xl font-bold mb-2">
                NETLAB{" "}
                <span className="rounded-lg bg-black dark:bg-transparent text-white px-2">
                  OS
                </span>
              </h1>

              {/* Text Content */}
              <div className="rounded-lg border-2 border-black p-3 dark:bg-zinc-800 dark:border-0">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas porttitor congue massa. Fusce posuere, magna sed
                  pulvinar ultricies, purus lectus malesuada libero, sit amet
                  commodo magna eros quis urna. Nunc viverra imperdiet enim.
                  Fusce est. Vivamus a tellus.
                </p>
                <p className="">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Proin pharetra nonummy
                  pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec
                  laoreet nonummy augue.
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </main>
    </div>
  );
}
