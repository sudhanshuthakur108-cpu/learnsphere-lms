import React from "react";
import { dummyTestimonial, assets } from "../../assets/assets";

const TestimonialsSection = () => {

  return (

    <div className="pb-16 px-6 md:px-0">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
        Testimonials
      </h2>

      <p className="text-sm md:text-base text-gray-500 mt-4 text-center max-w-2xl mx-auto leading-7">
        Hear from our learners as they share their journeys of
        transformation, success, and how our platform has made a
        difference in their lives.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14 max-w-6xl mx-auto">

        {dummyTestimonial.map((testimonial, index) => (

          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >

            {/* Top */}
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-100">

              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>

                <h1 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h1>

                <p className="text-gray-500 text-sm">
                  {testimonial.role}
                </p>

              </div>

            </div>

            {/* Bottom */}
            <div className="p-5">

              {/* Stars */}
              <div className="flex gap-1">

                {[...Array(5)].map((_, i) => (

                  <img
                    key={i}
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                    className="w-5 h-5"
                  />

                ))}

              </div>

              {/* Feedback */}
              <p className="text-gray-500 text-[15px] leading-8 mt-5">
                {testimonial.feedback}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default TestimonialsSection;