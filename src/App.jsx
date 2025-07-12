import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Layout>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Admin Panel
        </h2>
        <p className="text-gray-600 text-lg">
          This is your dashboard content area
        </p>
      </div>
    </Layout>
  );
};

export default App;
