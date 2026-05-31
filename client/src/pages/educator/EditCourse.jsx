import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

const EditCourse = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { allCourses, setAllCourses } = useContext(AppContext);

  const existingCourse = allCourses.find(
    (course) => course._id.toString() === id
  );

  const [courseData, setCourseData] = useState({
    courseTitle: "",
    coursePrice: "",
    educatorName: "",
  });

  useEffect(() => {

    if (existingCourse) {

      setCourseData({
        courseTitle: existingCourse.courseTitle,
        coursePrice: existingCourse.coursePrice,
        educatorName:
          existingCourse.educatorName ||
          existingCourse.educator,
      });

    }

  }, [existingCourse]);

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });

  };

  // SAVE CHANGES

  const handleUpdate = (e) => {

    e.preventDefault();

    const updatedCourses = allCourses.map((course) => {

      if (course._id.toString() === id) {

        return {
          ...course,
          courseTitle: courseData.courseTitle,
          coursePrice: courseData.coursePrice,
          educatorName: courseData.educatorName,
        };

      }

      return course;

    });

    setAllCourses(updatedCourses);

    navigate("/educator/my-courses");

  };

  return (

    <div className="p-6 md:p-10 w-full">

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Edit Course
      </h1>

      <form
        onSubmit={handleUpdate}
        className="max-w-2xl bg-white p-8 rounded-2xl shadow-md border border-gray-200"
      >

        {/* TITLE */}

        <div className="mb-6">

          <label className="block text-gray-700 font-medium mb-2">
            Course Title
          </label>

          <input
            type="text"
            name="courseTitle"
            value={courseData.courseTitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            required
          />

        </div>

        {/* PRICE */}

        <div className="mb-6">

          <label className="block text-gray-700 font-medium mb-2">
            Course Price
          </label>

          <input
            type="number"
            name="coursePrice"
            value={courseData.coursePrice}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            required
          />

        </div>

        {/* EDUCATOR */}

        <div className="mb-8">

          <label className="block text-gray-700 font-medium mb-2">
            Educator Name
          </label>

          <input
            type="text"
            name="educatorName"
            value={courseData.educatorName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            required
          />

        </div>

        {/* BUTTON */}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition-all duration-300"
        >

          Save Changes

        </button>

      </form>

    </div>

  );

};

export default EditCourse;