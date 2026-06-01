import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();

  // LOCAL STORAGE COURSES

  const [allCourses, setAllCourses] = useState(() => {

    const savedCourses =
      localStorage.getItem("courses");

    return savedCourses
      ? JSON.parse(savedCourses)
      : dummyCourses;

  });

  // ENROLLED COURSES

  const [enrolledCourses, setEnrolledCourses] = useState(() => {

    const savedEnrollments =
      localStorage.getItem("enrolledCourses");

    return savedEnrollments
      ? JSON.parse(savedEnrollments)
      : [];

  });

  const [isEducator, setIsEducator] = useState(true);

  // SAVE COURSES

  useEffect(() => {

    localStorage.setItem(
      "courses",
      JSON.stringify(allCourses)
    );

  }, [allCourses]);

  // SAVE ENROLLMENTS

  useEffect(() => {

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolledCourses)
    );

  }, [enrolledCourses]);

  // ADD COURSE

  const addCourse = (courseData) => {

    setAllCourses((prev) => [
      ...prev,
      courseData,
    ]);

  };

  // REMOVE COURSE

  const removeCourse = (courseId) => {

    const updatedCourses = allCourses.filter(
      (course) => course._id !== courseId
    );

    setAllCourses(updatedCourses);

  };

  // ENROLL COURSE

  const enrollCourse = (course) => {

    const alreadyEnrolled = enrolledCourses.find(
      (item) => item._id === course._id
    );

    if (alreadyEnrolled) return;

    // UPDATE ENROLLED COURSES

    const updatedEnrollments = [
      ...enrolledCourses,
      course,
    ];

    setEnrolledCourses(updatedEnrollments);

    // UPDATE COURSE STUDENTS

    const updatedCourses = allCourses.map((item) => {

      if (item._id === course._id) {

        return {

          ...item,

          enrolledStudents: [
            ...(item.enrolledStudents || []),
            `user_${Date.now()}`
          ]

        };

      }

      return item;

    });

    setAllCourses(updatedCourses);

  };

  // CALCULATE RATING

  const calculateRating = (course) => {

    if (
      !course.courseRatings ||
      course.courseRatings.length === 0
    ) {
      return 0;
    }

    let totalRating = 0;

    course.courseRatings.forEach((rating) => {

      totalRating += rating.rating;

    });

    return totalRating / course.courseRatings.length;

  };

  // CONTEXT VALUE

  const value = {

    currency,

    navigate,

    allCourses,
    setAllCourses,

    enrolledCourses,
    setEnrolledCourses,

    addCourse,
    removeCourse,
    enrollCourse,

    calculateRating,

    isEducator,
    setIsEducator,

  };

  return (

    <AppContext.Provider value={value}>

      {props.children}

    </AppContext.Provider>

  );

};