import { FiBell, FiUser, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ sidebarOpen, setSidebarOpen, title = "Admin Panel" }) => {
  return (
    <nav className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition duration-200"
              aria-label="Toggle Sidebar"
            >
              {sidebarOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5" />
              )}
            </button>
            <h1 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent truncate max-w-[150px] sm:max-w-none">
              {title}
            </h1>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Notification Button */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition duration-200 relative"
              aria-label="Notifications"
            >
              <FiBell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>

            {/* User Icon */}
            <div className="relative">
              <button className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200">
                <FiUser className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
