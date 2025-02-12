"use client";
import React, { useState, useRef, useEffect } from "react";
import s from "./SearchDoctor.module.scss";
import { IoSearchSharp } from "react-icons/io5";
import { BsFunnel } from "react-icons/bs";

const SearchDoctor = () => {
  const [sortData, setSortData] = useState({
    state: false,
    title: `Сортировать по`,
  });

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setSortData((prev) => ({ ...prev, state: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSortMenu = () => {
    setSortData((prev) => ({ ...prev, state: !prev.state }));
  };

  return (
    <>
      <div className={s.choise__inputSearch}>
        <input type="text" placeholder="Введите имя специалиста" />
        <button>
          <IoSearchSharp />
        </button>
      </div>
      <div className={s.choise__sort} ref={menuRef}>
        <button onClick={toggleSortMenu}>
          {sortData.title}
          <BsFunnel />
        </button>
        {sortData.state && (
          <div className={s.choise__sort__option}>
            <p
              onClick={() =>
                setSortData({ state: false, title: "По стоимости" })
              }
            >
              По стоимости
            </p>
            <p
              onClick={() =>
                setSortData({ state: false, title: "По рейтингу" })
              }
            >
              По рейтингу
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchDoctor;
