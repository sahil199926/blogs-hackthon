"use client";

import { useEffect, useState } from "react";
import { db } from "../../../../firebaseconfig"; // Adjust path if needed
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

interface Post {
  id: string;
  title: string;
  author: string;
  category: string;
  date: string;
  status: string;
}

export default function Bloglist() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from Firestore
  const fetchPosts = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blogPosts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Post[];
    console.log(blogPosts, "sss");
    setPosts(blogPosts);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Delete post from Firestore
  const deletePost = async (id: string) => {
    await deleteDoc(doc(db, "blogs", id));
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="rounded-xl bg-white p-4 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Blog CMS</h1>

        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="overflow-auto">
            <table className="w-full min-w-[1200px] border-collapse">
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
                    <td className="p-2">
                      {new Date(post.date.seconds * 1000).toLocaleDateString()}
                    </td>

                    <td className="p-2">
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          post.status === "Published"
                            ? "bg-green-200 text-green-800"
                            : post.status === "Draft"
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-blue-200 text-blue-800"
                        }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="space-x-2 p-2">
                      <button className="rounded bg-blue-500 px-3 py-1 text-white">
                        Edit
                      </button>
                      <button
                        className="rounded bg-red-500 px-3 py-1 text-white"
                        onClick={() => deletePost(post.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
