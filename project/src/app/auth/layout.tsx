"use client";
import AuthLayout from "@/components/layout/authLayout/AuthLayout";
import React, { FC, ReactNode } from "react";

interface RootLayoutClientProps {
  children: ReactNode;
}

const RootLayoutClient: FC<RootLayoutClientProps> = ({ children }) => {
  return (
    <>
      <AuthLayout>{children}</AuthLayout>
    </>
  );
};

export default RootLayoutClient;