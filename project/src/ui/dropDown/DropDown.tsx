import React, { useState, useEffect, useRef } from "react";
import s from "./DropDown.module.scss"
type DropDownItem = {
  id: number;
  title: string;
};

interface DropDownProps {
  name: string;
  data: DropDownItem[];
}

const DropDown: React.FC<DropDownProps> = ({ name, data }) => {
  const [dropdownState, setDropDownState] = useState(false);
  const [choosed, setChoosed] = useState(name);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropDownState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={s.dropdown} ref={dropdownRef}>
      <div className={s.dropdown__title}>
        <h2>{choosed.length > 17 ? choosed.slice(0, 12) + "..." : choosed}</h2>
        <span
          onClick={() => setDropDownState(!dropdownState)}
          style={{ rotate: dropdownState ? "180deg" : "360deg" }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 11L14.5 18.5L22 11"
              stroke="black"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div
        className={s.dropdown__card}
        style={{ display: dropdownState ? "block" : "none" }}
      >
        {data.map((el) => (
          <p
            key={el.id}
            onClick={() => {
              setChoosed(el.title);
              setDropDownState(false);
            }}
          >
            {el.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
