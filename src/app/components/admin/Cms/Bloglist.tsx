"use client";

import { useState } from "react";

const initialPosts = [
  {
    id: 1,
    title: "My Awesome Post",
    author: "Edo Masaru",
    category: "Social Marketing",
    date: "2025-02-20",
    status: "Scheduled",
  },
  {
    id: 2,
    title: "Et qui et impedit est ut ratione harum rerum.",
    author: "Jane Doe",
    category: "Web Programming",
    date: "2025-02-18",
    status: "Draft",
  },
  {
    id: 3,
    title: "Id ut exercitationem dolor molestiae similique.",
    author: "John Doe",
    category: "Internet",
    date: "2025-02-17",
    status: "Published",
  },
];

export default function Bloglist() {
  const [posts, setPosts] = useState(initialPosts);

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const addPost = () => {
    const newPost = {
      id: posts.length + 1,
      title: "New Blog Post",
      author: "Edo Masaru",
      category: "General",
      date: new Date().toISOString().split("T")[0],
      status: "Draft",
    };

    setPosts([...posts, newPost]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="rounded-xl bg-white p-4 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Blog CMS</h1>
        <button onClick={addPost} className="mb-4 bg-green-500 px-4 py-2 text-white rounded">
          + Add New Post
        </button>

        {/* Scrollable Table Wrapper */}
        <div className="overflow-auto">
          <table className="min-w-[1200px] w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Title</th>
                <th className="p-2">Author</th>
                <th className="p-2">Category</th>
                <th className="p-2">Date</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b">
                  <td className="p-2">{post.title}</td>
                  <td className="p-2">{post.author}</td>
                  <td className="p-2">{post.category}</td>
                  <td className="p-2">{post.date}</td>
                  <td className="p-2">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        post.status === "Published"
                          ? "bg-green-200 text-green-800"
                          : post.status === "Draft"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-blue-200 text-blue-800"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="space-x-2 p-2">
                    <button className="bg-blue-500 px-3 py-1 text-white rounded">Edit</button>
                    <button
                      className="bg-red-500 px-3 py-1 text-white rounded"
                      onClick={() => deletePost(post.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
