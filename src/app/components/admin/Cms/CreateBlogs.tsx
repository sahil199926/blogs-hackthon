"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function CreateBlogs() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    banner: null as File | null,
    author: "",
    category: "",
    content: "",
  });

  const categoryOptions = [
    "Technology",
    "Health",
    "Finance",
    "Travel",
    "Lifestyle",
    "Education",
    "Marketing",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      banner: file,
    }));
  };

  const handleEditorChange = (content: string) => {
    setFormData((prev) => ({
      ...prev,
      content: content,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Blog Submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Blog Title */}
        <div>
          <label className="block font-semibold">Blog Title</label>
          <input
            type="text"
            name="title"
            className="w-full border p-2 rounded"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block font-semibold">Slug</label>
          <input
            type="text"
            name="slug"
            className="w-full border p-2 rounded"
            value={formData.slug}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Banner Upload */}
        <div>
          <label className="block font-semibold">Banner Image</label>
          <input type="file" className="w-full border p-2 rounded" onChange={handleFileChange} />
        </div>

        {/* Author Name */}
        <div>
          <label className="block font-semibold">Author Name</label>
          <input
            type="text"
            name="author"
            className="w-full border p-2 rounded"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block font-semibold">Category</label>
          <select
            name="category"
            className="w-full border p-2 rounded"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Rich Text Editor */}
        <div>
          <label className="block font-semibold">Content</label>
          <ReactQuill value={formData.content} onChange={handleEditorChange} className="bg-white" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Publish Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlogs;
