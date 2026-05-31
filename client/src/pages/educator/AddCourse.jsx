import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [image, setImage] = useState(null);

  const { addCourse } = useContext(AppContext);

  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    category: "Development",
    level: "Beginner",
  });

  // HANDLE SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourse = {
      _id: Date.now(),

      courseTitle: courseData.title,

      courseDescription: courseData.description,

      coursePrice: Number(courseData.price),

      discount: Number(courseData.discount),

      courseThumbnail: image
        ? URL.createObjectURL(image)
        : "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

      educator: "sudhanshu-id",

      educatorName: "Sudhanshu Thakur",
      enrolledStudents: [],

      courseRatings: [],

      category: courseData.category,

      level: courseData.level,

      courseContent: [
        {
          chapterTitle: "Introduction",
          chapterContent: [
            {
              lectureTitle: "Welcome Lecture",
              lectureDuration: 10,
              lectureUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
              isPreviewFree: true,
            },
          ],
        },
      ],

      createdAt: Date.now(),
    };

    addCourse(newCourse);

    navigate("/course-list");
  };

  return (
    <div className="flex flex-col items-start justify-between md:p-8 p-4 pt-8 pb-0 m-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Add New Course
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-3xl w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
      >
        {/* Thumbnail Upload */}

        <div className="flex items-center gap-6">
          <label htmlFor="thumbnailImage" className="group">
            <div className="w-32 h-32 border-2 border-dashed border-blue-300 rounded-xl flex items-center justify-center overflow-hidden bg-blue-50 cursor-pointer hover:bg-blue-100 transition">
              <img
                src={
                  image ? URL.createObjectURL(image) : assets.file_upload_icon
                }
                alt=""
                className={`${image ? "w-full h-full object-cover" : "w-14"}`}
              />
            </div>

            <input
              type="file"
              id="thumbnailImage"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>

          <div>
            <h2 className="text-lg font-medium text-gray-800">
              Upload Course Thumbnail
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Recommended size: 1280 × 720
            </p>
          </div>
        </div>

        {/* Course Title */}

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Course Title</label>

          <input
            type="text"
            placeholder="Enter course title"
            value={courseData.title}
            onChange={(e) =>
              setCourseData({
                ...courseData,
                title: e.target.value,
              })
            }
            className="outline-none py-3 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* Course Description */}

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">
            Course Description
          </label>

          <textarea
            placeholder="Write course description here..."
            rows={5}
            value={courseData.description}
            onChange={(e) =>
              setCourseData({
                ...courseData,
                description: e.target.value,
              })
            }
            className="outline-none py-3 px-4 rounded-lg border border-gray-300 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* Price / Discount / Category */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Price */}

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Course Price</label>

            <input
              type="number"
              placeholder="0"
              value={courseData.price}
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  price: e.target.value,
                })
              }
              className="outline-none py-3 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          {/* Discount */}

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Discount %</label>

            <input
              type="number"
              placeholder="0"
              value={courseData.discount}
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  discount: e.target.value,
                })
              }
              className="outline-none py-3 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          {/* Category */}

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Category</label>

            <select
              value={courseData.category}
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  category: e.target.value,
                })
              }
              className="outline-none py-3 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            >
              <option value="Development">Development</option>

              <option value="Business">Business</option>

              <option value="Design">Design</option>

              <option value="Marketing">Marketing</option>
            </select>
          </div>
        </div>

        {/* Course Level */}

        <div className="flex flex-col gap-2 max-w-sm">
          <label className="text-gray-700 font-medium">Course Level</label>

          <select
            value={courseData.level}
            onChange={(e) =>
              setCourseData({
                ...courseData,
                level: e.target.value,
              })
            }
            className="outline-none py-3 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          >
            <option value="Beginner">Beginner</option>

            <option value="Intermediate">Intermediate</option>

            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Button */}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg w-fit"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
