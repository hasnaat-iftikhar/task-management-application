import { FC, ReactNode } from "react";

// Components
import Container from "@/components/others/Container";
import DashboardSidebar from "../_components/Sidebar";

interface OrganizationLayoutProps {
  children: ReactNode;
}

const OrganizationLayout: FC<OrganizationLayoutProps> = ({ children }) => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-start gap-[20px]">
          <DashboardSidebar className="max-w-[300px] mt-[20px]" />
          <div className="flex-1 mt-[20px]">{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default OrganizationLayout;
