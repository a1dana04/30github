"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Loader from "@/components/ui/loader/Loader";

interface iLayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<iLayoutSiteProps> = ({ children }) => {
  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoader ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <section className={scss.LayoutSite}>
            <Header />
            <main>{children}</main>
            <Footer />
          </section>
        </>
      )}
    </>
  );
};

export default LayoutSite;
