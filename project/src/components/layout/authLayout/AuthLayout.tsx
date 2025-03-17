import Enter from "@/components/pages/auth/EnterPages";
import { FC, ReactNode } from "react";

interface IAuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
    return <Enter>{children}</Enter>;
};

export default AuthLayout;