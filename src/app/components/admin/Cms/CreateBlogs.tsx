"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../../../firebaseconfig"; // Ensure this path matches your Firebase config

const db = getFirestore(app);
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function CreateBlogs() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    banner: null as File | null,
    bannerURL: "",
    author: "",
    category: "",
    content: "",
  });

  const [uploading, setUploading] = useState(false);

  const categoryOptions = [
    "Technology",
    "Health",
    "Finance",
    "Travel",
    "Lifestyle",
    "Education",
    "Marketing",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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

  const uploadImageToImgBB = async () => {
    if (formData.banner) {
      setUploading(true);
      const imgData = new FormData();
      imgData.append("image", formData.banner);

      try {
        const response = await fetch(
          "https://api.imgbb.com/1/upload?key=a8f75308e72dedd2544b69ee4a56bd60",
          {
            method: "POST",
            body: imgData,
          }
        );

        const data = await response.json();
        if (data.success) {
          setFormData((prev) => ({ ...prev, bannerURL: data.data.url }));
          alert("Image uploaded successfully!");
        } else {
          throw new Error("Failed to upload image to ImgBB");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image.");
      } finally {
        setUploading(false);
      }
    } else {
      alert("Please select an image first.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.bannerURL) {
      alert("Please upload the banner image before publishing.");
      return;
    }

    try {
      let blogData = { ...formData };
      delete blogData.banner;
      blogData = { ...blogData, category: [blogData.category] };
      await addDoc(collection(db, "blogs"), blogData);

      alert("Blog published successfully!");
    } catch (error) {
      console.error("Error publishing blog:", error);
      alert("Failed to publish blog.");
    }
  };

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Blog Title */}
        <div>
          <label className="block font-semibold">Blog Title</label>
          <input
            type="text"
            name="title"
            className="w-full rounded border p-2"
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
            className="w-full rounded border p-2"
            value={formData.slug}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Banner Upload */}
        <div>
          <label className="block font-semibold">Banner Image</label>
          <input
            type="file"
            className="w-full rounded border p-2"
            onChange={handleFileChange}
          />
          {formData.banner && (
            <button
              type="button"
              onClick={uploadImageToImgBB}
              disabled={uploading}
              className="mt-2 rounded bg-green-500 px-4 py-2 text-white">
              {uploading ? "Uploading..." : "Upload Image"}
            </button>
          )}
          {formData.bannerURL && (
            <p className="mt-2 text-sm text-green-600">
              Image uploaded! URL: {formData.bannerURL}
            </p>
          )}
        </div>

        {/* Author Name */}
        <div>
          <label className="block font-semibold">Author Name</label>
          <input
            type="text"
            name="author"
            className="w-full rounded border p-2"
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
            className="w-full rounded border p-2"
            value={formData.category}
            onChange={handleInputChange}
            required>
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
          <ReactQuill
            value={formData.content}
            onChange={handleEditorChange}
            className="bg-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded bg-blue-500 py-2 text-white">
          Publish Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlogs;
