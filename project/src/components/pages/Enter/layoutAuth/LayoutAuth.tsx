"use client";
import React, { FC, ReactNode } from "react";

interface LayoutAuthProps {
  children: ReactNode;
}

const LayoutAuth: FC<LayoutAuthProps> = ({ children }) => {
  return (
 
      <>{children}</>
   
  );
};

export default LayoutAuth;