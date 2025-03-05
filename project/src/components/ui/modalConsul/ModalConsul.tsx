import { useForm, SubmitHandler } from "react-hook-form";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import scss from "./modalConsul.module.scss";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
}

interface ModalConsulProps {
  type: "form" | "success";
  onClose: (type?: "success" | null) => void;
  onSubmit: (data: FormData) => Promise<void>; // Добавим обработчик submit
}

const ModalConsul: React.FC<ModalConsulProps> = ({ type, onClose, onSubmit }) => {
  const isSuccess = type === "success";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const submitHandler: SubmitHandler<FormData> = async (data) => {
    try {
      await onSubmit(data); // Вызываем переданную функцию отправки
      reset(); // Сбрасываем форму после успешной отправки
    } catch (error) {
      console.error("Ошибка при отправке:", error);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={scss.modal} onClick={handleOverlayClick}>
      <div className={scss.modalContent}>
        <p className={scss.close} onClick={() => onClose()}>
          <IoCloseOutline />
        </p>
        {isSuccess ? (
          <div className={scss.icon}>
            <div className={scss.icon1}>
              <h1>
                <IoIosCheckmarkCircle />
              </h1>
              <h2>Спасибо!</h2>
              <p>Ваша заявка успешно отправлена!</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className={scss.title}>Оставьте заявку на консультацию</h2>

            <form className={scss.form} onSubmit={handleSubmit(submitHandler)}>
              <input
                type="text"
                placeholder="Имя"
                className={`${scss.input} ${
                  errors.firstName ? scss.errorInput : ""
                }`}
                {...register("firstName", { required: "Имя обязательно" })}
              />

              <input
                type="text"
                placeholder="Фамилия"
                className={`${scss.input} ${
                  errors.lastName ? scss.errorInput : ""
                }`}
                {...register("lastName", { required: "Фамилия обязательна" })}
              />

              <input
                type="email"
                placeholder="Почта"
                className={`${scss.input} ${
                  errors.email ? scss.errorInput : ""
                }`}
                {...register("email", {
                  required: "Почта обязательна",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Введите корректный email",
                  },
                })}
              />

              <input
                type="tel"
                placeholder="Номер"
                className={`${scss.input} ${
                  errors.phone ? scss.errorInput : ""
                }`}
                {...register("phone", {
                  required: "Номер обязателен",
                })}
              />

              <select
                className={`${scss.input} ${
                  errors.country ? scss.errorInput : ""
                }`}
                {...register("country", { required: "Страна обязательна" })}
              >
                <option value="">Выберите страну</option>
                <option value="Kyrgyzstan">Кыргызстан</option>
                <option value="Russia">Россия</option>
                <option value="Kazakhstan">Казахстан</option>
                <option value="Bishkek">Бишкек</option>
                <option value="Other">Другая страна</option>
              </select>

              <button type="submit" className={scss.submitButton}>
                Отправить
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalConsul;