import { FC, ReactNode } from "react";

// Components
import PlatformProvider from "@/components/shared/Provider";
import DashboardHeader from "./_components/Header";
import { Toaster } from "@/components/ui/toaster";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <PlatformProvider>
      <DashboardHeader />
      {children}
      <Toaster />
    </PlatformProvider>
  );
};

export default layout;
