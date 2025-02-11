"use client";
import React, { FC } from "react";
import scss from "./Loader.module.scss";

interface LoaderType {
  className?: string; 
}

const Loader: FC<LoaderType> = ({ className }) => {
  return (
    <div className={`${scss.loader} ${className || ""}`}>
      <div className={scss.infinityChrome}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
