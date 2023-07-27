import React from "react";
import Wrapper from "./Wrapper";
import BlogItem from "./BlogItem";

const Blog = ({
  imageSrc,
  date,
  title,
  content,
  readMoreLink,
  readingTime,
}) => {
  return (
    <Wrapper className="py-10">
      <div className="flex flex-col mx-0 sm:mx-4 justify-center items-center mb-10 text-black">
        <h4 className=" font-semibold text-sm">#News</h4>
        <h2 className="text-4xl font-bold mb-4">Blog</h2>
        <p className=" text-sm w-80 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nam.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <BlogItem
          imageSrc={"./before.png"}
          date={"05.05.2023"}
          title={"Smile Beautiy: Dental Implant"}
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nam."
          }
        />
        <BlogItem
          imageSrc={"./before.png"}
          date={"05.05.2023"}
          title={"Smile Beautiy: Dental Implant"}
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nam."
          }
        />
        <BlogItem
          imageSrc={"./before.png"}
          date={"05.05.2023"}
          title={"Smile Beautiy: Dental Implant"}
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nam."
          }
        />
      </div>
    </Wrapper>
  );
};

export default Blog;
