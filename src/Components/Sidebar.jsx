import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiHome,
  FiUsers,
  FiUser,
  FiUserPlus,
  FiUserCheck,
  FiShoppingCart,
  FiPackage,
  FiShoppingBag,
  FiTrendingUp,
  FiPieChart,
  FiActivity,
  FiSettings,
  FiLock,
  FiBell,
} from "react-icons/fi";

const Sidebar = ({ sidebarOpen, activeItem, setActiveItem }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: FiHome,
      path: "/dashboard",
    },
    {
      id: "users",
      label: "Users",
      icon: FiUsers,
      children: [
        { id: "all-users", label: "All Users", icon: FiUser, path: "/users" },
        {
          id: "add-user",
          label: "Add User",
          icon: FiUserPlus,
          path: "/users/add",
        },
        {
          id: "user-roles",
          label: "User Roles",
          icon: FiUserCheck,
          path: "/users/roles",
        },
      ],
    },
    {
      id: "products",
      label: "Products",
      icon: FiShoppingCart,
      children: [
        {
          id: "all-products",
          label: "All Products",
          icon: FiPackage,
          path: "/products",
        },
        {
          id: "add-product",
          label: "Add Product",
          icon: FiShoppingBag,
          path: "/products/add",
        },
      ],
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: FiActivity,
      children: [
        {
          id: "overview",
          label: "Overview",
          icon: FiTrendingUp,
          path: "/analytics",
        },
        {
          id: "reports",
          label: "Reports",
          icon: FiPieChart,
          path: "/analytics/reports",
        },
        {
          id: "activity",
          label: "Activity",
          icon: FiActivity,
          path: "/analytics/activity",
        },
      ],
    },
    {
      id: "settings",
      label: "Settings",
      icon: FiSettings,
      children: [
        { id: "general", label: "General", icon: FiBell, path: "/settings" },
        {
          id: "security",
          label: "Security",
          icon: FiLock,
          path: "/settings/security",
        },
        {
          id: "notifications",
          label: "Notifications",
          icon: FiBell,
          path: "/settings/notifications",
        },
      ],
    },
  ];

  const renderMenuItem = (item, isChild = false) => {
    const Icon = item.icon;
    const isActive = activeItem === item.id;
    const isExpanded = expandedItems[item.id];
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="mb-1">
        <div
          className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ease-in-out group transform hover:scale-105 ${
            isActive
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25"
              : isChild
              ? "text-gray-600 hover:bg-gray-50 hover:text-gray-800 ml-4 hover:shadow-md"
              : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:shadow-lg"
          } ${isChild ? "text-sm" : ""}`}
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
              className={`w-5 h-5 transition-all duration-300 ease-in-out ${
                isActive
                  ? "text-white transform rotate-12"
                  : "text-gray-500 group-hover:text-blue-500 group-hover:scale-110"
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
              className={`transition-all duration-300 ease-in-out ${
                sidebarOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              {isExpanded ? (
                <FiChevronDown className="w-4 h-4 transition-transform duration-300 ease-in-out" />
              ) : (
                <FiChevronRight className="w-4 h-4 transition-transform duration-300 ease-in-out" />
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
    fixed top-0 left-0 z-40 bg-white  transition-all duration-500 ease-in-out
    ${sidebarOpen ? "w-64" : "w-16"}
    h-screen overflow-y-auto scrollbar-hide  mt-16 md:static md:h-[calc(100vh-4rem)]
    ${sidebarOpen ? "block" : "hidden"} md:block
  `}
    >
      <div
        className="p-4 h-full overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <nav className="space-y-2">
          {menuItems.map((item) => renderMenuItem(item))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
