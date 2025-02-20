import React from "react";

function Sidebar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <nav className="space-y-2">
        <button
          className={`w-full text-left px-4 py-2 rounded transition ${
            activeTab === "dashboard" ? "bg-blue-500 text-white" : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={`w-full text-left px-4 py-2 rounded transition ${
            activeTab === "createBlogs" ? "bg-blue-500 text-white" : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("createBlogs")}
        >
          Create Blogs
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
