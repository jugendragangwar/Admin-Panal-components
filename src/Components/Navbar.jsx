import React, { useState } from 'react';
import { FiBell, FiUser, FiMenu, FiX, FiSearch, FiGlobe, FiSettings, FiLogOut, FiChevronDown } from "react-icons/fi";

const Navbar = ({ sidebarOpen, setSidebarOpen, title = "Admin Panel" }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ZH', name: '中文', flag: '🇨🇳' },
    { code: 'JA', name: '日本語', flag: '🇯🇵' }
  ];

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang.code);
    setLanguageOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/30 border-b border-white/20">
      <div className="max-w-full px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 transition-all duration-300"
              aria-label="Toggle Sidebar"
            >
              {sidebarOpen ? (
                <FiX className="w-5 h-5 text-slate-700" />
              ) : (
                <FiMenu className="w-5 h-5 text-slate-700" />
              )}
            </button>
            <h1 className="text-blue-900 sm:text-lg md:text-xl font-bold sm:max-w-none">
              {title}
            </h1>
          </div>

          {/* Center Section - Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full transition-all duration-300">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className={`w-5 h-5 transition-colors duration-300 ${searchFocused ? 'text-blue-500' : 'text-slate-500'}`} />
              </div>
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl backdrop-blur-sm bg-white/20 border border-blue-400/20 focus:border-blue-400/50 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-slate-700 placeholder-slate-500"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:shadow-lg"
              >
                <FiGlobe className="w-4 h-4 text-slate-700" />
                <span className="text-sm font-medium text-slate-700">{selectedLanguage}</span>
                <FiChevronDown className={`w-4 h-4 text-slate-700 transition-transform duration-300 ${languageOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown */}
              {languageOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl backdrop-blur-xl bg-white/30 border border-white/20 shadow-xl overflow-hidden transform transition-all duration-300 animate-in slide-in-from-top-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang)}
                      className="w-full px-4 py-3 text-left hover:bg-white/20 transition-all duration-200 flex items-center space-x-3"
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <div>
                        <div className="text-sm font-medium text-slate-700">{lang.name}</div>
                        <div className="text-xs text-slate-500">{lang.code}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notification Button */}
            <button className="p-2 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:shadow-lg relative group">
              <FiBell className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center space-x-2 p-2 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:shadow-lg"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-lg">
                  <FiUser className="w-4 h-4" />
                </div>
              </button>

              {/* Profile Dropdown Menu */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl backdrop-blur-xl bg-white/30 border border-white/20 shadow-xl overflow-hidden transform transition-all duration-300 animate-in slide-in-from-top-2">
                  <div className="px-4 py-3 border-b border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-lg">
                        JD
                      </div>
                      <div>
                        <div className="font-medium text-slate-700">John Doe</div>
                        <div className="text-sm text-slate-500">john@example.com</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <button className="w-full px-4 py-2 text-left hover:bg-white/20 transition-all duration-200 flex items-center space-x-3 group">
                      <FiUser className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors duration-200" />
                      <span className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors duration-200">Profile</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left hover:bg-white/20 transition-all duration-200 flex items-center space-x-3 group">
                      <FiSettings className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors duration-200" />
                      <span className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors duration-200">Settings</span>
                    </button>
                    <div className="border-t border-white/20 my-2"></div>
                    <button className="w-full px-4 py-2 text-left hover:bg-red-500/20 transition-all duration-200 flex items-center space-x-3 group">
                      <FiLogOut className="w-4 h-4 text-slate-600 group-hover:text-red-600 transition-colors duration-200" />
                      <span className="text-sm text-slate-700 group-hover:text-red-600 transition-colors duration-200">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(profileOpen || languageOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setProfileOpen(false);
            setLanguageOpen(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;