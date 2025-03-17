"use client";
import React, { useState } from "react";
import logo from "@/assets/img/Logo.png";
import Image from "next/image";
import s from "@/components/pages/auth/RegisterDoc.module.scss";
import { useRouter } from "next/navigation";
import { useRegisterUserMutation } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";

const RegisterPatient = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<AUTH.RegisterUserRequest>();
  const [registerUser] = useRegisterUserMutation();

  const onSubmit: SubmitHandler<AUTH.RegisterUserRequest> = async (data) => {
    console.log(data);
    try {
      const res = await registerUser(data);

      if (res) {
        localStorage.setItem("tokens", JSON.stringify(res.data));
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.passRecovery}>
      <Image src={logo} alt="img" />
      <h1>Регистрация для врача</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.passRecoveryform}>
          <input
            {...register("email", { required: true })}
            placeholder="E mail*"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            required
            type="email"
          />
          <input
            {...register("username", { required: true })}
            placeholder="Username*"
            required
            type="text"
          />

          <input
            {...register("phone_number", { required: true })}
            placeholder="Phone number*"
            required
            type="text"
          />

          <select
            className={s.input1}
            {...register("special", { required: true })}
          >
            <option value="">Выберите специалиста</option>
            <option value="Kyrgyzstan">Кыргызстан</option>
            <option value="Russia">Россия</option>
            <option value="Kazakhstan">Казахстан</option>
            <option value="Bishkek">Бишкек</option>
       
          </select>

          <select
            className={s.input1}
            {...register("special", { required: true })}
          >
            <option value="">Выберите специалиста</option>
            <option value="Kyrgyzstan">Кыргызстан</option>
            <option value="Russia">Россия</option>
            <option value="Kazakhstan">Казахстан</option>
            <option value="Bishkek">Бишкек</option>
       
          </select>

          <select
            className={s.input1}
            {...register("special", { required: true })}
          >
            <option value="">Выберите специалиста</option>
            <option value="Kyrgyzstan">Кыргызстан</option>
            <option value="Russia">Россия</option>
            <option value="Kazakhstan">Казахстан</option>
            <option value="Bishkek">Бишкек</option>
       
          </select>


          <input
            {...register("password", { required: true })}
            placeholder="Пароль*"
            pattern=".{6,}"
            title="Password must be at least 6 characters long"
            required
          />
        </div>
        <div className={s.passRecoverybtn}>
          <button type="button" onClick={() => router.push("/auth/forPerDoc")}>
            Назад
          </button>
          <button type="submit">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPatient;
