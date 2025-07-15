import { useState } from "react";
import Layout from "../../Layout/Layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from "recharts";

const LineCharts = () => {
  const [chartType, setChartType] = useState("line");
  const [selectedMetric, setSelectedMetric] = useState("all");

  const data = [
    { month: "Jan", revenue: 4000, users: 2400, orders: 1600 },
    { month: "Feb", revenue: 3000, users: 1398, orders: 1200 },
    { month: "Mar", revenue: 2000, users: 9800, orders: 2200 },
    { month: "Apr", revenue: 2780, users: 3908, orders: 1800 },
    { month: "May", revenue: 1890, users: 4800, orders: 2400 },
    { month: "Jun", revenue: 2390, users: 3800, orders: 2000 },
    { month: "Jul", revenue: 3490, users: 4300, orders: 2800 },
    { month: "Aug", revenue: 4200, users: 5200, orders: 3200 },
    { month: "Sep", revenue: 3800, users: 4800, orders: 2900 },
    { month: "Oct", revenue: 4400, users: 5600, orders: 3400 },
    { month: "Nov", revenue: 4800, users: 6000, orders: 3600 },
    { month: "Dec", revenue: 5200, users: 6400, orders: 4000 },
  ];

  const metrics = [
    { key: "revenue", label: "Revenue", color: "#3b82f6", icon: "💰" },
    { key: "users", label: "Users", color: "#10b981", icon: "👥" },
    { key: "orders", label: "Orders", color: "#f59e0b", icon: "📦" },
  ];

  const filteredMetrics =
    selectedMetric === "all"
      ? metrics
      : metrics.filter((metric) => metric.key === selectedMetric);

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-gray-800 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2 mb-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-gray-600">{entry.name}:</span>
              <span className="text-sm font-medium text-gray-800">
                {entry.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Layout>
      <div className="w-full mx-auto p-6">
        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Chart Type Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setChartType("line")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                chartType === "line"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              📈 Line Chart
            </button>
            <button
              onClick={() => setChartType("area")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                chartType === "area"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              📊 Area Chart
            </button>
          </div>

          {/* Metric Filter */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setSelectedMetric("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedMetric === "all"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              🔍 All Metrics
            </button>
            {metrics.map((metric) => (
              <button
                key={metric.key}
                onClick={() => setSelectedMetric(metric.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedMetric === metric.key
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {metric.icon} {metric.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chart Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-6">
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === "line" ? (
                <LineChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  {filteredMetrics.map((metric) => (
                    <Line
                      key={metric.key}
                      type="monotone"
                      dataKey={metric.key}
                      stroke={metric.color}
                      strokeWidth={3}
                      dot={{ fill: metric.color, strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: metric.color, strokeWidth: 2 }}
                      name={metric.label}
                    />
                  ))}
                </LineChart>
              ) : (
                <AreaChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  {filteredMetrics.map((metric, index) => (
                    <Area
                      key={metric.key}
                      type="monotone"
                      dataKey={metric.key}
                      stroke={metric.color}
                      fill={metric.color}
                      fillOpacity={0.6}
                      strokeWidth={2}
                      name={metric.label}
                    />
                  ))}
                </AreaChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric) => {
            const currentValue = data[data.length - 1][metric.key];
            const previousValue = data[data.length - 2][metric.key];
            const change = (
              ((currentValue - previousValue) / previousValue) *
              100
            ).toFixed(1);
            const isPositive = change > 0;

            return (
              <div
                key={metric.key}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{metric.icon}</span>
                    <h3 className="font-semibold text-gray-800">
                      {metric.label}
                    </h3>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      isPositive
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {change}%
                  </div>
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-2xl font-bold text-gray-800">
                    {currentValue.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 mb-1">
                    vs {previousValue.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: metric.color,
                      width: `${Math.min(
                        (currentValue /
                          Math.max(...data.map((d) => d[metric.key]))) *
                          100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default LineCharts;
