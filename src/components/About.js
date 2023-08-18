import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function About({image= "https://via.placeholder.com/215"}) {
  return (
    <aside>
        <img src={image}  alt="blog logo"/>
        <p>{ About }</p>
    </aside>
  );
}

export default About;
