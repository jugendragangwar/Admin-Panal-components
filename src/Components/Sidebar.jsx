import { useState } from "react";
import { menuItems } from "../db/data";
import { FiChevronDown, FiChevronRight, FiLogOut } from "react-icons/fi";
import lighting from "../assets/lighting.png";

const Sidebar = ({ sidebarOpen, activeItem, setActiveItem }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  const renderMenuItem = (item, isChild = false) => {
    const Icon = item.icon;
    const isActive = activeItem === item.id;
    const isExpanded = expandedItems[item.id];
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="mb-1">
        <div
          className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer group ${
            isActive
              ? "bg-blue-600 text-white"
              : isChild
              ? "text-gray-600 hover:bg-gray-50 hover:text-gray-800 ml-2"
              : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600"
          } ${isChild ? "text-sm" : ""}
          ${isChild && isActive ? "ml-2" : ""}
          `}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id);
            } else {
              handleItemClick(item.id);
            }
          }}
        >
          <div className="flex items-center space-x-3">
            <Icon
              className={`w-5 h-5  ${
                isActive
                  ? "text-white transform"
                  : "text-gray-500 group-hover:text-blue-500"
              }`}
            />
            {sidebarOpen && (
              <span
                className={`font-medium transition-all duration-300 ease-in-out ${
                  sidebarOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
              >
                {item.label}
              </span>
            )}
          </div>

          {hasChildren && sidebarOpen && (
            <div
              className={`transition-all duration-300 ease-in-out  ${
                sidebarOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              {isExpanded ? (
                <FiChevronDown className="w-4 h-4" />
              ) : (
                <FiChevronRight className="w-4 h-4" />
              )}
            </div>
          )}
        </div>

        {hasChildren && isExpanded && sidebarOpen && (
          <div className="mt-2 space-y-1 animate-in slide-in-from-top-1 duration-300">
            {item.children.map((child) => renderMenuItem(child, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`
        fixed top-0 left-0 z-40 bg-white transition-all duration-500 ease-in-out mt-16 overflow-y-auto scrollbar-hide flex flex-col justify-between
        min-h-[89vh] md:static md:block md:h-64
        ${sidebarOpen ? "w-68" : "w-22 hidden"}
      `}
    >
      {/* Top menu items */}
      <div className="p-4">
        <nav className="space-y-2 overflow-y-auto hide-scrollbar">
          {menuItems.map((item) => renderMenuItem(item))}
        </nav>
      </div>

      {/* Bottom image + logout */}
      <div className="p-4 mt-auto">
        {/* Lighting Image */}
        <div className="flex justify-center">
          <img
            src={lighting}
            alt="Lighting"
            className="transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
