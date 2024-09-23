import React from "react";
import user from "../../media/user1.jpeg";
import "../../index.css";

const ReviewCard = () => {
  const testimonial = {
    quote:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus quo asperiores, quia corrupti explicabo adipisci optio numquam, fugiat incidunt modi doloremque possimus dolore expedita ad vitae ipsum necessitatibus minus?",
    name: "John Doe",
    position: "CEO of Company",
    image: user, // Update with the correct path to an image
  };
  return (
    <div
      data-aos="fade-bottom"
      data-aos-once="true"
      data-aos-delay="800"
      className="max-w-full mt-10 mx-auto p-5 bg-white shadow-lg rounded-md h-auto flex flex-col gap-5 justify-center"
    >
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="w-12 h-12 mr-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-center roboto-medium">
            {testimonial.name}
          </h3>
          <p className="text-gray-500 text-center roboto-light">
            {testimonial.position}
          </p>
        </div>
      </div>
      <p className="texxt-lg italic text-center roboto-light">
        "{testimonial.quote}"
      </p>
    </div>
  );
};

export default ReviewCard;
