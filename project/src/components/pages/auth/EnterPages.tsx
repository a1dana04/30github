import React, { FC, ReactNode } from "react";

import s from "./EnterPages.module.scss";
import Register from "./RegisterPatient";
import EnterIn from "./EnterIn";
import RegisterPatient from "./RegisterPatient";

interface EnterProps {
  children: ReactNode;
}

const Enter: FC<EnterProps> = ({ children }) => {
  return (
    <div id={s.enter}>
      <div className="container">
        <div className={s.enter}>
          {/* <EnterDate /> */}
          {/* <EnterIn/> */}
          {/* <Register/> */}
          {/* <PasswordRecovery/> */}
          {/* <Login/> */}

          {children}
        

        </div>
      </div>
    </div>
  );
};

export default Enter;
