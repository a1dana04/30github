import React from "react";
import EnterDate from "./EnterDate";
import EnterIn from "./EnterIn";
import PasswordRecovery from "./PasswordRecovery";
import Login from "./Login";
import Register from "./Register";
import s from "./EnterPages.module.scss"

const Enter = () => {
  return (
    <div id={s.enter}>
      <div className="container">
        <div className={s.enter}>
          <EnterDate />
          {/* <Register/> */}
          {/* <PasswordRecovery/> */}
          {/* <Login/> */}
          <EnterIn/>
        </div>
      </div>
    </div>
  );
};

export default Enter;
