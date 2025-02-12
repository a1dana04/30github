import React from "react";
import sass from "./Star.module.scss";

const Star = () => (
  <div className={sass.star}>
    {[sass.one, sass.two, sass.three, sass.four, sass.five].map((className, index) => (
      <div key={index} className={className}></div>
    ))}
  </div>
);

export default Star;