import Container from "@/components/others/Container";
import Logo from "@/components/others/Logo";
import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen h-auto flex justify-center items-center bg-primary">
      <div className="absolute top-0 w-full py-[20px]">
        <Container>
          <Logo variant="light" />
        </Container>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
