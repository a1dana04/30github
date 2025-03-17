"use client";
import DropDown from "@/components/ui/dropDown/DropDown";
import React, { useState } from "react";
import s from "./SelectDoctor.module.scss";
type DropDownItem = {
  id: number;
  title: string;
};

const fake_data1: DropDownItem[] = [
  { id: 1, title: "Эндокринолог" },
  { id: 2, title: "Терапевт" },
  { id: 3, title: "Кардиолог" },
  { id: 4, title: "Педиатр" },
  { id: 5, title: "Гематолог" },
  { id: 6, title: "Дерматолог" },
  { id: 7, title: "Акушер-гинеколог" },
  { id: 8, title: "Психатерапевт" },
];

const fake_data2: DropDownItem[] = [
  { id: 1, title: "Для взрослого" },
  { id: 2, title: "Для ребёнка" },
  { id: 3, title: "Для взрослого и ребёнка" },
];

const fake_data3: DropDownItem[] = [
  { id: 1, title: "Высшее образование" },
  { id: 2, title: "Кандидат медицинских наук" },
  { id: 3, title: "Доктор медицинских наук" },
];

const SelectDoctor = () => {


  return (
    <div className={s.choise}>
      <h1>Выберите врача</h1>
      <div className={s.choise__search}>
        <DropDown name={"Специальность"} data={fake_data1} />
        <DropDown name={"Приём"} data={fake_data2} />
        <DropDown name={"Образование"} data={fake_data3} />
        <button>Найти</button>
      </div>
   
    </div>
  );
};

export default SelectDoctor;
