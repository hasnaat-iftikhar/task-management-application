import { FC, ReactNode } from "react";

// Components
import PlatformProvider from "@/components/shared/Provider";
import DashboardHeader from "./_components/Header";
import { Toaster } from "@/components/ui/Toaster";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <PlatformProvider>
      <main className="h-screen flex flex-col w-full">
        <DashboardHeader />
        {children}
      </main>
      <Toaster />
    </PlatformProvider>
  );
};

export default layout;
