// src/pages/jobs/PostJobPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-dom";
// import { useNavigate } from "react-router-dom";
// import { jobService } from "../../services/jobService";
// import { categoryService } from "../../services/categoryService";
// import { useAuth } from "../../context/AuthContext";

const PostJobPage = () => {
//   const navigate = useNavigate();
  //   const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    deadline: "",
    location: "",
    skills: [],
    attachments: [],
  });

  //   useEffect(() => {
  //     const fetchCategories = async () => {
  //       try {
  //         const response = await categoryService.getCategories();
  //         setCategories(response.data);
  //       } catch (err) {
  //         console.error("Failed to fetch categories:", err);
  //       }
  //     };

  //     fetchCategories();
  //   }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(",").map((skill) => skill.trim());
    setFormData((prev) => ({
      ...prev,
      skills,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  };

  const removeAttachment = (index) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Create FormData object for file uploads
      const jobFormData = new FormData();

      // Add all text fields
      Object.keys(formData).forEach((key) => {
        if (key !== "attachments" && key !== "skills") {
          jobFormData.append(key, formData[key]);
        }
      });

      // Add skills as JSON string
      jobFormData.append("skills", JSON.stringify(formData.skills));

      // Add all attachments
      formData.attachments.forEach((file) => {
        jobFormData.append("attachments", file);
      });

      // Add employer ID
      jobFormData.append("employerId", user.id);

      //   const response = await jobService.createJob(jobFormData);
      //   navigate(`/jobs/${response.data.id}`);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Post a New Job</h1>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 mb-6 rounded-md border border-red-200">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Job Title *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="description">
            Job Description *
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="description"
            name="description"
            rows="6"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="category">
              Category *
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="budget">
              Budget (USD) *
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="budget"
              name="budget"
              type="number"
              min="1"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="deadline">
              Deadline
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="deadline"
              name="deadline"
              type="date"
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="location">
              Location
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="skills">
            Required Skills (comma-separated)
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="skills"
            name="skills"
            type="text"
            placeholder="e.g. JavaScript, React, Node.js"
            value={formData.skills.join(", ")}
            onChange={handleSkillsChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="attachments">
            Attachments
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="attachments"
            name="attachments"
            type="file"
            multiple
            onChange={handleFileChange}
          />

          {formData.attachments.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-gray-600 mb-2">Selected files:</p>
              <ul className="list-disc pl-5">
                {formData.attachments.map((file, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>{file.name}</span>
                    <button
                      type="button"
                      className="text-red-600 hover:text-red-800"
                      onClick={() => removeAttachment(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md mr-2 hover:bg-gray-50"
            // onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post Job"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJobPage;
