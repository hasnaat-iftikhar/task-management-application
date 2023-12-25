import { FC, ReactNode } from "react";

// Components
import DashboardHeader from "./_components/Header";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <DashboardHeader />
      {children}
    </div>
  );
};

export default layout;
