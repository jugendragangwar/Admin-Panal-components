import {
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

import {
  AiOutlineStock,
  AiOutlineAreaChart,
  AiOutlineBarChart,
} from "react-icons/ai";

import { BiColorFill } from "react-icons/bi";

export const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: FiHome,
    path: "/dashboard",
  },
  {
    id: "charts",
    label: "Charts",
    icon: FiPieChart,
    path: "/charts",
    children: [
      { id: "line", label: "Line", icon: AiOutlineStock, path: "/charts/line" },
      {
        id: "area",
        label: "Area",
        icon: AiOutlineAreaChart,
        path: "/charts/line",
      },
      {
        id: "bar",
        label: "Bar",
        icon: AiOutlineBarChart,
        path: "/charts/bar",
      },
      {
        id: "pie",
        label: "Pie",
        icon: FiPieChart,
        path: "/charts/pie",
      },
      {
        id: "color-mapping",
        label: "Color Mapping",
        icon: BiColorFill,
        path: "/charts/color-mapping",
      },
    ],
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
        path: "/analytics/overview",
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
      {
        id: "general",
        label: "General",
        icon: FiSettings,
        path: "/settings/general",
      },
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
export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];

export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'England',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'India',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};