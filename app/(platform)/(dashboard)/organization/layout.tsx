import { FC, ReactNode } from "react";

// Components
import Container from "@/components/others/Container";
import DashboardSidebar from "../_components/Sidebar";

interface OrganizationLayoutProps {
  children: ReactNode;
}

const OrganizationLayout: FC<OrganizationLayoutProps> = ({ children }) => {
  return (
    <Container className="h-full">
      <div className="h-full flex justify-between items-start">
        <DashboardSidebar className="max-w-[300px] mt-[20px] mr-[20px]" />
        <div className="h-full w-[1px] bg-[#0000001a]" />
        <div className="flex-1 mt-[20px]">{children}</div>
      </div>
    </Container>
  );
};

export default OrganizationLayout;
