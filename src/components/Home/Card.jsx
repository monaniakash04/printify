import React from "react";
import user1 from "../../media/user1.jpeg"; // Update with the correct path

const Card = () => {
  return (
    <div className="w-full max-w-[600px] px-5 bg-white shadow-lg rounded-md h-auto flex flex-col justify-center">
      <div className="max-w-full h-[150px] flex justify-center items-center gap-4">
        <div className="max-w-full h-[90px]">
          <img
            src={user1}
            style={{ borderRadius: "100%" }}
            className="w-full mt-5 rounded-full object-fill h-full"
            alt=""
          />
        </div>
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-2xl roboto-regular">Nikki</h1>
          <h1 className="text-2xl roboto-regular text-green-500">Store Link</h1>
        </div>
      </div>
      <div className="w-full roboto-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        magni quia labore possimus expedita inventore odio! Voluptate cupiditate
        illum repudiandae, deserunt, optio quaerat vel molestiae a ut saepe sed
        officiis!
      </div>
    </div>
  );
};

export default Card;
